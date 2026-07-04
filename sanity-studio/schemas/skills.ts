import { defineType, defineField } from "sanity";

export default defineType({
  name: "skills",
  title: "Skills",
  type: "document",
  fields: [
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      description: "e.g. Frontend, Backend, Design, Tools",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "skillList",
      title: "Skills",
      type: "array",
      of: [{ type: "string" }],
      description: "List of individual skills in this category",
    }),
  ],
});