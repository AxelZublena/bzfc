<script lang="ts">
	import { goto } from '$app/navigation';
	import Card from '$lib/components/Card.svelte';

	let files: FileList;
	let name: string;
	let country: string = '🇫🇷';
	let position: string;
	let age: number;
	let description: string;

	let areFieldsFilled: boolean = true;

	async function uploadFunction() {
		try {
			if (
				name != null &&
				name != undefined &&
				name != '' &&
				!name &&
				country != null &&
				country != undefined &&
				country != '' &&
				!country &&
				position != null &&
				position != undefined &&
				position != '' &&
				!position &&
				age != null &&
				age != undefined &&
				age != 0 &&
				!age &&
				description != null &&
				description != undefined &&
				description != '' &&
				!description
			) {
				const file = files[0];

				const encodedImage = await getBase64(file);
				const post = {
					file: {
						text: encodedImage,
						name: file.name
					},
					name,
					country,
					position,
					age,
					description
				};

				await fetch('/equipe/players', {
					method: 'POST',
					body: JSON.stringify(post)
				});
				await goto('/equipe');
			} else {
				areFieldsFilled = false;
				return;
			}
		} catch (err) {
			if (err.message == "Cannot read properties of undefined (reading '0')") {
				areFieldsFilled = false;
			} else {
				console.error(err.message);
				(document.getElementById('image') as HTMLInputElement).value = '';
			}
		}
	}
	const getBase64 = (file: File) =>
		new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => resolve(reader.result);
			reader.onerror = (error) => reject(error);
		});
</script>

<Card>
	<h4>Les joueurs</h4>
	<p class="text-red-600 p-0 m-0" hidden={areFieldsFilled}>Veuillez remplir toutes les cases</p>

	<!-- <form class="w-full px-14" action="/equipe/players" method="POST"> -->
	<div class="w-full px-14">
		<div class="flex flex-wrap -mx-3 mb-6">
			<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
				<label
					class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
					for="grid-first-name"
				>
					Nom
				</label>
				<input
					class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
					id="name"
					name="name"
					placeholder="Jean"
					bind:value={name}
					required
				/>
			</div>
			<div class="w-full md:w-1/2 px-3">
				<label
					class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
					for="grid-last-name"
				>
					Nationalite
				</label>
				<input
					class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
					id="country"
					name="country"
					type="text"
					placeholder="Code HTML"
					bind:value={country}
					required
				/>
			</div>
		</div>
		<div class="flex flex-wrap -mx-3 mb-6">
			<div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
				<label
					class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
					for="grid-first-name"
				>
					Position
				</label>
				<input
					class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
					id="position"
					name="position"
					placeholder="Avant-droit"
					bind:value={position}
					required
				/>
			</div>
			<div class="w-full md:w-1/3 px-3">
				<label
					class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
					for="grid-last-name"
				>
					Age
				</label>
				<input
					class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
					id="age"
					name="age"
					type="number"
					placeholder="20"
					bind:value={age}
					required
				/>
			</div>
			<div class="w-full md:w-1/3 px-3">
				<label
					class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
					for="grid-last-name"
				>
					Image
				</label>
				<input
					class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
					id="image"
					name="image"
					type="file"
					accept=".png,.jpg"
					bind:files
					required
				/>
				<!-- on:change={() => getBase64(files[0])} -->
			</div>
		</div>
		<div class="flex flex-wrap -mx-3 mb-6">
			<div class="w-full px-3">
				<label
					class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
					for="grid-password"
				>
					Description
				</label>
				<textarea
					name="description"
					rows="6"
					class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
					id="description"
					placeholder="Description"
					bind:value={description}
					required
				/>
			</div>
		</div>
		<button
			type="submit"
			id="form-submit"
			class="inline-block py-[12px] px-[18px] font-normal rounded-md bg-green-500 text-white"
			on:click={uploadFunction}>Creer nouveau joueur</button
		>
	</div>
	<!-- </form> -->
</Card>
