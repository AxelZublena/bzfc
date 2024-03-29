import type { PortableTextBlock } from '@portabletext/types';
import { createClient } from '@sanity/client';
import type { ImageAsset, Slug } from '@sanity/types';
import groq from 'groq';

import { PUBLIC_SANITY_DATASET, PUBLIC_SANITY_PROJECT_ID } from '$env/static/public';
import type { IPlayer } from '$lib/interfaces/IPlayer';
import type { IMatch } from '$lib/interfaces/IMatch';
import type { IPhoto } from '$lib/interfaces/IPhoto';

if (!PUBLIC_SANITY_PROJECT_ID || !PUBLIC_SANITY_DATASET) {
    throw new Error('Did you forget to run sanity init --env?');
}

export const client = createClient({
    projectId: PUBLIC_SANITY_PROJECT_ID,
    dataset: PUBLIC_SANITY_DATASET,
    useCdn: false, // `false` if you want to ensure fresh data
    apiVersion: '2023-03-20' // date of setup
});

export async function getPosts(): Promise<Post[]> {
    return await client.fetch(
        groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`
    );
}

export async function getPost(slug: string): Promise<Post> {
    return await client.fetch(groq`*[_type == "post" && slug.current == $slug][0]`, {
        slug
    });
}

export async function getPlayers(): Promise<IPlayer[]> {
    return await client.fetch(
        groq`*[_type == "player"] | order(_createdAt desc)`
    );
}

export async function getPhotos(): Promise<IPhoto[]> {
    return await client.fetch(
        groq`*[_type == "photo"] | order(_createdAt desc)`
    );
}

export async function getMatches(): Promise<IPlayer[]> {
    return await client.fetch(
        groq`*[_type == "match" && defined(slug.current)] | order(_createdAt desc)`
    );
}

export async function getMatch(slug: string): Promise<IMatch> {
    return await client.fetch(groq`*[_type == "match" && slug.current == $slug][0]`, {
        slug
    });
}

export interface Post {
    _type: 'post';
    _createdAt: string;
    title?: string;
    slug: Slug;
    excerpt?: string;
    mainImage?: ImageAsset;
    body: PortableTextBlock[];
}
