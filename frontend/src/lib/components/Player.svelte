<script lang="ts">
	import { urlFor } from '$lib/utils/image';
	import type { IPlayer } from '$lib/interfaces/IPlayer';

	export let player: IPlayer;
</script>

<div class="sm:flex gap-10 mx-8 mb-8">
	<div class="w-1/6 mx-auto sm:mx-0 hidden sm:block">
		<img
			src={urlFor(player.img).url()}
			alt="BZFC_logo"
			class="object-cover rounded-sm mx-auto max-h-36"
		/>
	</div>
	<div class="sm:w-5/6 sm:text-left text-center">
		<h5>{player.name}</h5>
		<p>{player.description}</p>
		<p><b>Position:</b> {player.position}</p>
		<p><b>Age:</b> {player.age}</p>
		<p><b>Nationalite:</b> {@html player.country}</p>
	</div>
</div>

<style>
	p {
		@apply m-0 p-0;
	}
</style>
