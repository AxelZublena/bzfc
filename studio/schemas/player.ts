import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'player',
    title: 'Joueur',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Nom',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'age',
            title: 'Age',
            type: 'number',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'position',
            title: 'Position',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'country',
            title: 'Pays',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'img',
            title: 'Image de profile',
            type: 'image',
            options: {
                hotspot: false,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: (Rule) => Rule.required(),
        }),
    ]
})
