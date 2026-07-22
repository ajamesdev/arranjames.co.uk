<script lang="ts">
	import Section from '$lib/components/Section.svelte';

	const startYear = 2015;
	const yearsExperience = new Date().getFullYear() - startYear - 2;
</script>

<Section title="Information">
	<dl class="space-y-4">
		<div class="flex items-baseline justify-between gap-4">
			<dt class="text-zinc-500">Location</dt>
			<dd class="text-right font-medium text-zinc-700 dark:text-zinc-200">
				Reading, Berkshire, UK
			</dd>
		</div>
		<div class="flex items-baseline justify-between gap-4">
			<dt class="text-zinc-500">Experience</dt>
			<dd class="text-right font-medium text-zinc-700 dark:text-zinc-200">
				{yearsExperience}+ years
			</dd>
		</div>
	</dl>
</Section>
