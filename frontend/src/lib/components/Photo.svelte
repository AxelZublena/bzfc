<script lang="ts">
	import type { IPhoto } from '$lib/interfaces/IPhoto';

	export let photo: IPhoto;
</script>

<img
	src={photo.img}
	alt="{photo.title}-img"
	class="h-[15em] max-w-[15em] overflow-hidden object-cover mx-auto"
/>
