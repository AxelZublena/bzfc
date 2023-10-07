<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import Photo from '$lib/components/Photo.svelte';
	import { urlFor } from '$lib/utils/image';
	import type { IPhoto } from '$lib/interfaces/IPhoto';

	import type { PageData } from './$types';

	export let data: PageData;
	let photos: IPhoto[] = data.photos;

	photos.forEach((photo, id) => (photo.id = id));
	console.log(photos);

	let modalHidden = true;

	/* let photos: Array<IPhoto> = [ */
	/* 	{ */
	/* 		id: 0, */
	/* 		title: 'Image 1', */
	/* 		date: '08/30/2022', */
	/* 		img: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg' */
	/* 	}, */
	/* 	{ */
	/* 		id: 1, */
	/* 		title: 'Image 2', */
	/* 		date: '08/30/2023', */
	/* 		img: '/img/BZFC_logo.png' */
	/* 	}, */
	/* 	{ */
	/* 		id: 2, */
	/* 		title: 'Image 3', */
	/* 		date: '08/30/2023', */
	/* 		img: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg' */
	/* 	}, */
	/* 	{ */
	/* 		id: 3, */
	/* 		title: 'Image 4', */
	/* 		date: '08/30/2023', */
	/* 		img: '/img/BZFC_logo.png' */
	/* 	} */
	/* ]; */
	let currentPhoto: IPhoto = photos[0];
</script>

<Card>
	<!-- <h4>Photos</h4> -->
	<div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
		{#each photos as photo}
			<div
				id={photo.id.toString()}
				on:click={() => {
					currentPhoto = photo;
					modalHidden = false;
				}}
				role="none"
			>
				<Photo {photo} />
			</div>
		{/each}
	</div>
</Card>
<div class="fixed inset-0 z-50 w-screen h-screen backdrop-blur-xl bg-black/30" hidden={modalHidden}>
	<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3">
		<h5 class="text-lg text-white absolute z-50 left-32">
			{currentPhoto.title}
		</h5>
		<p class="text-xs align-middle text-white absolute z-50 right-2 pt-2">
			{currentPhoto.date}
		</p>
		<button
			class="absolute z-50 right-0 m-5 opacity-50 hover:opacity-100"
			on:click={() => (modalHidden = true)}
		>
			<img src="/img/close.png" alt="close" class="w-full h-full object-cover" />
		</button>
		<button
			class="absolute z-50 top-[10%] right-0 m-5 opacity-50 hover:opacity-100 h-[80%]"
			on:click={() => {
				const previous = photos[photos.findIndex((element) => element === currentPhoto) + 1];
				if (previous != undefined) {
					currentPhoto = previous;
				}
			}}
		>
			<img src="/img/next.png" alt="next" class="w-full h-[13%] object-cover" />
		</button>
		<button
			class="absolute m-5 z-50 top-[10%] opacity-50 hover:opacity-100 h-[80%]"
			on:click={() => {
				const previous = photos[photos.findIndex((element) => element === currentPhoto) - 1];
				if (previous != undefined) {
					currentPhoto = previous;
				}
			}}
		>
			<img src="/img/prev.png" alt="previous" class="w-full h-[13%] object-cover" />
		</button>

		<img
			src={urlFor(currentPhoto.img).url()}
			alt="img"
			class="absolute z-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-full max-w-full mt-10"
		/>
	</div>
</div>
