import {defineField} from 'sanity'

export default defineField({
  name: 'block.textSegment',
  type: 'object',
  title: 'Text Segment',
  preview: {
    select: {
      title: 'textSegment',
    },
    prepare(value) {
      const block = (value.title || []).find((block: any) => block._type === 'block')
      return {
        title: block
          ? block.children
              .filter((child: {_type: string}) => child._type === 'span')
              .map((span: {text: any}) => span.text)
              .join('')
          : 'No title',
        subtitle: 'Text Segment Component',
        media: <span>🎫</span>,
      }
    },
  },
  fields: [
    {
      name: 'textSegment',
      title: 'Text Segment',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
})
