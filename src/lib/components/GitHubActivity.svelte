<script lang="ts">
	import type { ContributionDay } from '$lib/github';

	let { contributions }: { contributions: ContributionDay[] } = $props();

	const rows = 7;
	const panelMargin = 2;
	const colors = ['#ebedf0', '#9acdf7', '#4083c4', '#3062a3', '#21467b'];

	let width = $state(0);
	let tooltip = $state<{ text: string; x: number; y: number } | null>(null);

	const columns = $derived(
		width > 0
			? Math.max(
					1,
					Math.floor((width + panelMargin) / (11 + panelMargin))
				)
			: 32
	);
	const panelSize = $derived(
		width > 0 ? (width - panelMargin * (columns - 1)) / columns : 11
	);
	const svgHeight = $derived(rows * (panelSize + panelMargin));

	const dayMs = 86400000;

	const dateFormat = new Intl.DateTimeFormat('en-GB', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	});

	const cells = $derived.by(() => {
		const byDate = new Map(contributions.map((day) => [day.date, day]));
		const last = Date.parse(contributions[contributions.length - 1].date);
		const end = last + (6 - new Date(last).getUTCDay()) * dayMs;

		const grid = [];
		for (let column = 0; column < columns; column++) {
			for (let row = 0; row < rows; row++) {
				const day =
					end - ((columns - 1 - column) * 7 + (6 - row)) * dayMs;
				const date = new Date(day).toISOString().slice(0, 10);
				grid.push({
					key: `${column}-${row}`,
					x: column * (panelSize + panelMargin),
					y: row * (panelSize + panelMargin),
					level: day > last ? 0 : (byDate.get(date)?.level ?? 0),
					count: day > last ? null : (byDate.get(date)?.count ?? 0),
					date
				});
			}
		}
		return grid;
	});

	function tooltipText(count: number, date: string) {
		const day = dateFormat.format(new Date(date));
		if (!count) {
			return `No contributions on ${day}`;
		}
		return `${count} contribution${count === 1 ? '' : 's'} on ${day}`;
	}

	function showTooltip(
		event: MouseEvent,
		count: number | null,
		date: string
	) {
		if (count === null) {
			return;
		}
		tooltip = {
			text: tooltipText(count, date),
			x: event.clientX,
			y: event.clientY
		};
	}
</script>

{#if contributions.length}
	<div class="h-full w-full" bind:clientWidth={width}>
		<svg
			style="width: 100%"
			height={svgHeight}
			role="img"
			aria-label="GitHub contribution activity"
			onmouseleave={() => (tooltip = null)}
		>
			{#each cells as cell (cell.key)}
				<rect
					x={cell.x}
					y={cell.y}
					width={panelSize}
					height={panelSize}
					fill={colors[cell.level]}
					role="presentation"
					onmouseenter={(event) =>
						showTooltip(event, cell.count, cell.date)}
					onmousemove={(event) =>
						showTooltip(event, cell.count, cell.date)}
					onmouseleave={() => (tooltip = null)}
				/>
			{/each}
		</svg>
	</div>
	{#if tooltip}
		<div
			class="pointer-events-none fixed z-50 -translate-x-1/2 rounded-md bg-gray-800 px-2 py-1 text-xs font-medium whitespace-nowrap text-white shadow"
			style="left: {tooltip.x}px; top: {tooltip.y - 34}px"
		>
			{tooltip.text}
		</div>
	{/if}
{:else}
	<div
		class="block-section h-16 bg-cover"
		style="background-image: url(/img/cover.jpg)"
	></div>
{/if}
