<script>
	import Footer from '$lib/Footer.svelte';

	export let content = {
		title: 'Test',
		text: 'Test text',
		href: '/',
		src: '/'
	};
</script>

<div class="text-center w-full pb-44">
	<h1 class="mt-8 text-4xl uppercase text-white font-black tracking-wide mb-3">{content.title}</h1>
	<span class="uppercase text-base text-yellow-400 font-light tracking-wider">{content.text}</span>
</div>

<div class="relative w-screen">
	<div class="absolute bg-white w-full ">
		<div
			class="relative right-0 left-0 mx-auto -mt-20 bg-white border-t-yellow-400 border-t-15 drop-shadow-lg py-14 mb-20 text-center w-[1170px]"
		>
			<slot />
		</div>

		<Footer />
	</div>
</div>
