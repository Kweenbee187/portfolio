// env.ts — Sanity environment configuration

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-10-01";

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "8f9ght00";

// Utility to ensure required env variables exist
export function assertEnv() {
  if (!projectId) {
    throw new Error("Missing: NEXT_PUBLIC_SANITY_PROJECT_ID");
  }
  if (!dataset) {
    throw new Error("Missing: NEXT_PUBLIC_SANITY_DATASET");
  }
}
