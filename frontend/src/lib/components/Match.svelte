<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { urlFor } from '$lib/utils/image';
	import { PortableText } from '@portabletext/svelte';
	import type { IMatch } from '$lib/interfaces/IMatch';

	export let match: IMatch;
</script>

<div class="flex">
	{#if match.image}
		<img
			src={urlFor(match.image).width(200).height(200).url()}
			alt="Cover image for {match.equipeAdverse}"
		/>
	{:else}
		<div class="card__cover--none" />
	{/if}

	<div class="card__container">
		<a class="card__link" href={`/matches/${match.slug.current}`}>
			BZFC {match.butbzfc} - {match.butEquipeAdverse}
			{match.equipeAdverse}
		</a>
		<PortableText value={match.body} />
		<p class="card__date">
			{formatDate(match.date)}
		</p>
	</div>
</div>
