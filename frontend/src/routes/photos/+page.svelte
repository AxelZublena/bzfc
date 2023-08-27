<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import Photo from '$lib/components/Photo.svelte';
	import type { IPhoto } from '$lib/interfaces/IPhoto';

	let modalHidden = true;

	let photos: Array<IPhoto> = [
		{
			id: 0,
			title: 'Image 1',
			date: '08/30/2022',
			img: '/img/BZFC_logo.png'
		},
		{
			id: 1,
			title: 'Image 2',
			date: '08/30/2023',
			img: '/img/BZFC_logo.png'
		}
	];
	let currentPhoto: IPhoto = photos[0];
</script>

<Card>
	<h4>Photos</h4>
	<div class="px-[30px] grid nav:grid-cols-4 gap-y-10 gap-x-8">
		{#each photos as photo}
			<div
				id={photo.id.toString()}
				class="h-40"
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
		<button
			class="absolute z-50 right-0 m-5 hover:opacity-30"
			on:click={() => (modalHidden = true)}
		>
			<img src="/img/close.png" alt="close" class="w-full h-full object-cover" />
		</button>
		<button
			class="absolute z-50 top-[10%] right-0 m-5 opacity-0 hover:opacity-100 h-[80%]"
			on:click={() => {
				const previous = photos[photos.findIndex((element) => element === currentPhoto) + 1];
				if (previous != undefined) {
					currentPhoto = previous;
				}
			}}
		>
			<img src="/img/next.png" alt="close" class="w-full h-[13%] object-cover" />
		</button>
		<button
			class="absolute m-5 z-50 top-[10%] opacity-0 hover:opacity-100 h-[80%]"
			on:click={() => {
				const previous = photos[photos.findIndex((element) => element === currentPhoto) - 1];
				if (previous != undefined) {
					currentPhoto = previous;
				}
			}}
		>
			<img src="/img/prev.png" alt="close" class="w-full h-[13%] object-cover" />
		</button>

		<img
			src={currentPhoto.img}
			alt="img"
			class="absolute z-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-full max-w-full"
		/>
	</div>
</div>
