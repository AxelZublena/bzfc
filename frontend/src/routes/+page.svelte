<script lang="ts">
	import Card from '$lib/components/Card.svelte';
</script>

<Card>
	<h4>Qui sommes nous ?</h4>
	<div class="nav:flex flex-none mx-auto pt-5 w-3/4">
		<div class="basis-1/4 pb-4">
			<img src="/img/BZFC_logo.png" alt="BZFC_logo" width="100em" class="mx-auto" />
		</div>
		<div class="basis-3/4">
			<p class="nav:text-left nav:mx-0 mb-5">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis ratione maiores possimus
				eveniet quas exercitationem inventore, recusandae molestias. Quisquam expedita quis ducimus
				debitis dicta sint reprehenderit, quaerat quibusdam natus incidunt.
			</p>
			<a
				href="https://www.instagram.com/bzfcofficiel/"
				target="_blank"
				type="button"
				data-te-ripple-init
				data-te-ripple-color="light"
				class="w-min bg-yellow-400 mb-2 flex rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-black shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg pr-9 mx-auto nav:mx-0"
			>
				<img src="/img/insta.png" alt="Instagram logo" width="15em" class="mr-2 h-3.5 w-3.5" />
				Instagram
			</a>
		</div>
	</div>
</Card>
