<script lang="ts">
	import type { Snippet } from 'svelte';

	let { title, children }: { title: string; children: Snippet } = $props();
</script>

<section
	class="rounded-2xl bg-white p-7 shadow-xs ring-1 ring-zinc-900/5 print:p-4 dark:bg-zinc-900 dark:shadow-none dark:ring-white/10"
>
	<h2
		class="mb-5 flex items-center gap-2.5 text-xs font-semibold tracking-[0.14em] text-zinc-500 uppercase"
	>
		<span
			class="h-4 w-1 rounded-full bg-linear-to-b from-blue-600 to-indigo-600"
			aria-hidden="true"
		></span>
		{title}
	</h2>
	{@render children()}
</section>
