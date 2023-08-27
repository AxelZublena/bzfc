<script lang="ts">
	import Footer from './Footer.svelte';
	import Title from './Title.svelte';

	interface Route {
		title: string;
		text: string;
		href: string;
		src: string;
	}
	export let content: Route;
</script>

<Title title={content.title} text={content.text} />
<div class="relative w-screen h-full">
	<div class="absolute bg-white w-full">
		<slot />
		<Footer />
	</div>
</div>
