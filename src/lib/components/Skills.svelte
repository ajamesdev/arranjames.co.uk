<script lang="ts">
	import Section from '$lib/components/Section.svelte';

	const groups = [
		{
			title: 'Client Technologies',
			skills: [
				'JavaScript',
				'TypeScript',
				'React',
				'React Native',
				'Redux',
				'Webpack',
				'Expo',
				'HTML5',
				'CSS3',
				'Bootstrap',
				'Tailwind'
			]
		},
		{
			title: 'Server Technologies',
			skills: [
				'PHP',
				'Laravel',
				'Node.js',
				'SQL',
				'Express',
				'Remix',
				'MongoDB'
			]
		},
		{
			title: 'Amazon Web Services',
			skills: [
				'EC2',
				'Elastic Beanstalk',
				'RDS',
				'OpenSearch',
				'Location',
				'S3',
				'Database Migration Manager',
				'Lambda',
				'Redshift',
				'CloudFront',
				'CodePipeline',
				'CloudWatch'
			]
		},
		{
			title: 'Tools & Administration',
			skills: [
				'Git',
				'Docker',
				'Wordpress',
				'Red Hat',
				'Debian',
				'Photoshop'
			]
		}
	];
</script>

<div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-1 print:gap-3">
	{#each groups as group (group.title)}
		<Section title={group.title}>
			<div class="flex flex-wrap gap-2">
				{#each group.skills as skill (skill)}
					<span
						class="rounded-lg bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-600/10 dark:bg-blue-400/10 dark:text-blue-300 dark:ring-blue-400/20"
					>
						{skill}
					</span>
				{/each}
			</div>
		</Section>
	{/each}
</div>
