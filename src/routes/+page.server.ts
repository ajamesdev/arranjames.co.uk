import { getContributions } from '$lib/server/github';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => ({
	contributions: await getContributions(fetch)
});
