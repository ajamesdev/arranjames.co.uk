<script lang="ts">
	import AtIcon from '$lib/components/icons/AtIcon.svelte';
	import GithubIcon from '$lib/components/icons/GithubIcon.svelte';
	import LinkedinIcon from '$lib/components/icons/LinkedinIcon.svelte';
	import PlanetIcon from '$lib/components/icons/PlanetIcon.svelte';

	let { isSimpleView = false }: { isSimpleView?: boolean } = $props();
</script>

<div class="block-section p-7">
	<h2 class="block-title">About me</h2>
	<p class="mb-2 text-gray-600">
		Based in Reading, I am a Full Stack Web Developer with six years of
		experience since earning a 2:1 honours degree from the University of
		Brighton. My expertise encompasses both server-side and client-side
		development, with a particular focus on PHP for server-side logic.
	</p>
	<p class="mb-5 text-gray-600">
		I am enthusiastic about contributing to an innovative environment, and
		my diverse skill set renders me an ideal fit for roles that necessitate
		a fine balance of technical expertise.
	</p>

	<div class="flex flex-col space-y-1">
		<a
			href="mailto:hello@arranjames.co.uk"
			class="link-out social-link-out-hover"
		>
			<AtIcon />
			<span>hello@arranjames.co.uk</span>
		</a>
		<a
			href="https://www.arranjames.co.uk"
			target="_blank"
			class="link-out social-link-out-hover mt-0"
		>
			<PlanetIcon />
			<span>arranjames.co.uk</span>
		</a>
	</div>
	{#if !isSimpleView}
		<div class="mt-4">
			<ul class="flex space-x-5">
				<li>
					<a
						href="https://www.linkedin.com/in/arran-h-3768b6280"
						target="_blank"
						class="social-link-out-hover"
						aria-label="LinkedIn"
					>
						<LinkedinIcon />
					</a>
				</li>
				<li>
					<a
						href="https://github.com/ajamesdev"
						target="_blank"
						class="social-link-out-hover"
						aria-label="GitHub"
					>
						<GithubIcon />
					</a>
				</li>
			</ul>
		</div>
	{/if}
</div>
