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
					<th class="px-6 py-4 w-48" />
					<th class="px-6 py-3 text-center text-lg">A VENIR</th>
					<th class="px-6 py-4 w-48" />
				</tr>
			</thead>
			<tbody>
				{#each commingMatches as match}
					<tr>
						<td class="whitespace-nowrap px-6 py-4 text-left w-48">{formatDate(match.date)}</td>
						<!-- Remplacer par titre? -->
						<td class="whitespace-nowrap px-6 py-4 text-center">BZFC - {match.equipeAdverse}</td>
						<td class="whitespace-nowrap px-6 py-4 text-end w-48">
							<a href={`/matches/${match.slug.current}`} class="underline underline-offset-4"
								>En Savoir Plus</a
							>
						</td>
					</tr>
				{/each}
			</tbody>
			<thead class="border-b bg-neutral-200 font-medium border-neutral-500 text-neutral-800">
				<tr>
					<th class="px-6 py-4 w-48" />
					<th class="px-6 py-3 text-center text-lg">HISTORIQUE</th>
					<th class="px-6 py-4 w-48" />
				</tr>
			</thead>
			<tbody>
				{#each previousMatches as match}
					<tr>
						<td class="whitespace-nowrap px-6 py-4 text-left w-48">{formatDate(match.date)}</td>
						<td class="whitespace-nowrap px-6 py-4 text-center">
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
						<td class="whitespace-nowrap px-6 py-4 text-end w-48">
							<a href={`/matches/${match.slug.current}`} class="underline underline-offset-4"
								>En Savoir Plus</a
							>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	{:else}
		<p>La l'historique des matches ne peut pas être affiché.</p>
	{/if}

	<!-- <iframe -->
	<!-- 	src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Europe%2FParis&showTitle=0&showNav=1&showPrint=0&showTabs=0&hl=fr&showCalendars=0&showTz=0&title=BZFC&src=NTQ2NTcyNTlkZTJmZDk2MDE4MDUxYzE1ODMxMWQ3OWJhZTNjYWVkMDI2YjQzMWRiNjU2MjQ4ODk2OTU0ZDg0NkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23AD1457" -->
	<!-- 	style="border-width:0" -->
	<!-- 	frameborder="0" -->
	<!-- 	scrolling="no" -->
	<!-- 	title="BZFC's calendar" -->
	<!-- 	class="w-full h-full p-10" -->
	<!-- /> -->
</Card>
