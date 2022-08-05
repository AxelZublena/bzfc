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
	<div
		class="relative z-30 h-[80px] my-0 mx-auto bg-yellow-400 nav:h-fit nav:m-0 nav:bg-transparent"
	>
		<nav class="text-center mt-6 nav:pt-0 nav:mt-0">
			<ul class="p-0 m-0">
				<NavElement
					title="BZFC"
					selected={content.href == '/' ? true : false}
					href="/"
					src="img/BZFC_logo_transparent.png"
				/>
				<NavElement
					title="Equipe"
					selected={content.href == '/equipe' ? true : false}
					href="/equipe"
					src="img/about-icon.png"
				/>
				<NavElement
					title="Historique"
					selected={content.href == '/historique' ? true : false}
					href="/historique"
					src="img/hist-icon.png"
				/>
				<NavElement
					title="Photos"
					selected={content.href == '/photos' ? true : false}
					href="/photos"
					src="img/projects-icon.png"
				/>
				<NavElement
					title="Contact"
					selected={content.href == '/contact' ? true : false}
					href="/contact"
					src="img/contact-icon.png"
				/>
			</ul>
		</nav>
		<Page {content}>
			<slot />
		</Page>
		<!-- <Footer /> -->
	</div>

	<video autoplay loop muted class="">
		<source src="videos/video.mp4" type="video/mp4" />
		<source src="videos/video.ogg" type="video/ogg" />
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
