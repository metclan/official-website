export default {
  name: 'blog',
  type: 'document',
  title: 'Metclan Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'blogImage',
      type: 'image',
      title: 'Blog Image',
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
      options: {
        list: [
          {title: 'Web Development', value: 'Web Development'},
          {title: 'Cryptocurrency', value: 'Cryptocurrency'},
          {title: 'Software', value: 'Software'},
          {title: 'Tech', value: 'Tech'},
        ],
      },
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {source: 'title'},
    },
    {
      name: 'content',
      type: 'array',
      of: [{type: 'block'}, {type: 'image'}],
      title: 'Content',
    },
  ],
}
