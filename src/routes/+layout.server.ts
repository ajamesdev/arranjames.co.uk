import { getContributions } from '$lib/server/github';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ fetch }) => ({
	contributions: await getContributions(fetch)
});
