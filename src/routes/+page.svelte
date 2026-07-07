<script lang="ts">
	import AboutMe from '$lib/components/AboutMe.svelte';
	import Education from '$lib/components/Education.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import ProfileCard from '$lib/components/ProfileCard.svelte';
	import QuickInfo from '$lib/components/QuickInfo.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<main class="main-container">
	<ThemeToggle />

	<div class="grid gap-5 lg:grid-cols-3">
		<div class="space-y-5">
			<ProfileCard contributions={data.contributions} />
			<div class="hidden lg:block">
				<div class="space-y-5">
					<QuickInfo />
					<Skills />
				</div>
			</div>
		</div>

		<div class="space-y-5 lg:col-span-2">
			<AboutMe />
			<Education />
			<Experience />
			<div class="lg:hidden">
				<div class="space-y-5">
					<Skills />
				</div>
			</div>
		</div>
	</div>

	<Footer />
</main>
