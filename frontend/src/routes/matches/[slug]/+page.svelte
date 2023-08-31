<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import Card from '$lib/components/Card.svelte';
	import { formatDate } from '$lib/utils';
	import { urlFor } from '$lib/utils/image';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Card>
	{#if data.image}
		<img
			class="post__cover"
			src={urlFor(data.image).url()}
			alt="Cover image of {data.equipeAdverse} vs BZFC"
		/>
	{:else}
		<div class="post__cover--none" />
	{/if}
	<div class="post__container">
		<h1 class="post__title">{data.equipeAdverse}</h1>
		<p class="post__date">
			{formatDate(data.date)}
		</p>
		<div class="post__content">
			<PortableText value={data.body} />
		</div>
	</div>
</Card>
