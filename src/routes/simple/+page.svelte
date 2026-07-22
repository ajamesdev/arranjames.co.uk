<script lang="ts">
	import CvContainer from '$lib/components/CvContainer.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<main class="mx-auto max-w-screen-2xl p-4 print:p-0">
	<CvContainer contributions={data.contributions} isSimpleView />

	<Footer />
</main>
