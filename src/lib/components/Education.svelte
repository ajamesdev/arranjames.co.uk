<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import EducationIcon from '$lib/components/icons/EducationIcon.svelte';
</script>

<Section title="Education">
	<div class="space-y-5 print:space-y-3">
		<div
			class="space-y-4 sm:flex sm:items-start sm:gap-4 sm:space-y-0 print:break-inside-avoid"
		>
			<div
				class="relative h-12 w-12 shrink-0 rounded-xl bg-cover shadow-xs ring-1 ring-zinc-900/10 dark:ring-white/10"
				style="background-image: url(/img/uob.jpg)"
			></div>

			<div class="w-full space-y-5 print:space-y-3">
				<div
					class="items-end space-y-4 sm:flex sm:justify-between sm:space-y-0"
				>
					<div class="space-y-1.5">
						<div
							class="font-semibold text-zinc-900 dark:text-white"
						>
							BSc Digital Media Development
						</div>
						<div
							class="flex items-center gap-1.5 text-sm font-medium text-zinc-500"
						>
							<EducationIcon />
							<span>University of Brighton</span>
						</div>
					</div>
					<div class="space-y-1.5 sm:text-right">
						<div
							class="font-semibold text-zinc-900 dark:text-white"
						>
							2:1 Honours
						</div>
						<div
							class="flex items-center justify-start gap-1.5 text-sm font-medium text-zinc-500 tabular-nums sm:justify-end"
						>
							<span>2013 – 2017</span>
						</div>
					</div>
				</div>
				<div class="border-b border-zinc-100 dark:border-white/5"></div>
			</div>
		</div>

		<div
			class="space-y-4 sm:flex sm:items-start sm:gap-4 sm:space-y-0 print:break-inside-avoid"
		>
			<div
				class="relative h-12 w-12 shrink-0 rounded-xl bg-cover shadow-xs ring-1 ring-zinc-900/10 dark:ring-white/10"
				style="background-image: url(/img/hc.jpg)"
			></div>

			<div class="w-full space-y-5 print:space-y-3">
				<div
					class="items-end space-y-4 sm:flex sm:justify-between sm:space-y-0"
				>
					<div class="space-y-1.5">
						<div
							class="font-semibold text-zinc-900 dark:text-white"
						>
							BTEC Level 3 Extended Diploma for IT
						</div>
						<div
							class="flex items-center gap-1.5 text-sm font-medium text-zinc-500"
						>
							<EducationIcon />
							<span>The Henley College</span>
						</div>
					</div>
					<div class="space-y-1.5 sm:text-right">
						<div
							class="font-semibold text-zinc-900 dark:text-white"
						>
							D* D* D
						</div>
						<div
							class="flex items-center justify-start gap-1.5 text-sm font-medium text-zinc-500 tabular-nums sm:justify-end"
						>
							<span>2011 – 2013</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</Section>
