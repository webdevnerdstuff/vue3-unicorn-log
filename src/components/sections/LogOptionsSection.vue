<template>
	<div class="row mb-5">
		<div :class="styleData.h2ColClass">
			<h2>Log Options</h2>
		</div>

		<div class="col-12">
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
							<td valign="top">{{ copyData.array }}</td>
						</tr>
						<tr>
							<td valign="top">disabled</td>
							<td class="option-type" valign="top">Boolean</td>
							<td class="boolean-style" valign="top">false</td>
							<td valign="top" v-html="pluginOptionsData.boolean"></td>
							<td valign="top">{{ copyData.disabled }}</td>
						</tr>
						<tr>
							<td valign="top">logPrefix</td>
							<td class="option-type" valign="top">Boolean | String</td>
							<td class="boolean-style" valign="top">false</td>
							<td valign="top">-</td>
							<td valign="top">{{ copyData.logPrefix }}</td>
						</tr>
						<tr>
							<td valign="top">magical</td>
							<td class="option-type" valign="top">Boolean</td>
							<td class="boolean-style" valign="top">false</td>
							<td valign="top" v-html="pluginOptionsData.boolean"></td>
							<td valign="top">{{ copyData.magical }}</td>
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
							<td valign="top">{{ copyData.object }}</td>
						</tr>
						<tr>
							<td valign="top">styles</td>
							<td class="option-type" valign="top">String | Array</td>
							<td valign="top">-</td>
							<td valign="top" v-html="pluginOptionsData.styles"></td>
							<td valign="top">{{ copyData.styles }}</td>
						</tr>
						<tr>
							<td valign="top">text</td>
							<td class="option-type" valign="top">String</td>
							<td valign="top">🦄</td>
							<td valign="top">-</td>
							<td valign="top">{{ copyData.text }}</td>
						</tr>
						<tr>
							<td valign="top">type</td>
							<td class="option-type" valign="top">String</td>
							<td valign="top">log</td>
							<td valign="top" v-html="pluginOptionsData.type"></td>
							<td valign="top">{{ copyData.type }}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<script setup>
import { inject } from 'vue';


const styleData = inject('styleData');
const copyData = inject('copyData');
const pluginOptionsData = inject('pluginOptionsData');

</script>

<style lang="scss"></style>
