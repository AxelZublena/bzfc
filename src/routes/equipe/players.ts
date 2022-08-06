import DB from '$lib/db';

/** @type {import('./__types/[id]').RequestHandler} */
export async function GET({ params }) {
	const players = await DB.prepare('SELECT * FROM players').all();


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
	const data = await request.formData(); // or .json(), or .text(), etc
	const player = Object.fromEntries(data);
	const insert = DB.prepare('INSERT INTO players (name, country, position, age, description) VALUES (@name, @country, @position, @age, @description)');
	insert.run(player)


	return {
		status: 303,
		headers: {
			location: `/equipe`
		}
	};
}
export async function DELETE({ url }) {
	const id = await url.searchParams.get("id"); // or .json(), or .text(), etc
	const del = DB.prepare('DELETE FROM players WHERE id = ' + id);
	del.run()

	return {
		status: 303,
		headers: {
			location: `/equipe`,
		},
	};
}
