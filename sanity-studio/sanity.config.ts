import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "default",
  title: "Portfolio CMS",
  projectId: "YOUR_PROJECT_ID", // Will be provided after `npx sanity init`
  dataset: "production",
  plugins: [structureTool(), visionTool()],
  basePath: "/studio",
  schema: {
    types: schemaTypes,
  },
});