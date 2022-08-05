<script>
	import Footer from './Footer.svelte';
	import Title from './Title.svelte';

	export let content = {};
</script>

<Title title={content.title} text={content.text} />
<div class="relative w-screen h-full">
	<div class="absolute bg-white w-full">
		<slot />
		<Footer />
	</div>
</div>
