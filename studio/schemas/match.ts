import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'match',
    title: 'Match',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Titre',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            validation: (Rule) => Rule.required(),
            options: {
                source: (doc) => `${doc.title}+${doc.date}`,
                maxLength: 255,
            },
        }),
        defineField({
            name: 'date',
            title: 'date',
            type: 'date',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'butbzfc',
            title: 'But(s) BZFC',
            type: 'number',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'equipeAdverse',
            title: 'Equipe Adverse',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'butEquipeAdverse',
            title: 'But(s) Equipe Adverse',
            type: 'number',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'img',
            title: 'Image',
            type: 'image',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            media: 'image',
            author: 'admin'
        },
        prepare(selection) {
            const { author } = selection
            return { ...selection, subtitle: author && `by ${author}` }
        },
    },
})
