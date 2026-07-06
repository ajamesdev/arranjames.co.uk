<script lang="ts">
	import EducationIcon from '$lib/components/icons/EducationIcon.svelte';
</script>

<div class="block-section p-7">
	<h2 class="block-title">Education</h2>

	<div class="item-section mb-5">
		<div class="company-block-logo">
			<div
				class="h-12 w-12 shrink-0 rounded-xl bg-cover"
				style="background-image: url(/img/uob.jpg)"
			></div>
		</div>

		<div class="w-full space-y-5">
			<div class="block-header items-end">
				<div class="space-y-1.5">
					<div class="font-medium">BSc Digital Media Development</div>
					<div class="flex space-x-5">
						<div class="block-header-info">
							<EducationIcon />
							<span>University of Brighton</span>
						</div>
					</div>
				</div>
				<div class="space-y-1.5">
					<div class="font-medium">2:1 Honours</div>
					<div class="block-header-info justify-start sm:justify-end">
						<span>2013 – 2017</span>
					</div>
				</div>
			</div>
			<div class="border-b border-gray-200"></div>
		</div>
	</div>

	<div class="item-section">
		<div class="company-block-logo">
			<div
				class="h-12 w-12 shrink-0 rounded-xl bg-cover"
				style="background-image: url(/img/hc.jpg)"
			></div>
		</div>

		<div class="w-full space-y-5">
			<div class="block-header items-end">
				<div class="space-y-1.5">
					<div class="font-medium">
						BTEC Level 3 Extended Diploma for IT
					</div>
					<div class="flex space-x-5">
						<div class="block-header-info">
							<EducationIcon />
							<span>The Henley College</span>
						</div>
					</div>
				</div>
				<div class="space-y-1.5 sm:text-right">
					<div class="font-medium">D* D* D</div>
					<div class="block-header-info">
						<span>2011 – 2013</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
