import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),

    defineField({
      name: 'techstack',
      title: 'Tech Stack',
      type: 'array',
      of: [{type: 'reference', to: {type: 'techstack'}}],
    }),

    defineField({
      name: 'githubLink',
      title: 'Github Link',
      type: 'url',
    }),

    defineField({
      name: 'liveLink',
      title: 'Live Link',
      type: 'url',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      image: 'image',
    },
  },
})
