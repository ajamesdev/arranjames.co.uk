<script lang="ts">
	import AboutMe from '$lib/components/AboutMe.svelte';
	import Education from '$lib/components/Education.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import ProfileCard from '$lib/components/ProfileCard.svelte';
	import QuickInfo from '$lib/components/QuickInfo.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import type { ContributionDay } from '$lib/github';

	let {
		contributions,
		isSimpleView = false
	}: { contributions: ContributionDay[]; isSimpleView?: boolean } = $props();
</script>

<div class="grid gap-5 lg:grid-cols-3 print:gap-3">
	<div class="space-y-5 print:space-y-3">
		<ProfileCard {contributions} {isSimpleView} />
		<div class="hidden lg:block">
			<div class="space-y-5 print:space-y-3">
				<QuickInfo />
				<Skills />
			</div>
		</div>
	</div>

	<div class="space-y-5 lg:col-span-2 print:space-y-3">
		<AboutMe {isSimpleView} />
		<Education />
		<Experience />
		<div class="lg:hidden">
			<div class="space-y-5 print:space-y-3">
				<Skills />
			</div>
		</div>
	</div>
</div>
