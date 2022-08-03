<script>
	import '../app.css';

	import NavElement from '$lib/NavElement.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<section class="relative flex h-screen justify-center overflow-hidden">
	<div class="relative z-30">
		<nav class="text-center">
			<!-- <span class="cd-marker item-1" /> -->
			<ul class="p-0 m-0">
				<NavElement title="Home" selected={true} href="/" src="img/home-icon.png" />
				<NavElement title="About" selected={false} href="/" src="img/about-icon.png" />
				<NavElement title="Featured" selected={false} href="/" src="img/featured-icon.png" />
				<NavElement title="Projects" selected={false} href="/" src="img/projects-icon.png" />
				<NavElement title="Contact" selected={false} href="/" src="img/contact-icon.png" />
			</ul>
		</nav>

		<div class="text-center w-full pb-44">
			<h1 class="mt-8 text-4xl uppercase text-white font-black tracking-wide mb-3">BZFC</h1>
			<span class="uppercase text-base text-yellow-400 font-light tracking-wider"
				>Plus fort que l'effort</span
			>
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
	</div>

	<div class="absolute z-20 w-auto min-w-full min-h-full max-w-none bg-black bg-opacity-75" />
	<video autoplay loop muted class="absolute z-10 w-auto min-w-full min-h-full max-w-none">
		<source src="videos/video.mp4" type="video/mp4" />
		<source src="videos/video.ogg" type="video/ogg" />
		Your browser does not support the video tag.
	</video>
</section>
