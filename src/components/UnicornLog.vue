<template>
	<div>
		<NavBar />

		<div class="container mb-5">
			<div class="row mb-4">
				<div class="col-12 text-center">
					<img
						alt="Vue 3 UnicornLog by @WebDevNerdStuff"
						class="img-fluid unicorn-img"
						src="unicorn.svg"
					/>
				</div>
			</div>
			<div class="row mb-3">
				<div class="col-12 text-center">
					<h1 class="rainbow-text">Vue 3 UnicornLog</h1>
				</div>
				<div class="col-12 text-center">
					<span class="badge bg-secondary rounded-pill">{{ version }}</span>
				</div>
			</div>

			<div class="row">
				<div class="col-12 mb-4">
					<h3 class="text-center mb-4">
						A <span class="rainbow-text">magical</span> 🦄 plugin to make
						coloring the console output easier and more flexible.
					</h3>
					<p>
						Sometimes when building your application/site you don't want to see
						your linter complaining about using console functions. This helps to
						keep your linter happy so you can concentrate on writing bug free
						magical code.
					</p>
					<p>
						It also has the ability to run the console functions depending on
						environment variables so you can keep your production site's console
						quiet.
					</p>
					<p>
						This plugin is also available for Vue 2
						<a :href="links.v2Version" target="_blank">here</a>.
					</p>
				</div>

				<div class="col-12">
					<h5>Demo</h5>
				</div>

				<div class="col-12">
					Open DevTools and click on the "Console" tab and try out some
					<a href="#ul-examples">Examples</a>.
				</div>
			</div>
		</div>

		<div class="container">
			<!-- ============================================== Installation -->
			<InstallationSection id="ul-installation" />

			<!-- ============================================== Register -->
			<RegisterSection id="ul-register-plugin" />

			<!-- ============================================== Usage -->
			<UsageSection id="ul-usage" />

			<!-- ============================================== Plugin Options -->
			<PluginOptionsSection id="ul-plugin-options" />

			<!-- ============================================== Log Options -->
			<LogOptionsSection id="ul-log-options" />

			<!-- ============================================== Console Methods -->
			<ConsoleMethodsSection id="ul-console-methods" />

			<!-- ============================================== Examples -->
			<ExamplesSection id="ul-examples" />

			<!-- ============================================== Dependencies -->
			<DependenciesSection id="ul-dependencies" />

			<!-- ============================================== Change Log -->
			<ChangeLogSection id="ul-change-log" />

			<!-- ============================================== License -->
			<LicenseSection id="ul-license" />

			<FooterSection />
		</div>
	</div>
</template>

<script setup lang="ts">
import { inject, onMounted, provide } from 'vue';
import { name, version } from '../../package';
import NavBar from '@/components/NavBar.vue';
import {
	ChangeLogSection,
	ConsoleMethodsSection,
	DependenciesSection,
	ExamplesSection,
	FooterSection,
	InstallationSection,
	LicenseSection,
	LogOptionsSection,
	PluginOptionsSection,
	RegisterSection,
	UsageSection,
} from '@/components/sections';


const $unicornLog = inject('$unicornLog');

onMounted(() => {
	welcomeLog();
});

provide('styleData', {
	h2ColClass: 'col-12 mb-4',
	fieldWidth: 'width: 300px',
});

provide('copyData', {
	array: 'Used to include an array in the log.',
	defaultStyles: 'Used to adjust the default styles.',
	disabled: 'Disables the output of the log in the console. This works best when using an environment to conditionally set so it 										will log in development, but not on the production site.',
	logPrefix: 'Prepends a string to to the output.',
	magical: 'Adds a magical style to the output.',
	object: 'Used to include objects in the log.',
	styles: 'Sets the styles for the log.',
	text: 'Used to include a string in the log.',
	type: 'Specifies which console method should be used.',
});


const packageName = name;
const repoBaseUrl = `https://github.com/webdevnerdstuff/${packageName}`;

const links = {
	changeLog: `${repoBaseUrl}/blob/main/CHANGELOG.md`,
	consoleApi: 'https://developer.mozilla.org/en-US/docs/Web/API/console',
	docs: `https://webdevnerdstuff.github.io/${packageName}/`,
	github: repoBaseUrl,
	license: `${repoBaseUrl}/blob/main/LICENSE.md`,
	npm: `https://www.npmjs.com/package/${packageName}`,
	v2Version: 'https://github.com/webdevnerdstuff/vue-unicorn-log',
	vueJs: 'https://vuejs.org/',
};

provide('links', links);

provide('pluginOptionsData', {
	boolean: '<span class="boolean-style">true<br />false</span>',
	styles: `<a href="${links.consoleApi}" target="_blank">Styling Console Output</a>`,
	type: `
				clear
				<br />
				debug
				<br />
				dir
				<br />
				error
				<br />
				group
				<br />
				groupCollapsed
				<br />
				groupEnd
				<br />
				infos
				<br />
				log
				<br />
				table
				<br />
				trace
				<br />
				warn
			`,
});

const rainbowLinearGradient = `linear-gradient(to right,
	hsl(0, 100%, 50%),
	hsl(39, 100%, 50%),
	hsl(60, 100%, 50%),
	hsl(120, 100%, 50%),
	hsl(180, 100%, 50%),
	hsl(240, 100%, 50%),
	hsl(300, 100%, 50%),
	hsl(360, 100%, 50%)
)`;

function welcomeLog() {
	$unicornLog({
		text: 'Welcome to Vue 3 UnicornLog... It\'s magical!',
		styles: [
			`background: ${rainbowLinearGradient}`,
			'color: #f7f7f7',
			'display: block',
			'font-family: "Helvetica", "Arial"',
			'font-size: 25px',
			'font-weight: bold',
			'margin: 5px 0',
			'padding: 15px',
			'text-align: center',
			'text-shadow: 1px 1px 2px #000',
		],
		type: 'log',
	});
}
</script>


<style lang="scss">
$rainbow-gradient: linear-gradient(to right, hsl(0, 100%, 50%), hsl(39, 100%, 50%), hsl(60, 100%, 50%), hsl(120, 100%, 50%), hsl(180, 100%, 50%), hsl(240, 100%, 50%), hsl(300, 100%, 50%), hsl(0, 100%, 50%));

html {
	scroll-padding-top: 70px;
}

h1 {
	font-family: 'Henny Penny', cursive;
	font-size: 3em;
	font-weight: bold;
}

h2 {
	font-family: 'Indie Flower', cursive;

	&::after {
		background-image: $rainbow-gradient;
		border-radius: 5px;
		content: ' ';
		display: block;
		height: 2px;
	}
}

h4 {
	font-family: 'Indie Flower', cursive;
	font-size: 1.2em;
	padding: 0.5em 0;
}

.unicorn-img {
	max-width: 300px;
}

.table {
	tbody {
		td {
			pre {
				background-color: #fafafa !important;
				border-radius: 5px;
				padding: 1rem;
				tab-size: 2;
			}
		}
	}
}

.option-type {
	color: hsl(282, 68%, 38%) !important;
	font-weight: 500;
}

.boolean-style {
	color: hsl(240, 100%, 50%) !important;
	font-weight: 500;
}

.rainbow-text {
	-webkit-background-clip: text;
	background-clip: text;
	background-image: $rainbow-gradient;
	border-radius: 5px;
	color: transparent;
	display: inline-block;
	font-weight: bold;
	height: 100%;
	-webkit-text-fill-color: transparent;
	text-shadow: 0 2px 3px rgba(255, 255, 255, 0.3), 0 -1px 2px rgba(0, 0, 0, 0.2);
}

.rainbow-border {
	background-color: #000;
	border-image: $rainbow-gradient 1;
	border-style: solid;
	border-width: 4px;
	padding: 2rem;
}
</style>
