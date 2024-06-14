<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types.js';

	export let data: PageData;

	onMount(async () => {
		console.log('Page data:', data);
	});
</script>

<h1>Growthbook Vite Edition</h1>

<p>
	This is an unofficial Growthbook library for Sveltekit projects until they release their official
	one. This is based on their JS-sdk.
</p>

<p>
	Check out the official website <a href="https://www.growthbook.io/" target="_blank">Growthbook</a
	>.
</p>

<p>
	Read more about this in their official <a
		href="https://github.com/growthbook/growthbook"
		target="_blank">Github repository</a
	>.
</p>

<!-- {#if growthbook.isOn('my-feature')}
	<p>My Feature is on!</p>
{:else}
	<p>My Feature is off!</p>
{/if}

{#if growthbook.isOn('my-on-feature')}
	<p>My On Feature is on!</p>
{:else}
	<p>My On Feature is off!</p>
{/if} -->
