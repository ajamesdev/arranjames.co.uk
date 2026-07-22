<script lang="ts">
	import CvContainer from '$lib/components/CvContainer.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<main class="container mx-auto max-w-6xl p-4 sm:p-5 print:p-0">
	<ThemeToggle />

	<CvContainer contributions={data.contributions} />

	<Footer />
</main>
