<script lang="ts">
	import { goto } from '$app/navigation';
	import Card from '$lib/components/Card.svelte';

	let files: FileList;
	let title: string;
	let date: Date;

	let areFieldsFilled: boolean = true;

	async function uploadFunction() {
		try {
			if (title != null && title != undefined && title != '' && date != null && date != undefined) {
				const file = files[0];

				const encodedImage = await getBase64(file);
				const post = {
					file: {
						text: encodedImage,
						name: file.name
					},
					title,
					date: new Date(date).toLocaleDateString('fr-FR')
				};

				await fetch('/photos/photos', {
					method: 'POST',
					body: JSON.stringify(post)
				});
				await goto('/photos');
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

	<div class="w-full px-14">
		<div class="flex flex-wrap -mx-3 mb-6">
			<div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
				<label
					class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
					for="grid-first-name"
				>
					Title
				</label>
				<input
					class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
					id="title"
					name="title"
					placeholder="Photo 1"
					bind:value={title}
					required
				/>
			</div>
			<div class="w-full md:w-1/3 px-3">
				<label
					class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
					for="grid-last-name"
				>
					Date
				</label>
				<input
					class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
					id="date"
					name="date"
					type="datetime-local"
					placeholder="20"
					bind:value={date}
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
			</div>
		</div>
		<button
			type="submit"
			id="form-submit"
			class="inline-block py-[12px] px-[18px] font-normal rounded-md bg-green-500 text-white"
			on:click={uploadFunction}>Creer photo</button
		>
	</div>
</Card>
