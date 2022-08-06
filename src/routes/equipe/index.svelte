<script>
	import Card from '$lib/components/Card.svelte';
	import Player from '$lib/components/Player.svelte';

	const players = [
		{
			name: 'Joueur 1',
			age: 20,
			position: 'Avant-droit',
			country: '&#127467;&#127479;',
			description:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis ratione maiores possimus eveniet quas exercitationem inventore, recusandae molestias. Quisquam expedita quis ducimus debitis dicta sint reprehenderit, quaerat quibusdam natus incidunt.'
		},
		{
			name: 'Joueur 2',
			age: 20,
			position: 'Arriere-gauche',
			country: '&#127467;&#127479;',
			description:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis ratione maiores possimus eveniet quas exercitationem inventore, recusandae molestias. Quisquam expedita quis ducimus debitis dicta sint reprehenderit, quaerat quibusdam natus incidunt.'
		}
	];
	// export let players;
</script>

<!-- <script context="module"> -->
<!-- 	export async function load({ fetch }) { -->
<!-- 		const response = await fetch('/equipe/players'); -->
<!-- 		return { -->
<!-- 			status: response.status, -->
<!-- 			props: { -->
<!-- 				players: response.ok && (await response.json()).players -->
<!-- 			} -->
<!-- 		}; -->
<!-- 	} -->
<!-- </script> -->
<Card>
	<h4>Les joueurs</h4>
	<div class="-mb-8">
		{#each players as player}
			<Player {player} />
		{/each}
	</div>
</Card>
