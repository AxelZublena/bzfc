import { getPhotos } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async () => {
    const photos = await getPhotos();

    if (photos) {
        return {
            photos
        };
    }

    throw error(404, 'Not found');
}) satisfies PageLoad;
