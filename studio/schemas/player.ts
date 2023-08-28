import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'player',
    title: 'Player',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Nom',
            type: 'string',
        }),
        defineField({
            name: 'age',
            title: 'Age',
            type: 'number',
        }),
        defineField({
            name: 'position',
            title: 'Position',
            type: 'string',
        }),
        defineField({
            name: 'country',
            title: 'Pays',
            type: 'string',
        }),
        defineField({
            name: 'img',
            title: 'Image de profile',
            type: 'image',
            options: {
                hotspot: false,
            },
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
    ]
})
