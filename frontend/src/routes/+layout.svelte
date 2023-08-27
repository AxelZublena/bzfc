<script lang="ts">
	import '../app.css';

	import NavElement from '$lib/components/NavElement.svelte';
	import Page from '$lib/components/Page.svelte';

	export let data: any;
	$: segment = data.segment;

	const contents = {
		bzfc: {
			title: 'BZFC',
			text: "Plus fort que l'effort",
			href: '/',
			src: '/img/BZFC_logo_transparent.png'
		},
		equipe: {
			title: "L'equipe",
			text: "Text pour l'equipe",
			href: '/equipe',
			src: '/img/about-icon.png'
		},
		historique: {
			title: 'Historique',
			text: "Text pour l'historique",
			href: '/historique',
			src: '/img/hist-icon.png'
		},
		photos: {
			title: 'Photos',
			text: 'Text pour les photos',
			href: '/photos',
			src: '/img/projects-icon.png'
		},
		contact: {
			title: 'Contact',
			text: 'Text pour le contact',
			href: '/contact',
			src: '/img/contact-icon.png'
		}
	};

	interface Route {
		title: string;
		text: string;
		href: string;
		src: string;
	}
	function checkRoute(segment: string): Route {
		if (segment.includes('equipe')) {
			return contents.equipe;
		} else if (segment.includes('historique')) {
			return contents.historique;
		} else if (segment.includes('photos')) {
			return contents.photos;
		} else if (segment.includes('contact')) {
			return contents.contact;
		} else {
			return contents.bzfc;
		}
	}
	$: content = checkRoute(segment);
</script>

<section class="relative flex h-screen justify-center overflow-x-hidden">
	<div
		class="relative z-30 h-[80px] my-0 mx-auto bg-yellow-400 nav:h-fit nav:m-0 nav:bg-transparent"
	>
		<nav class="text-center mt-6 nav:pt-0 nav:mt-0">
			<ul class="p-0 m-0">
				<NavElement
					title="BZFC"
					selected={content.href == '/' ? true : false}
					href="/"
					src="/img/BZFC_logo_transparent.png"
				/>
				<NavElement
					title="Equipe"
					selected={content.href.includes('/equipe') ? true : false}
					href="/equipe"
					src="/img/about-icon.png"
				/>
				<NavElement
					title="Historique"
					selected={content.href.includes('/historique') ? true : false}
					href="/historique"
					src="/img/hist-icon.png"
				/>
				<NavElement
					title="Photos"
					selected={content.href.includes('/photos') ? true : false}
					href="/photos"
					src="/img/projects-icon.png"
				/>
				<NavElement
					title="Contact"
					selected={content.href.includes('/contact') ? true : false}
					href="/contact"
					src="/img/contact-icon.png"
				/>
			</ul>
		</nav>
		<Page {content}>
			<slot />
		</Page>
	</div>

	<video autoplay loop muted class="">
		<source src="/videos/video.mp4" type="video/mp4" />
		Your browser does not support the video tag.
	</video>
</section>

<style>
	video {
		opacity: 0.9;
		-webkit-filter: brightness(0.1);
		filter: brightness(0.1);

		height: 100%;
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		object-fit: cover;
	}
</style>
