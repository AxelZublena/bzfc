<script context="module">
	export async function load({ url, session }) {
		if (/.*(create|update|edit|delete)/.test(url.pathname) && session.user === '') {
			return { redirect: '/', status: 302 };
		}
		return {
			props: {
				segment: url.pathname
			}
		};
	}
</script>

<script>
	import '../app.css';

	import NavElement from '$lib/NavElement.svelte';
	import Page from '$lib/Page.svelte';

	export let segment;

	const contents = {
		bzfc: {
			title: 'BZFC',
			text: "Plus fort que l'effort",
			href: '/',
			src: 'img/BZFC_logo_transparent.png'
		},
		equipe: {
			title: "L'equipe",
			text: "Text pour l'equipe",
			href: '/equipe',
			src: 'img/about-icon.png'
		},
		historique: {
			title: 'Historique',
			text: "Text pour l'historique",
			href: '/historique',
			src: 'img/hist-icon.png'
		},
		photos: {
			title: 'Photos',
			text: 'Text pour les photos',
			href: '/photos',
			src: 'img/projects-icon.png'
		},
		contact: {
			title: 'Contact',
			text: 'Text pour le contact',
			href: '/contact',
			src: 'img/contact-icon.png'
		}
	};

	function checkRoute(segment) {
		switch (segment) {
			case '/':
				return contents.bzfc;
			case '/equipe':
				return contents.equipe;
			case '/historique':
				return contents.historique;
			case '/photos':
				return contents.photos;
			case '/contact':
				return contents.contact;
			default:
				return {};
		}
	}
	$: content = checkRoute(segment);
</script>

<section class="relative flex h-screen justify-center overflow-x-hidden">
	<div class="relative z-30">
		<nav class="text-center">
			<ul class="p-0 m-0">
				<NavElement title="BZFC" selected={true} href="/" src="img/BZFC_logo_transparent.png" />
				<NavElement title="Equipe" selected={false} href="/equipe" src="img/about-icon.png" />
				<NavElement
					title="Historique"
					selected={false}
					href="/historique"
					src="img/hist-icon.png"
				/>
				<NavElement title="Photos" selected={false} href="/photos" src="img/projects-icon.png" />
				<NavElement title="Contact" selected={false} href="/contact" src="img/contact-icon.png" />
			</ul>
		</nav>
		<Page {content}>
			<slot />
		</Page>
	</div>

	<!-- <div class="absolute z-20 w-auto min-w-full min-h-screen max-w-none bg-black bg-opacity-75" /> -->
	<div class="absolute w-full h-full overflow-hidden">
		<video autoplay loop muted class="">
			<source src="videos/video.mp4" type="video/mp4" />
			<source src="videos/video.ogg" type="video/ogg" />
			Your browser does not support the video tag.
		</video>
	</div>
</section>

<style>
	video {
		opacity: 0.9;
		-webkit-filter: brightness(0.1);
		filter: brightness(0.1);
		/* height: 100%; */
		width: 100%;
	}
</style>
