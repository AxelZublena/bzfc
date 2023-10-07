<script lang="ts">
	import { urlFor } from '$lib/utils/image';
	import type { IPhoto } from '$lib/interfaces/IPhoto';

	export let photo: IPhoto;
</script>

<img
	src={urlFor(photo.img).url()}
	alt="{photo.title}-img"
	class="h-[15em] max-w-[15em] overflow-hidden object-cover mx-auto"
/>
