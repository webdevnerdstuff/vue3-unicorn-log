
<script setup lang="ts">
import { inject } from 'vue';
// import UnicornLog from './components/HelloWorld.vue';
import UnicornLog from './components/UnicornLog.vue';

const $unicornLog = inject('$unicornLog');


$unicornLog({
	// text: 90,
	type: 'log',
	// styles: 'content: "CONTENT XXXXX";',
	logPrefix: true,
	// magical: true,
	// array: 'foo',
	// disabled: true,
	// text: 'Hello World',
	// styles: 'color: red; font-size: 20px;',
	objects: {
		foobar: 'foobar',
	},
	array: ['MOO', 'COW'],
	// name: 'LOCAL OPTION'
});

const foo = { foo: 'foo ' };
const bar = { bar: 'bar ' };

$unicornLog({
	text: 'Hello World',

	objects: { ...foo, ...bar },
});



</script>

<template>
	<UnicornLog />
</template>

<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	transition: filter 300ms;
	will-change: filter;
}

.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
