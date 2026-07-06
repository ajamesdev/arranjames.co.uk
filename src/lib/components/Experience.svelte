<script lang="ts">
	import CompanyIcon from '$lib/components/icons/CompanyIcon.svelte';
	import DateIcon from '$lib/components/icons/DateIcon.svelte';
</script>

<div class="block-section p-7">
	<h2 class="block-title">Experience</h2>
	<div class="item-section mb-5">
		<div class="company-block-logo">
			<div
				class="h-12 w-12 shrink-0 rounded-xl bg-cover"
				style="background-image: url(/img/coolstays.jpg)"
			></div>
		</div>

		<div class="w-full space-y-5">
			<div class="block-header">
				<div class="space-y-1.5">
					<div class="font-medium">Web Developer</div>
					<div class="flex space-x-5">
						<div class="block-header-info">
							<CompanyIcon />
							<span>Coolstays (Big Blue Sea Ltd)</span>
						</div>
					</div>
				</div>
				<div class="space-y-2 sm:text-right">
					<div class="job-type-badge">Full time</div>
					<div class="block-header-info">
						<DateIcon />
						<span>2019 – Present</span>
					</div>
				</div>
			</div>
			<ul class="list-disc pl-5 text-gray-600">
				<li class="pb-1">
					Lead the design and architecture of an AWS-based cloud
					infrastructure, bolstering web and mobile app performance
					for 4+ million global users with EC2 Auto Scaling, RDS,
					CodePipeline, S3, and CloudFront.
				</li>
				<li class="pb-1">
					Engineer high-performance APIs with PHP 8+ and Laravel,
					enhancing secure data exchange and interactions between
					services.
				</li>
				<li class="pb-1">
					Drive front-end development utilizing React, and implement
					optimizations to elevate user experience and application
					performance.
				</li>
				<li class="pb-1">
					Lead mobile application development using React Native and
					Expo, ensuring consistency and seamless adaptation across
					various mobile devices.
				</li>
				<li class="pb-1">
					Enforce strong security and compliance measures to protect
					user data and comply with international standards.
				</li>
				<li class="pb-1">
					Implement AWS Location and OpenSearch services to augment
					geospatial capabilities and search functionalities, ensuring
					precise and swift content retrieval.
				</li>
				<li class="pb-1">
					Manage integration of third-party services, including Stripe
					for advanced payment processing and OpenAI's ChatGPT for
					AI-driven content generation.
				</li>
				<li class="pb-1">
					Integrate and leverage Google Analytics 4 for data-driven
					insights into user behavior and application performance,
					informing strategic decisions.
				</li>
				<li class="pb-1">
					Facilitate data migration through AWS Database Migration
					Service, ensuring a smooth transition and minimizing
					downtime.
				</li>
				<li class="pb-1">
					Act as a liaison between business stakeholders and the tech
					team, translating goals into actionable plans.
				</li>
				<li class="pb-1">
					Establish and refine design guidelines and best practices to
					promote continuous improvement.
				</li>
				<li>
					Mentor and provide technical guidance to team members,
					fostering a collaborative and knowledge-sharing environment.
				</li>
			</ul>

			<div class="border-b border-gray-200"></div>
		</div>
	</div>

	<div class="item-section mb-5">
		<div class="company-block-logo">
			<div
				class="h-12 w-12 shrink-0 rounded-xl bg-cover"
				style="background-image: url(/img/asap.jpg)"
			></div>
		</div>

		<div class="w-full space-y-5">
			<div class="block-header">
				<div class="space-y-1.5">
					<div class="font-medium">Web Developer</div>
					<div class="flex space-x-5">
						<div class="block-header-info">
							<CompanyIcon />
							<span>ASAP Web Design</span>
						</div>
					</div>
				</div>
				<div class="space-y-2 sm:text-right">
					<div class="job-type-badge">Full time</div>
					<div class="block-header-info">
						<DateIcon />
						<span>2017 – 2019</span>
					</div>
				</div>
			</div>
			<ul class="list-disc pl-5 text-gray-600">
				<li class="pb-1">
					Translate business requirements into robust technical
					solutions.
				</li>
				<li class="pb-1">
					Participate in the entire application lifecycle, focusing on
					design, development, debugging and client relations.
				</li>
				<li class="pb-1">
					Establish and promote design guidelines, best practices and
					standards.
				</li>
				<li class="pb-1">
					Develop object oriented, database driven web systems.
				</li>
				<li class="pb-1">
					Deliver requirements baselines ensuring project deadlines
					and budget are met.
				</li>
				<li>Provide client support on technical issues.</li>
			</ul>
			<div class="border-b border-gray-200"></div>
		</div>
	</div>

	<div class="item-section mb-5">
		<div class="company-block-logo">
			<div
				class="h-12 w-12 shrink-0 rounded-xl bg-cover"
				style="background-image: url(/img/rps.jpg)"
			></div>
		</div>

		<div class="w-full space-y-5">
			<div class="block-header">
				<div class="space-y-1.5">
					<div class="font-medium">Web Technician</div>
					<div class="flex space-x-5">
						<div class="block-header-info">
							<CompanyIcon />
							<span>RPS Group</span>
						</div>
					</div>
				</div>
				<div class="space-y-2 sm:text-right">
					<div class="job-type-badge">Full time</div>
					<div class="block-header-info">
						<DateIcon />
						<span>2015 – 2016</span>
					</div>
				</div>
			</div>
			<ul class="list-disc pl-5 text-gray-600">
				<li class="pb-1">
					Design, development and management of web projects for the
					RPS Intranet and the various RPS websites.
				</li>
				<li class="pb-1">
					Development of database driven interactive web
					communications systems.
				</li>
				<li class="pb-1">
					Maintaining and updating all websites and local intranet
					resources.
				</li>
				<li class="pb-1">
					Providing web development support, across the Group's
					corporate, divisional and office led web presentational
					activities.
				</li>
				<li>
					Supporting team members with the day-to-day operations of
					the Business Information Unit.
				</li>
			</ul>
		</div>
	</div>
</div>
