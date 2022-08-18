<script context="module">
	/** @type {import('@sveltejs/kit').ErrorLoad} */
	export function load({ error, status }) {
		return {
			props: {
				code: status,
				error: error
			}
		};
	}
</script>

<script lang="ts">
	import '../app.css';
	import Card from '$lib/components/Card.svelte';

	export let code: string;
	export let error: any;
</script>

<Card>
	<h1 class="text-blue-400 text-3xl pb-5">Error {code}</h1>
	<h2 class="text-xl">{error.message}</h2>
</Card>
