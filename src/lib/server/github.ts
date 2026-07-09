import { env } from '$env/dynamic/private';
import type { ContributionDay } from '$lib/github';
// import backup from '../../../static/github_data_backup.json';

const username = 'ajamesdev';

const levels: Record<string, number> = {
	NONE: 0,
	FIRST_QUARTILE: 1,
	SECOND_QUARTILE: 2,
	THIRD_QUARTILE: 3,
	FOURTH_QUARTILE: 4
};

let cached: Promise<ContributionDay[]> | undefined;

export function getContributions(
	fetch: typeof globalThis.fetch
): Promise<ContributionDay[]> {
	cached ??= fetchContributions(fetch);
	return cached;
}

async function fetchContributions(
	fetch: typeof globalThis.fetch
): Promise<ContributionDay[]> {
	try {
		if (env.GITHUB_TOKEN) {
			console.log('Fetching contributions from the GitHub API');
			return await fromApi(fetch);
		}
		return [];
		// console.log('Fetching contributions from the public GitHub profile');
		// return await fromProfile(fetch);
	} catch (error) {
		console.error('Failed to fetch contributions', error);
		return [];
		// return backup.contributions;
	}
}

async function fromApi(
	fetch: typeof globalThis.fetch
): Promise<ContributionDay[]> {
	const response = await fetch('https://api.github.com/graphql', {
		method: 'POST',
		headers: {
			authorization: `bearer ${env.GITHUB_TOKEN}`,
			'content-type': 'application/json'
		},
		body: JSON.stringify({
			query: `query ($login: String!) {
				user(login: $login) {
					contributionsCollection {
						contributionCalendar {
							weeks {
								contributionDays {
									date
									contributionCount
									contributionLevel
								}
							}
						}
					}
				}
			}`,
			variables: { login: username }
		})
	});
	if (!response.ok) {
		throw new Error(`GitHub API responded with ${response.status}`);
	}

	const { data, errors } = await response.json();
	if (errors?.length) {
		throw new Error(errors[0].message);
	}

	interface ApiDay {
		date: string;
		contributionCount: number;
		contributionLevel: string;
	}

	const weeks: { contributionDays: ApiDay[] }[] =
		data.user.contributionsCollection.contributionCalendar.weeks;

	return weeks
		.flatMap((week) => week.contributionDays)
		.map((day) => ({
			date: day.date,
			count: day.contributionCount,
			level: levels[day.contributionLevel] ?? 0
		}));
}
