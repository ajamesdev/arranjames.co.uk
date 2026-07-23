<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/state';
	import CvContainer from '$lib/components/CvContainer.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const name = $derived(
		browser ? (page.url.searchParams.get('name') ?? undefined) : undefined
	);
	const phone = $derived(
		browser ? (page.url.searchParams.get('phone') ?? undefined) : undefined
	);
	const email = $derived(
		browser ? (page.url.searchParams.get('email') ?? undefined) : undefined
	);
</script>

<main class="mx-auto max-w-screen-2xl p-4 print:p-0">
	<CvContainer
		contributions={data.contributions}
		isSimpleView
		{name}
		{phone}
		{email}
	/>

	<Footer />
</main>
