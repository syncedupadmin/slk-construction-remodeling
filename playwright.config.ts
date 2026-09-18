import { defineConfig, devices } from "@playwright/test";
const externalURL = process.env.QA_BASE_URL;
export default defineConfig({
  workers: 1,
  testDir: "./scripts/qa",
  webServer: externalURL ? undefined : { command: "npm run dev -- --port 3122", url: "http://127.0.0.1:3122", reuseExistingServer: false },
  use: { baseURL: externalURL ?? "http://127.0.0.1:3122", trace: "retain-on-failure" },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }]
});
