import { chromium } from '@playwright/test';
import fs from 'node:fs';
const base=process.env.QA_BASE_URL||'http://localhost:3105';
const out='artifacts/premium-audit-after';fs.mkdirSync(out,{recursive:true});
const routes=['/','/services','/work','/process','/service-area','/contact'];
const browser=await chromium.launch({headless:true});const failures=[];const results=[];
const page=await browser.newPage();page.on('pageerror',e=>failures.push(e.message));
for(const width of [320,390,430,768,1440]){
 await page.setViewportSize({width,height:width===1440?1000:844});
 for(const route of routes){
  const r=await page.goto(base+route,{waitUntil:'networkidle'});await page.evaluate(async()=>{for(let y=0;y<document.body.scrollHeight;y+=700){scrollTo(0,y);await new Promise(r=>setTimeout(r,65))}scrollTo(0,0)});await page.locator("img").evaluateAll(async images => { await Promise.all(images.map(image => image.decode().catch(() => undefined))); });
  const data=await page.evaluate(()=>({overflow:document.documentElement.scrollWidth>innerWidth+1,broken:[...document.images].filter(i=>!i.complete||!i.naturalWidth).map(i=>i.src),h1:document.querySelectorAll('h1').length,canonical:document.querySelector('link[rel=canonical]')?.getAttribute('href'),robots:document.querySelector('meta[name=robots]')?.getAttribute('content')}));
  results.push({route,width,status:r.status(),...data});if(r.status()!==200||data.overflow||data.broken.length||data.h1!==1||!data.robots?.includes('noindex'))failures.push({route,width,...data});
  if([390,1440].includes(width)){const stem=(route==='/'?'home':route.slice(1))+'-'+(width===390?'mobile':'desktop');await page.screenshot({path:`${out}/${stem}-full.png`,fullPage:true});await page.screenshot({path:`${out}/${stem}-viewport.png`});}
 }
}
await page.setViewportSize({width:390,height:844});await page.goto(base);await page.getByRole('button',{name:'Menu',exact:false}).click();if(!await page.getByRole('navigation',{name:'Mobile navigation'}).isVisible())failures.push('mobile menu does not open');await page.getByRole('navigation',{name:'Mobile navigation'}).getByRole('link',{name:'Services',exact:false}).click();await page.waitForURL("**/services");if(!page.url().endsWith('/services'))failures.push('menu route failed');await page.emulateMedia({reducedMotion:'reduce'});await page.goto(base+'/contact');for(const path of ['/robots.txt','/sitemap.xml','/opengraph-image','/icon.svg']){const r=await page.request.get(base+path);if(!r.ok())failures.push(`${path} ${r.status()}`)}
fs.writeFileSync(`${out}/validation.json`,JSON.stringify({base,results,failures},null,2));await browser.close();console.log(JSON.stringify({checks:results.length,failures}));if(failures.length)process.exit(1);
