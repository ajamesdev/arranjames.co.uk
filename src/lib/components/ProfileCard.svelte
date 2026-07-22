<script lang="ts">
	import GitHubActivity from '$lib/components/GitHubActivity.svelte';
	import DownloadIcon from '$lib/components/icons/DownloadIcon.svelte';
	import type { ContributionDay } from '$lib/github';

	let {
		contributions,
		isSimpleView = false
	}: { contributions: ContributionDay[]; isSimpleView?: boolean } = $props();

	function handleCVDownloadClick() {
		window.gtag('event', 'download_cv', {
			event_category: 'engagement',
			event_label: 'CV Download Button'
		});

		const a = document.createElement('a');
		a.href = '/Arran_James_FullStackWebDeveloper_CV.pdf';
		a.download = 'Arran_James_FullStackWebDeveloper_CV.pdf';
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	}
</script>

<div
	class="overflow-hidden rounded-2xl shadow-xs ring-1 ring-zinc-900/5 dark:shadow-none dark:ring-white/10"
>
	<GitHubActivity {contributions} />

	<div
		class="relative bg-white p-7 pt-14 print:p-4 print:pt-10 dark:bg-zinc-900"
	>
		<img
			src="/img/avatar.jpg"
			alt="Avatar"
			class="absolute -top-10 h-20 w-20 rounded-2xl shadow-md ring-4 ring-white"
		/>

		<h1
			class="text-xl font-bold tracking-tight text-zinc-900 dark:text-white"
		>
			Arran James
		</h1>
		<div class="mt-1 text-sm font-medium text-zinc-500 dark:text-zinc-400">
			B.Sc. (Hons)
		</div>
		<div
			class="mt-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400"
		>
			Full Stack Web Developer
		</div>

		{#if !isSimpleView}
			<button
				class="group mt-7 flex w-full cursor-pointer items-stretch overflow-hidden rounded-xl text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-200 hover:shadow-blue-600/35 hover:brightness-110 active:scale-[0.98]"
				onclick={handleCVDownloadClick}
			>
				<span
					class="flex-1 bg-linear-to-r from-blue-600 to-indigo-600 py-2.5"
				>
					Download CV
				</span>
				<span class="grid place-items-center bg-indigo-700 px-4">
					<DownloadIcon />
				</span>
			</button>
		{/if}
	</div>
</div>
