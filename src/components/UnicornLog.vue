<template>
	<div>
		<NavBar />

		<div class="container mb-5">
			<div class="row mb-3">
				<div class="col-12 text-center">
					<h1 class="rainbow-text">Vue Unicorn Log</h1>
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
			<div id="ul-installation" class="row mb-5">
				<div class="col-12">
					<h2>Installation</h2>
				</div>

				<div class="col-lg-12">
					Using pnpm:
					<CodeBlock code="pnpm add vue3-unicorn-log" lang="plain" />
				</div>

				<div class="col-lg-12">
					<CodeBlock code="npm i vue3-unicorn-log" lang="plain" />
				</div>
			</div>

			<!-- ============================================== Usage -->
			<div id="ul-usage" class="row mb-5">
				<div class="col-12">
					<h2>Usage</h2>
				</div>

				<div class="col-xl-8 col-lg-12">
					<code language="js">
						<pre>
import Vue from 'vue';
import UnicornLog from 'vue-unicorn-log';

Vue.use(UnicornLog);
								</pre
						>
					</code>
				</div>
			</div>

			<!-- ============================================== Plugin Options -->
			<div id="ul-plugin-options" class="row mb-5">
				<div class="col-12 mb-3">
					<h2>Plugin Options</h2>
				</div>

				<div class="col-12 mb-3">
					<div class="table-responsive">
						<table class="table table-striped table-bordered">
							<thead>
								<tr>
									<th>Name</th>
									<th>Type</th>
									<th>Default</th>
									<th>Options</th>
									<th>Description</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td valign="top">defaultStyles</td>
									<td class="option-type" valign="top">Object</td>
									<td valign="top">
										<code>
											<pre>
const rainbowLinearGradient = `linear-gradient(to right,
	hsl(0, 100%, 50%),
	hsl(60, 100%, 50%),
	hsl(120, 100%, 50%),
	hsl(180, 100%, 50%),
	hsl(240, 100%, 50%),
	hsl(300, 100%, 50%),
	hsl(360, 100%, 50%)
)`;

defaultStyles: {
	log: [
		'background-color: black',
		`border-image: ${rainbowLinearGradient} 1`,
		'border-style: solid',
		'border-width: 4px',
		'color: #fff',
		'font-weight: normal',
		'padding: 8px',
	],
	info: [
		'background-color: hsla(225, 100%, 8%, 1)',
		'box-shadow: 999px 0 0 hsla(225, 100%, 8%, 1)',
		'color: hsla(225, 100%, 85%, 1)',
		'display: block',
		'padding: 2px',
	],
}</pre
											>
										</code>
									</td>
									<td valign="top">
										<code>
											<pre>
{
	log: [],
	info: [],
}</pre
											>
										</code>
									</td>
									<td valign="top">{{ copy.defaultStyles }}</td>
								</tr>
								<tr>
									<td valign="top">disabled</td>
									<td class="option-type" valign="top">Boolean</td>
									<td class="boolean-style" valign="top">false</td>
									<td valign="top" v-html="options.boolean"></td>
									<td valign="top">{{ copy.disabled }}</td>
								</tr>
								<tr>
									<td valign="top">logPrefix</td>
									<td class="option-type" valign="top">Boolean | String</td>
									<td class="boolean-style" valign="top">false</td>
									<td valign="top">-</td>
									<td valign="top">{{ copy.logPrefix }}</td>
								</tr>
								<tr>
									<td valign="top">styles</td>
									<td class="option-type" valign="top">String | Array</td>
									<td valign="top">-</td>
									<td valign="top" v-html="options.styles"></td>
									<td valign="top">{{ copy.styles }}</td>
								</tr>
								<tr>
									<td valign="top">type</td>
									<td class="option-type" valign="top">String</td>
									<td valign="top">log</td>
									<td valign="top" v-html="options.type"></td>
									<td valign="top">{{ copy.type }}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>

				<!-- ======================= Plugin Option Overriding -->
				<div class="col-12">
					<h5>Overriding the plugin default options</h5>
				</div>

				<div class="col-xl-8 col-lg-12">
					<code language="js">
						<pre>
import Vue from 'vue';
import UnicornLog from 'vue-unicorn-log';

Vue.use(UnicornLog, {
  defaultStyles: {},
  disabled: process.env.UNICORN_LOG !== 'true',
  logPrefix: '[OMG LOOK HERE!]',
  styles: 'font-weight: bold;',
  type: 'info'
});
								</pre
						>
					</code>
				</div>

				<div class="col-12">
					<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">
						<symbol
							id="exclamation-triangle-fill"
							fill="currentColor"
							viewBox="0 0 16 16"
						>
							<path
								d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
							/>
						</symbol>
					</svg>

					<div
						class="alert alert-primary d-flex align-items-center my-2"
						role="alert"
					>
						<svg
							aria-label="Info:"
							class="bi flex-shrink-0 me-2"
							height="24"
							role="img"
							width="24"
						>
							<use xlink:href="#exclamation-triangle-fill"></use>
						</svg>
						<div>
							It is recommended to set the <code>disabled</code> option to use a
							<span class="fst-italic">.env</span> variable when possible. This
							way you will not have your logs exposed to the public when on a
							production site.
						</div>
					</div>
				</div>
			</div>

			<!-- ============================================== Log Options -->
			<div id="ul-log-options" class="row mb-5">
				<div class="col-12 mb-3">
					<h2>Log Options</h2>
				</div>

				<div class="col-lg-12">
					<div class="table-responsive">
						<table class="table table-striped table-bordered">
							<thead>
								<tr>
									<th>Name</th>
									<th>Type</th>
									<th>Default</th>
									<th>Options</th>
									<th>Description</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td valign="top">array</td>
									<td class="option-type" valign="top">Array</td>
									<td valign="top"><code>[]</code></td>
									<td valign="top">-</td>
									<td valign="top">{{ copy.array }}</td>
								</tr>
								<tr>
									<td valign="top">disabled</td>
									<td class="option-type" valign="top">Boolean</td>
									<td class="boolean-style" valign="top">false</td>
									<td valign="top" v-html="options.boolean"></td>
									<td valign="top">{{ copy.disabled }}</td>
								</tr>
								<tr>
									<td valign="top">logPrefix</td>
									<td class="option-type" valign="top">Boolean | String</td>
									<td class="boolean-style" valign="top">false</td>
									<td valign="top">-</td>
									<td valign="top">{{ copy.logPrefix }}</td>
								</tr>
								<tr>
									<td valign="top">magical</td>
									<td class="option-type" valign="top">Boolean</td>
									<td class="boolean-style" valign="top">false</td>
									<td valign="top" v-html="options.boolean"></td>
									<td valign="top">{{ copy.magical }}</td>
								</tr>
								<tr>
									<td valign="top">name</td>
									<td class="option-type" valign="top">String</td>
									<td valign="top">[UnicornLog]:</td>
									<td valign="top">-</td>
									<td valign="top">
										If <code>logPrefix</code> option is set as a
										<span class="option-type">Boolean</span> of
										<span class="boolean-style">true</span>, it will use the
										<code>name</code> option for the prefix.
									</td>
								</tr>
								<tr>
									<td valign="top">objects</td>
									<td class="option-type" valign="top">Object</td>
									<td valign="top"><code>{}</code></td>
									<td valign="top">-</td>
									<td valign="top">{{ copy.object }}</td>
								</tr>
								<tr>
									<td valign="top">styles</td>
									<td class="option-type" valign="top">String | Array</td>
									<td valign="top">-</td>
									<td valign="top" v-html="options.styles"></td>
									<td valign="top">{{ copy.styles }}</td>
								</tr>
								<tr>
									<td valign="top">text</td>
									<td class="option-type" valign="top">String</td>
									<td valign="top">🦄</td>
									<td valign="top">-</td>
									<td valign="top">{{ copy.text }}</td>
								</tr>
								<tr>
									<td valign="top">type</td>
									<td class="option-type" valign="top">String</td>
									<td valign="top">log</td>
									<td valign="top" v-html="options.type"></td>
									<td valign="top">{{ copy.type }}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>

			<!-- ============================================== Instance Methods -->
			<div id="ul-instance-methods" class="row mb-5">
				<div class="col-12">
					<h2>Instance Methods</h2>
				</div>

				<div class="col-12">
					There are two instance methods available to use:
					<br />
					<code>$unicornLog</code>
					<br />
					<code>$uniLog</code>
				</div>
			</div>

			<!-- ============================================== Console Methods -->
			<div id="ul-console-methods" class="row mb-5">
				<div class="col-12">
					<h2>Console Methods</h2>
				</div>

				<div class="col-12">
					For a description of the different log methods, refer to the
					<a
						href="https://developer.mozilla.org/en-US/docs/Web/API/console"
						target="_blank"
						>Web APIs MDN</a
					>
					developer documentation for console.
				</div>
			</div>

			<!-- ============================================== Examples -->
			<div id="ul-examples" class="mb-5">
				<div class="row">
					<div class="col-12 mb-3">
						<h2>Examples</h2>
						<p class="fst-italic">
							Open DevTools and click on the "Console" tab to view example
							results.
						</p>
					</div>
				</div>

				<!-- ======================= Basic -->
				<SimpleExample id="simple-examples" />

				<!-- ======================= Text Option -->
				<TextExample id="text-examples" />

				<!-- ======================= Type Option -->
				<TypeExample id="type-examples" />

				<!-- ======================= Styles Option -->
				<StylesExample id="styles-examples" />

				<!-- ======================= Disabled Option -->
				<DisabledExample id="disabled-examples" />

				<!-- ======================= Log Prefix Option -->
				<LogPrefixExample id="logPrefix-examples" />

				<!-- ======================= Magical Option -->
				<MagicalExample id="magical-examples" />

				<!-- ======================= Name Option -->
				<LogPrefixExample id="name-examples" :isNameOption="true" />

				<!-- ======================= Objects Option -->
				<ObjectsExamples id="objects-examples" />

				<!-- ======================= Array Option -->
				<ArraysExample id="array-examples" />
			</div>

			<!-- ============================================== Dependencies -->
			<div id="ul-dependencies" class="row mb-5">
				<div class="col-12">
					<h2>Dependencies</h2>
				</div>

				<div class="col-xl-8 col-lg-12">
					<a href="https://v2.vuejs.org/" target="_blank">Vue 2</a>
				</div>
			</div>

			<!-- ============================================== Change Log -->
			<div id="ul-change-log" class="row mb-5">
				<div class="col-12">
					<h2>Change Log</h2>
				</div>

				<div class="col-12">
					<a
						href="https://github.com/webdevnerdstuff/vue-unicorn-log/blob/master/CHANGELOG.md"
						target="_blank"
						>CHANGELOG.md</a
					>
				</div>
			</div>

			<!-- ============================================== License -->
			<div id="ul-license" class="row mb-5">
				<div class="col-12">
					<h2>License</h2>
				</div>

				<div class="col-12">
					<p>
						Copyright &copy; 2022 WebDevNerdStuff
						<br />
						Licensed under the MIT license.
					</p>
					<p>
						<a
							href="https://github.com/webdevnerdstuff/vue-unicorn-log/blob/master/LICENSE.md"
							target="_blank"
						>
							LICENSE.md
						</a>
					</p>
				</div>
			</div>

			<div class="row mb-5">
				<div class="col-12 text-center">
					<img
						alt="Vue Unicorn Log by @WebDevNerdStuff"
						class="img-fluid"
						src="vue-unicorn-log-social.jpg"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import CodeBlock from '@/components/CodeBlock.vue';
import NavBar from '@/components/NavBar.vue';
import ArraysExample from '@/components/examples/Arrays.vue';
import DisabledExample from '@/components/examples/Disabled.vue';
import LogPrefixExample from '@/components/examples/LogPrefix.vue';
import MagicalExample from '@/components/examples/Magical.vue';
import ObjectsExamples from '@/components/examples/Objects.vue';
import SimpleExample from '@/components/examples/Simple.vue';
import StylesExample from '@/components/examples/Styles.vue';
import TextExample from '@/components/examples/Text.vue';
import TypeExample from '@/components/examples/Type.vue';

export default {
	name: 'UnicornLog',
	props: {},
	components: {
		ArraysExample,
		CodeBlock,
		DisabledExample,
		LogPrefixExample,
		MagicalExample,
		NavBar,
		ObjectsExamples,
		SimpleExample,
		StylesExample,
		TextExample,
		TypeExample,
	},
	data: () => ({
		copy: {
			array: 'Used to include an array in the log.',
			defaultStyles: 'Used to adjust the default styles.',
			disabled: 'Disables the output of the log in the console. This works best when using an environment to conditionally set so it 										will log in development, but not on the production site.',
			logPrefix: 'Prepends a string to to the output.',
			magical: 'Adds a magical style to the output.',
			object: 'Used to include objects in the log.',
			styles: 'Sets the styles for the log.',
			text: 'Used to include a string in the log.',
			type: 'Specifies which console method should be used.',
		},
		options: {
			boolean: '<span class="boolean-style">true<br />false</span>',
			styles: '<a href="https://developer.mozilla.org/en-US/docs/Web/API/console#styling_console_output" target="_blank"											>Styling Console Output</a>',
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
				info
				<br />
				log
				<br />
				table
				<br />
				trace
				<br />
				warn
			`,
		},
		rainbowLinearGradient: `linear-gradient(to right,
			hsl(0, 100%, 50%),
			hsl(39, 100%, 50%),
			hsl(60, 100%, 50%),
			hsl(120, 100%, 50%),
			hsl(180, 100%, 50%),
			hsl(240, 100%, 50%),
			hsl(300, 100%, 50%),
			hsl(360, 100%, 50%)
		)`,
		testArrays: [
			['foo', 'bar'],
			['bar', 'foo'],
		],
		testObjects: [
			{
				foo: 'foo',
				bar: 'bar',
			},
			{
				fooTwo: 'fooTwo',
				barTwo: 'barTwo',
			},
		],
	}),
	mounted() {
		this.welcomeLog();
	},
	methods: {
		testingLogs() {
			// const testArray1 = this.testArrays[0];
			// const testArray2 = this.testArrays[1];
			// const testArray3 = ['foobar'];
			// const testObj1 = this.testObjects[0];
			// const testObj2 = this.testObjects[1];
			// const testObj3 = {
			// 	barThree: 'barThree',
			// 	fooThree: 'fooThree',
			// };

			// this.$unicornLog({
			// 	array: [...testArray1, ...testArray2, testArray3],
			// 	logPrefix: true,
			// 	objects: { testObj1, testObj2, testObj3 },
			// 	text: 'Testing Log',
			// 	type: 'log',
			// });
		},
		welcomeLog() {
			// this.$unicornLog({
			// 	text: 'Vue Unicorn Log... It\'s magical!',
			// 	styles: [
			// 		`background: ${this.rainbowLinearGradient}`,
			// 		'color: #f7f7f7',
			// 		'display: block',
			// 		'font-family: "Helvetica", "Arial"',
			// 		'font-size: 25px',
			// 		'font-weight: bold',
			// 		'margin: 5px 0',
			// 		'padding: 15px',
			// 		'text-align: center',
			// 		'text-shadow: 1px 1px 2px #000',
			// 	],
			// 	type: 'log',
			// });
		},
	},
};
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
