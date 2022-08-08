import DB from '$lib/db';

/** @type {import('./__types/[id]').RequestHandler} */
export async function GET({ params }) {
	const photos = await DB`SELECT * FROM photos`;

	if (photos) {
		return {
			status: 200,
			headers: {},
			body: { photos }
		};
	}

	return {
		status: 404
	};
}
export async function POST({ request }) {
	const photo = await request.json(); // or .json(), or .text(), etc
	await DB`INSERT INTO photos (base64, title, date) VALUES (${photo.file.text}, ${photo.title}, ${photo.date})`;

	return {
		status: 303,
		headers: {
			location: `/photos`
		}
	};
}
export async function DELETE({ url }) {
	const id = await url.searchParams.get("id"); // or .json(), or .text(), etc
	await DB`DELETE FROM photos WHERE id =${id}`;

	return {
		status: 303,
		headers: {
			location: `/photos`,
		},
	};
}
