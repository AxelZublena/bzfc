import DB from '$lib/db';

/** @type {import('./__types/[id]').RequestHandler} */
export async function GET({ params }) {
	const players = await DB`SELECT * FROM players`;

	if (players) {
		return {
			status: 200,
			headers: {},
			body: { players }
		};
	}

	return {
		status: 404
	};
}
export async function POST({ request }) {
	// const data = await request.formData(); // or .json(), or .text(), etc
	// const playerInfo = Object.fromEntries(data);
	const playerInfo = await request.json(); // or .json(), or .text(), etc
	await DB`INSERT INTO players (name, country, position, age, description, img) VALUES (${playerInfo.name}, ${playerInfo.country}, ${playerInfo.position}, ${playerInfo.age}, ${playerInfo.description}, ${playerInfo.file.text})`;

	return {
		status: 303,
		headers: {
			location: `/equipe`
		}
	};
}
export async function DELETE({ url }) {
	const id = await url.searchParams.get("id"); // or .json(), or .text(), etc
	await DB`DELETE FROM players WHERE id =${id}`;

	return {
		status: 303,
		headers: {
			location: `/equipe`,
		},
	};
}
