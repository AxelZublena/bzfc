<script lang="ts">
	export let photo: string;
	export let title: string;
	export let date: string;
</script>

<h5 class="text-lg text-left">
	{title} <span class="text-xs align-middle">{date}</span>
</h5>
<img src={photo} alt="{title}=img" class="h-full w-full object-cover" />
