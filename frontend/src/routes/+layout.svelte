<script lang="ts">
	import '../app.css';

	import NavElement from '$lib/components/NavElement.svelte';
	import Page from '$lib/components/Page.svelte';

	export let data: any;
	$: segment = data.segment;

	const contents: Route[] = [
		{
			title: 'BZFC',
			text: "Plus fort que l'effort",
			href: '/',
			src: '/img/BZFC_logo_transparent.png'
		},
		{
			title: "L'équipe",
			text: "Présentation de l'équipe",
			href: '/equipe',
			src: '/img/about-icon.png'
		},
		{
			title: 'Matches',
			text: '',
			href: '/matches',
			src: '/img/hist-icon.png'
		},
		{
			title: 'Photos',
			text: '',
			href: '/photos',
			src: '/img/projects-icon.png'
		}
		/* contact: { */
		/* 	title: 'Contact', */
		/* 	text: 'Text pour le contact', */
		/* 	href: '/contact', */
		/* 	src: '/img/contact-icon.png' */
		/* } */
	];

	interface Route {
		title: string;
		text: string;
		href: string;
		src: string;
	}
	function checkRoute(segment: string): Route {
		if (segment.includes('equipe')) {
			return contents[1];
		} else if (segment.includes('matches')) {
			return contents[2];
		} else if (segment.includes('photos')) {
			return contents[3];
		} else {
			return contents[0];
		}
	}
	$: content = checkRoute(segment);
</script>

<svelte:head>
	<title>{content.title}</title>
</svelte:head>
<section class="relative flex h-screen justify-center overflow-x-hidden">
	<div
		class="relative z-30 h-[80px] my-0 mx-auto bg-yellow-400 nav:h-fit nav:m-0 nav:bg-transparent"
	>
		<nav class="text-center mt-6 nav:pt-0 nav:mt-0">
			<ul class="p-0 m-0">
				{#each contents as { title, href, src }}
					{#if title == 'BZFC'}
						<NavElement {title} selected={content.href == '/' ? true : false} {href} {src} />
					{:else}
						<NavElement
							{title}
							selected={content.href.includes(href) ? true : false}
							{href}
							{src}
						/>
					{/if}
				{/each}
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
