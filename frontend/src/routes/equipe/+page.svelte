<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import Player from '$lib/components/Player.svelte';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Card>
	<h4>Les joueurs</h4>
	{#if data.players.length}
		<div class="-mb-8">
			{#each data.players as player}
				<Player {player} />
			{/each}
		</div>
	{:else}
		<p>La liste des joueurs ne peut pas être affichée.</p>
	{/if}
</Card>
