export default {
  title: 'Post',
  name: 'post',
  type: 'document',
  fields: [
    {
      title: 'Author',
      name: 'author',
      type: 'reference',
      to: [{type: 'user'}],
    },
    {
      title: 'Photo',
      name: 'photo',
      type: 'image',
    },
    {
      title: 'Likes',
      name: 'likes',
      type: 'array',
      of: [
        {
          type: 'reference', //다른 사람들의 reference를 참조
          to: [{type: 'user'}], // 배열안의 object형식으로 참조
        },
      ],
      validation: (Rule) => Rule.unique(),
    },
    {
      title: 'Comments',
      name: 'comments',
      type: 'array',
      of: [
        {
          title: 'Comment',
          name: 'comment',
          type: 'document',
          fields: [
            {
              title: 'Author',
              name: 'author',
              type: 'reference',
              to: [{type: 'user'}],
            },
            {
              title: 'Comment',
              name: 'comment',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      //comments배열의 있는 0번째 comment를 가져올 것
      title: 'comments.0.comment',
      authorName: 'author.name',
      authorUsername: 'author.username',
      media: 'photo',
    },
    prepare(selection) {
      const {title, authorName, authorUsername, media} = selection
      return {
        title,
        subtitle: `by ${authorName} (${authorUsername})`,
        media,
      }
    },
  },
}
