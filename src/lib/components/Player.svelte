<script>
	export let player = {};

	async function del() {
		let res = await fetch('/equipe/players?id=' + player.id, {
			method: 'DELETE'
		});
	}
</script>

<div class="sm:flex gap-10 mx-8 mb-8">
	<div class="w-1/6 mx-auto sm:mx-0">
		<img src={player.img} alt="BZFC_logo" class="object-cover rounded-sm mx-auto max-h-1/2" />
	</div>
	<div class="sm:w-5/6 text-left">
		<h5>{player.name}</h5>
		<p>{player.description}</p>
		<p><b>Position:</b> {player.position}</p>
		<p><b>Age:</b> {player.age}</p>
		<p><b>Nationalite:</b> {@html player.country}</p>
	</div>
	<button
		id={player.id}
		class="inline-block py-[12px] px-[18px] font-normal rounded-md bg-red-500 text-white"
		on:click={del}>Delete</button
	>
</div>

<style>
	p {
		@apply m-0 p-0;
	}
</style>
