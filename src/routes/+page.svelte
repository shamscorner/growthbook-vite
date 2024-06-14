<script lang="ts">
	import { onMount } from 'svelte';
	import { growthbook } from './growthbook.js';

	onMount(async () => {
		await growthbook.init({ streaming: true });

		if (growthbook.isOn('my-on-feature')) {
			console.log('My Feature is on!');
		} else {
			console.log('My Feature is off!');
		}
	});
</script>

<h1>Growthbook Vite Edition</h1>

{#if growthbook.isOn('my-feature')}
	<p>My Feature is on!</p>
{:else}
	<p>My Feature is off!</p>
{/if}

{#if growthbook.isOn('my-on-feature')}
	<p>My On Feature is on!</p>
{:else}
	<p>My On Feature is off!</p>
{/if}
