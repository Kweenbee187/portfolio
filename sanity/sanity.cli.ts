import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "8f9ght00",
    dataset: "production",
  },
  deployment: {
    appId: "zbz5o343aojpphgyer8x8o8u",   // ← paste this
    autoUpdates: true,
  },
});
