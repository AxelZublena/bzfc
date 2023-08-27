import type { LayoutServerLoad } from "./$types"

export const load: LayoutServerLoad = async (event) => {

    return {
        segment: event.url.pathname,
    }
}
