<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	/* import Match from '$lib/components/Match.svelte'; */
	import type { PageData } from './$types';
	import type { IMatch } from '$lib/interfaces/IMatch';

	import { victories } from '$lib/store';

	export let data: PageData;
	const matches: Array<IMatch> = data.matches;
	const wins = matches.reduce((a, b) => {
		if (b.butbzfc > b.butEquipeAdverse) {
			return a + 1;
		}
		return a;
	}, 0);
	victories.set(wins.toString());

	const classWin = 'font-medium text-black';
	const classLose = 'font-light text-gray-600';

	let commingMatches: IMatch[] = [];
	let previousMatches: IMatch[] = [];
	matches.forEach((match) => {
		const date: number = new Date(match.date).getTime();
		const currentDate: number = new Date().getTime();
		if (date > currentDate) {
			commingMatches.push(match);
		} else {
			previousMatches.push(match);
		}
	});

	function formatDate(date: string): string {
		const dateTime: Date = new Date(date);
		return dateTime.getDay() + '/' + dateTime.getMonth() + '/' + dateTime.getFullYear();
	}
</script>

<Card>
	<!-- <h4>Les matches</h4> -->
	{#if matches}
		<table class="min-w-full text-center text-sm font-light">
			<thead class="border-b bg-neutral-200 font-medium border-neutral-500 text-neutral-800">
				<tr>
					<th class="pl-2 nav:px-6 py-4 nav:w-48" />
					<th class="nav:px-6 py-3 text-center text-lg">A VENIR</th>
					<th class="pr-2 nav:px-6 py-4 w-20 sm:w-36 nav:w-48" />
				</tr>
			</thead>
			<tbody>
				{#each commingMatches as match}
					<tr>
						<td class="whitespace-nowrap pl-2 nav:px-6 py-4 text-left nav:w-48"
							>{formatDate(match.date)}</td
						>
						<!-- Remplacer par titre? -->
						<td class="whitespace-nowrap nav:px-6 py-4 text-center">BZFC - {match.equipeAdverse}</td
						>
						<td class="whitespace-nowrap pr-2 nav:px-6 py-4 text-end nav:w-48">
							<a
								href={`/matchs/${match.slug.current}`}
								class="hidden nav:block underline underline-offset-4">En Savoir Plus</a
							>
							<a href={`/matchs/${match.slug.current}`} class="nav:hidden">&#9432;</a>
						</td>
					</tr>
				{/each}
			</tbody>
			<thead class="border-b bg-neutral-200 font-medium border-neutral-500 text-neutral-800">
				<tr>
					<th class="pl-2 nav:px-6 py-4 nav:w-48" />
					<th class="nav:px-6 py-3 text-center text-lg">HISTORIQUE</th>
					<th class="pr-2 nav:px-6 py-4 w-20 sm:w-36 nav:w-48" />
				</tr>
			</thead>
			<tbody>
				{#each previousMatches as match}
					<tr>
						<td class="whitespace-nowrap pl-2 nav:px-6 py-4 text-left nav:w-48"
							>{formatDate(match.date)}</td
						>
						<td class="whitespace-nowrap nav:px-6 py-4 text-center">
							{#if match.butbzfc > match.butEquipeAdverse}
								<span class={classWin}>BZFC {match.butbzfc} </span>-
								<span class={classLose}>{match.butEquipeAdverse} {match.equipeAdverse}</span>
							{:else if match.butbzfc < match.butEquipeAdverse}
								<span class={classLose}>BZFC {match.butbzfc} </span>-
								<span class={classWin}>{match.butEquipeAdverse} {match.equipeAdverse}</span>
							{:else}
								<span class={classLose}>BZFC {match.butbzfc} </span>-
								<span class={classLose}>{match.butEquipeAdverse} {match.equipeAdverse}</span>
							{/if}
						</td>
						<td class="whitespace-nowrap pr-2 nav:px-6 py-4 text-end nav:w-48">
							<a
								href={`/matchs/${match.slug.current}`}
								class="hidden nav:block underline underline-offset-4">En Savoir Plus</a
							>
							<a href={`/matchs/${match.slug.current}`} class="nav:hidden">&#9432;</a>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	{:else}
		<p>La l'historique des matches ne peut pas être affiché.</p>
	{/if}
</Card>
