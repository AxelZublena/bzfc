<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import Match from '$lib/components/Match.svelte';
	import type { PageData } from './$types';
	import type { IMatch } from '$lib/interfaces/IMatch';

	export let data: PageData;
	const matches: Array<IMatch> = data.matches;
	const wins = matches.reduce((a, b) => {
		if (b.butbzfc > b.butEquipeAdverse) {
			return a + 1;
		}
		return a;
	}, 0);
</script>

<Card>
	<h4>Les matches</h4>
	<h5>{wins} matche(s) gagné(s).</h5>

	{#if matches}
		{#each matches as match}
			<Match {match} />
		{/each}
	{:else}
		<p>La liste des joueurs ne peut pas être affichée.</p>
	{/if}

	<iframe
		src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Europe%2FParis&showTitle=0&showNav=1&showPrint=0&showTabs=0&hl=fr&showCalendars=0&showTz=0&title=BZFC&src=NTQ2NTcyNTlkZTJmZDk2MDE4MDUxYzE1ODMxMWQ3OWJhZTNjYWVkMDI2YjQzMWRiNjU2MjQ4ODk2OTU0ZDg0NkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23AD1457"
		style="border-width:0"
		frameborder="0"
		scrolling="no"
		title="BZFC's calendar"
		class="w-full h-full p-10"
	/>
</Card>
