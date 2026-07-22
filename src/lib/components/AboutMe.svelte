<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import AtIcon from '$lib/components/icons/AtIcon.svelte';
	import GithubIcon from '$lib/components/icons/GithubIcon.svelte';
	import LinkedinIcon from '$lib/components/icons/LinkedinIcon.svelte';
	import PlanetIcon from '$lib/components/icons/PlanetIcon.svelte';

	let { isSimpleView = false }: { isSimpleView?: boolean } = $props();
</script>

<Section title="About me">
	<p class="text-zinc-600 dark:text-zinc-300">
		Based in Reading, I am a Full Stack Web Developer with six years of
		experience since earning a 2:1 honours degree from the University of
		Brighton. My expertise encompasses both server-side and client-side
		development, with a particular focus on PHP for server-side logic.
	</p>
	<p class="mt-3 text-zinc-600 dark:text-zinc-300">
		I am enthusiastic about contributing to an innovative environment, and
		my diverse skill set renders me an ideal fit for roles that necessitate
		a fine balance of technical expertise.
	</p>

	<div class="mt-5 flex flex-col gap-2">
		<a
			href="mailto:hello@arranjames.co.uk"
			class="group flex items-center gap-2.5 text-sm font-medium text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
		>
			<span
				class="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-blue-50 text-blue-600 ring-1 ring-blue-600/10 transition group-hover:bg-blue-100 dark:bg-blue-400/10 dark:text-blue-300 dark:ring-blue-400/20 dark:group-hover:bg-blue-400/20"
			>
				<AtIcon />
			</span>
			<span>hello@arranjames.co.uk</span>
		</a>
		<a
			href="https://www.arranjames.co.uk"
			target="_blank"
			class="group flex items-center gap-2.5 text-sm font-medium text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
		>
			<span
				class="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-blue-50 text-blue-600 ring-1 ring-blue-600/10 transition group-hover:bg-blue-100 dark:bg-blue-400/10 dark:text-blue-300 dark:ring-blue-400/20 dark:group-hover:bg-blue-400/20"
			>
				<PlanetIcon />
			</span>
			<span>arranjames.co.uk</span>
		</a>
	</div>
	{#if !isSimpleView}
		<ul class="mt-5 flex items-center gap-4">
			<li>
				<a
					href="https://www.linkedin.com/in/arran-h-3768b6280"
					target="_blank"
					class="text-zinc-500 transition duration-300 hover:text-blue-600 dark:hover:text-blue-400"
					aria-label="LinkedIn"
				>
					<LinkedinIcon />
				</a>
			</li>
			<li>
				<a
					href="https://github.com/ajamesdev"
					target="_blank"
					class="text-zinc-500 transition duration-300 hover:text-blue-600 dark:hover:text-blue-400"
					aria-label="GitHub"
				>
					<GithubIcon />
				</a>
			</li>
		</ul>
	{/if}
</Section>
