import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'photo',
    title: 'Photo',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Titre',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'date',
            title: 'Date',
            type: 'date',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'img',
            title: 'Photo',
            type: 'image',
            options: {
                hotspot: false,
            },
            validation: (Rule) => Rule.required(),
        }),
    ]
})
