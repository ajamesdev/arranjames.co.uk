<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import CompanyIcon from '$lib/components/icons/CompanyIcon.svelte';
	import DateIcon from '$lib/components/icons/DateIcon.svelte';
</script>

<Section title="Experience">
	<div class="relative space-y-5 print:space-y-3">
		<div
			class="absolute inset-y-2 left-6 hidden w-px bg-linear-to-b from-zinc-200 via-zinc-200 to-transparent sm:block dark:from-white/10 dark:via-white/10"
			aria-hidden="true"
		></div>

		<article
			class="space-y-4 sm:flex sm:items-start sm:gap-4 sm:space-y-0 print:break-inside-avoid"
		>
			<div
				class="relative h-12 w-12 shrink-0 rounded-xl bg-cover shadow-xs ring-1 ring-zinc-900/10 dark:ring-white/10"
				style="background-image: url(/img/coolstays.jpg)"
			></div>

			<div class="w-full space-y-5 print:space-y-3">
				<div class="space-y-4 sm:flex sm:justify-between sm:space-y-0">
					<div class="space-y-1.5">
						<div
							class="font-semibold text-zinc-900 dark:text-white"
						>
							Web Developer
						</div>
						<div
							class="flex items-center gap-1.5 text-sm font-medium text-zinc-500"
						>
							<CompanyIcon />
							<span>Coolstays (Big Blue Sea Ltd)</span>
						</div>
					</div>
					<div class="space-y-1.5 sm:text-right">
						<div
							class="inline-flex rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700 capitalize ring-1 ring-blue-600/10 dark:bg-blue-400/10 dark:text-blue-300 dark:ring-blue-400/20"
						>
							Full time
						</div>
						<div
							class="flex items-center gap-1.5 text-sm font-medium text-zinc-500 tabular-nums"
						>
							<DateIcon />
							<span>2019 – Present</span>
						</div>
					</div>
				</div>
				<ul
					class="list-disc space-y-1 pl-5 text-zinc-600 marker:text-blue-400/60 dark:text-zinc-300 dark:marker:text-blue-400/40"
				>
					<li>
						Lead the design and architecture of an AWS-based cloud
						infrastructure, bolstering web and mobile app
						performance for 4+ million global users with EC2 Auto
						Scaling, RDS, CodePipeline, S3, and CloudFront.
					</li>
					<li>
						Engineer high-performance APIs with PHP 8+ and Laravel,
						enhancing secure data exchange and interactions between
						services.
					</li>
					<li>
						Drive front-end development utilizing React, and
						implement optimizations to elevate user experience and
						application performance.
					</li>
					<li>
						Lead mobile application development using React Native
						and Expo, ensuring consistency and seamless adaptation
						across various mobile devices.
					</li>
					<li>
						Enforce strong security and compliance measures to
						protect user data and comply with international
						standards.
					</li>
					<li>
						Implement AWS Location and OpenSearch services to
						augment geospatial capabilities and search
						functionalities, ensuring precise and swift content
						retrieval.
					</li>
					<li>
						Manage integration of third-party services, including
						Stripe for advanced payment processing and OpenAI's
						ChatGPT for AI-driven content generation.
					</li>
					<li>
						Integrate and leverage Google Analytics 4 for
						data-driven insights into user behavior and application
						performance, informing strategic decisions.
					</li>
					<li>
						Facilitate data migration through AWS Database Migration
						Service, ensuring a smooth transition and minimizing
						downtime.
					</li>
					<li>
						Act as a liaison between business stakeholders and the
						tech team, translating goals into actionable plans.
					</li>
					<li>
						Establish and refine design guidelines and best
						practices to promote continuous improvement.
					</li>
					<li>
						Mentor and provide technical guidance to team members,
						fostering a collaborative and knowledge-sharing
						environment.
					</li>
				</ul>
				<div class="border-b border-zinc-100 dark:border-white/5"></div>
			</div>
		</article>

		<article
			class="space-y-4 sm:flex sm:items-start sm:gap-4 sm:space-y-0 print:break-inside-avoid"
		>
			<div
				class="relative h-12 w-12 shrink-0 rounded-xl bg-cover shadow-xs ring-1 ring-zinc-900/10 dark:ring-white/10"
				style="background-image: url(/img/asap.jpg)"
			></div>

			<div class="w-full space-y-5 print:space-y-3">
				<div class="space-y-4 sm:flex sm:justify-between sm:space-y-0">
					<div class="space-y-1.5">
						<div
							class="font-semibold text-zinc-900 dark:text-white"
						>
							Web Developer
						</div>
						<div
							class="flex items-center gap-1.5 text-sm font-medium text-zinc-500"
						>
							<CompanyIcon />
							<span>ASAP Web Design</span>
						</div>
					</div>
					<div class="space-y-1.5 sm:text-right">
						<div
							class="inline-flex rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700 capitalize ring-1 ring-blue-600/10 dark:bg-blue-400/10 dark:text-blue-300 dark:ring-blue-400/20"
						>
							Full time
						</div>
						<div
							class="flex items-center gap-1.5 text-sm font-medium text-zinc-500 tabular-nums"
						>
							<DateIcon />
							<span>2017 – 2019</span>
						</div>
					</div>
				</div>
				<ul
					class="list-disc space-y-1 pl-5 text-zinc-600 marker:text-blue-400/60 dark:text-zinc-300 dark:marker:text-blue-400/40"
				>
					<li>
						Translate business requirements into robust technical
						solutions.
					</li>
					<li>
						Participate in the entire application lifecycle,
						focusing on design, development, debugging and client
						relations.
					</li>
					<li>
						Establish and promote design guidelines, best practices
						and standards.
					</li>
					<li>
						Develop object oriented, database driven web systems.
					</li>
					<li>
						Deliver requirements baselines ensuring project
						deadlines and budget are met.
					</li>
					<li>Provide client support on technical issues.</li>
				</ul>
				<div class="border-b border-zinc-100 dark:border-white/5"></div>
			</div>
		</article>

		<article
			class="space-y-4 sm:flex sm:items-start sm:gap-4 sm:space-y-0 print:break-inside-avoid"
		>
			<div
				class="relative h-12 w-12 shrink-0 rounded-xl bg-cover shadow-xs ring-1 ring-zinc-900/10 dark:ring-white/10"
				style="background-image: url(/img/rps.jpg)"
			></div>

			<div class="w-full space-y-5 print:space-y-3">
				<div class="space-y-4 sm:flex sm:justify-between sm:space-y-0">
					<div class="space-y-1.5">
						<div
							class="font-semibold text-zinc-900 dark:text-white"
						>
							Web Technician
						</div>
						<div
							class="flex items-center gap-1.5 text-sm font-medium text-zinc-500"
						>
							<CompanyIcon />
							<span>RPS Group</span>
						</div>
					</div>
					<div class="space-y-1.5 sm:text-right">
						<div
							class="inline-flex rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700 capitalize ring-1 ring-blue-600/10 dark:bg-blue-400/10 dark:text-blue-300 dark:ring-blue-400/20"
						>
							Full time
						</div>
						<div
							class="flex items-center gap-1.5 text-sm font-medium text-zinc-500 tabular-nums"
						>
							<DateIcon />
							<span>2015 – 2016</span>
						</div>
					</div>
				</div>
				<ul
					class="list-disc space-y-1 pl-5 text-zinc-600 marker:text-blue-400/60 dark:text-zinc-300 dark:marker:text-blue-400/40"
				>
					<li>
						Design, development and management of web projects for
						the RPS Intranet and the various RPS websites.
					</li>
					<li>
						Development of database driven interactive web
						communications systems.
					</li>
					<li>
						Maintaining and updating all websites and local intranet
						resources.
					</li>
					<li>
						Providing web development support, across the Group's
						corporate, divisional and office led web presentational
						activities.
					</li>
					<li>
						Supporting team members with the day-to-day operations
						of the Business Information Unit.
					</li>
				</ul>
			</div>
		</article>
	</div>
</Section>
