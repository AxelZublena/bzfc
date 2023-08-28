import { getPlayers } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async () => {
    const players = await getPlayers();

    if (players) {
        return {
            players
        };
    }

    throw error(404, 'Not found');
}) satisfies PageLoad;
