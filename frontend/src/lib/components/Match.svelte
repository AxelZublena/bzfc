<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { urlFor } from '$lib/utils/image';
	import type { IMatch } from '$lib/interfaces/IMatch';

	export let match: IMatch;
</script>

<div class="sm:flex gap-10 mx-8 mb-8">
	<div class="w-1/6 mx-auto sm:mx-0 hidden sm:block">
		<a href={`/matches/${match.slug.current}`}>
			<img
				src={urlFor(match.img).url()}
				alt="BZFC_logo"
				class="object-cover rounded-sm mx-auto max-h-36"
			/>
		</a>
	</div>
	<div class="sm:w-5/6 sm:text-left text-center">
		<a href={`/matches/${match.slug.current}`}>
			<h3>
				BZFC {match.butbzfc} - {match.butEquipeAdverse}
				{match.equipeAdverse}
			</h3>
			<p>{formatDate(match.date)}</p>
		</a>
	</div>
</div>

<!-- <div class="w-96"> -->
<!-- 	<a href={`/matches/${match.slug.current}`}> -->
<!-- 		<div class="mx-auto w-full"> -->
<!-- 			<h3 class="text-xl w-full"> -->
<!-- 				<p> -->
<!-- 					BZFC {match.butbzfc} - {match.butEquipeAdverse} -->
<!-- 					{match.equipeAdverse} -->
<!-- 				</p> -->
<!-- 			</h3> -->
<!-- 			<p class="w-full text-center m-0"> -->
<!-- 				{formatDate(match.date)} -->
<!-- 			</p> -->
<!-- 		</div> -->
<!-- 		{#if match.image} -->
<!-- 			<img -->
<!-- 				src={urlFor(match.image).width(200).height(200).url()} -->
<!-- 				alt="Cover image for {match.equipeAdverse}" -->
<!-- 				class="w-full h-56 object-cover p-5" -->
<!-- 			/> -->
<!-- 		{:else} -->
<!-- 			<img -->
<!-- 				src="img/BZFC_logo.png" -->
<!-- 				alt="Cover image for {match.equipeAdverse}" -->
<!-- 				class="w-full h-56 object-cover" -->
<!-- 			/> -->
<!-- 		{/if} -->
<!-- 	</a> -->
<!-- </div> -->

<style>
	p {
		@apply m-0 p-0;
	}
</style>
