<script lang="ts">
	import type { IPhoto } from '$lib/interfaces/IPhoto';

	export let photo: IPhoto;
</script>

<h5 class="text-lg text-left">
	{photo.title} <span class="text-xs align-middle">{photo.date}</span>
</h5>
<img src={photo.img} alt="{photo.title}-img" class="h-full w-full object-cover" />
