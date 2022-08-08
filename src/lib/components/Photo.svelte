<script lang="ts">
	export let photo;
</script>

<h5 class="text-lg text-left">
	{photo.title} <span class="text-xs align-middle">{photo.date}</span>
</h5>
<img src={photo.base64} alt="{photo.title}-img" class="h-full w-full object-cover" />
