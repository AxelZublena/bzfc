<script>
	import Card from '$lib/Card.svelte';
	import Player from '$lib/Player.svelte';

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
</script>

<Card>
	<h4>Les joueurs</h4>
	<div class="-mb-8">
		{#each players as player}
			<Player {player} />
		{/each}
	</div>
</Card>
