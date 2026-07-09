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

<div class="overflow-hidden rounded-xl shadow">
	<div class="bg-cover">
		<GitHubActivity {contributions} />
	</div>

	<div class="block-section-profile relative p-7 pt-14">
		<img src="/img/avatar.jpg" alt="Avatar" class="me-photo" />

		<div class="mb-1.2 text-lg font-semibold">Arran James</div>
		<div class="text-md mb-1.5 font-semibold">B.Sc. (Hons)</div>
		<div class="text-sm text-gray-400">Full Stack Web Developer</div>
		{#if !isSimpleView}
			<div class="group mt-7 flex">
				<button class="download-cv-btn" onclick={handleCVDownloadClick}
					>Download CV</button
				>
				<button
					class="download-cv-btn-icon"
					onclick={handleCVDownloadClick}
				>
					<DownloadIcon />
				</button>
			</div>
		{/if}
	</div>
</div>
