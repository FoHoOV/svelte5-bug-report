import type { PageServerLoad } from './$types';

export const load = (async () => {
	return { name: 'page 1' };
}) satisfies PageServerLoad;
