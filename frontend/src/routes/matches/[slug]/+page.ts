import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getMatch } from '$lib/utils/sanity';

export const load = (async ({ params }) => {
    console.log(params.slug)
    const match = await getMatch(params.slug);
    if (match) return match;

    throw error(404, 'Not found');
}) satisfies PageLoad;
