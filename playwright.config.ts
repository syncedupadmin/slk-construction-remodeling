import { defineConfig, devices } from "@playwright/test";
export default defineConfig({ testDir: "./scripts/qa", webServer: { command: "npm run dev -- --port 3122", url: "http://127.0.0.1:3122", reuseExistingServer: false }, use: { baseURL: "http://127.0.0.1:3122", trace: "retain-on-failure" }, projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }] });
