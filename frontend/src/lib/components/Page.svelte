<script lang="ts">
	import Footer from './Footer.svelte';
	import Title from './Title.svelte';
	import { victories } from '$lib/store';
	import { onDestroy } from 'svelte';

	interface Route {
		title: string;
		text: string;
		href: string;
		src: string;
	}
	export let content: Route;

	let wins = '';
	const unsubscribe = victories.subscribe((value) => (wins = value));

	onDestroy(unsubscribe);
</script>

{#if wins != '' && content.href == '/matches'}
	<Title title={content.title} text={wins + ' victoire(s)'} />
{:else}
	<Title title={content.title} text={content.text} />
{/if}
<div class="relative w-screen h-full">
	<div class="absolute bg-white w-full">
		<slot />
		<Footer />
	</div>
</div>
