<script lang="ts">
	const startYear = 2015;
	const yearsExperience = new Date().getFullYear() - startYear - 2;
</script>

<div class="block-section p-7">
	<h2 class="block-title">Information</h2>
	<div class="space-y-4">
		<div class="flex justify-between">
			<div class="text-gray-400">Location</div>
			<div class="text-right font-medium text-gray-600">
				Reading, Berkshire, UK
			</div>
		</div>
		<div class="flex justify-between">
			<div class="text-gray-400">Experience</div>
			<div class="text-right font-medium text-gray-600">
				{yearsExperience}+ years
			</div>
		</div>
	</div>
</div>
