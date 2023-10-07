import { getMatches } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async () => {
    const matches = await getMatches();

    if (matches) {
        return {
            matches
        };
    }

    throw error(404, 'Not found');
}) satisfies PageLoad;
