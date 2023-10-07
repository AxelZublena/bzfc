<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import Card from '$lib/components/Card.svelte';
	import { formatDate } from '$lib/utils';
	import { urlFor } from '$lib/utils/image';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Card>
	<div class="mx-4 nav:mx-20">
		<h1 class="text-xl">
			{data.title}
		</h1>
		<p class="mb-5">
			{formatDate(data.date)}
		</p>
		{#if data.img}
			<img
				class="w-full h-[200px] object-cover overflow-hidden"
				src={urlFor(data.img).url()}
				alt="Cover image of {data.equipeAdverse} vs BZFC"
			/>
		{/if}
		<h2 class="pt-10">
			<span class="font-semibold"> BZFC </span> vs
			<span class="font-semibold">
				{data.equipeAdverse}
			</span>
		</h2>
		<div class="pt-5">
			<PortableText value={data.body} />
		</div>

		<a
			href="/matches"
			type="button"
			data-te-ripple-init
			data-te-ripple-color="light"
			class="w-fit bg-yellow-400 mb-2 flex rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-black shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg mx-auto mt-5"
		>
			Retour
		</a>
	</div>
</Card>
