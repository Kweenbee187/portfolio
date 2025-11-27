import { defineType, defineField } from "sanity";

export default defineType({
  name: "resume",
  title: "Resume",
  type: "document",
  fields: [
    defineField({
      name: "file",
      title: "PDF File",
      type: "file",
    }),
  ],
});
