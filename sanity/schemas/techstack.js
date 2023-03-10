import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'techstack',
  title: 'Tech Stack',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
  ],
})
