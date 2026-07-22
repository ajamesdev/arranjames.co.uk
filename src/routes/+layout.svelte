<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Arran James - Full Stack Web Developer</title>
	<meta
		name="description"
		content="Virtual CV for Arran James, Full Stack Web Developer."
	/>

	<meta
		property="og:title"
		content="Arran James - Full Stack Web Developer - Reading"
	/>
	<meta
		property="og:description"
		content="Virtual CV for Arran James, Full Stack Web Developer."
	/>
	<meta property="og:url" content="https://www.arranjames.co.uk" />
	<meta property="og:type" content="website" />

	<meta
		name="twitter:title"
		content="Arran James - Full Stack Web Developer - Reading"
	/>
	<meta
		name="twitter:description"
		content="Virtual CV for Arran James, Full Stack Web Developer."
	/>

	<link rel="canonical" href="https://www.arranjames.co.uk" />
</svelte:head>

<div
	class="min-h-dvh bg-zinc-50 text-zinc-900 print:bg-white dark:bg-zinc-950 dark:text-zinc-100"
>
	<div
		class="backdrop-glow pointer-events-none fixed inset-0 print:hidden"
		aria-hidden="true"
	></div>
	<div class="relative">
		{@render children()}
	</div>
</div>
