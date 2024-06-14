<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types.js';

	export let data: PageData;

	onMount(async () => {
		console.log('Page data:', data);
	});
</script>

<h1>Growthbook Vite Edition</h1>

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
