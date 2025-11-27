import { defineType, defineField } from "sanity";

export default defineType({
  name: "profile",
  title: "Profile",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role / Title",
      type: "string",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "interests",
      title: "Interests",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "picture",
      title: "Profile Picture",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});
