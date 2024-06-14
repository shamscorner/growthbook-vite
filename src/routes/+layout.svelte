<script lang="ts">
	import { onMount } from 'svelte';
	import type { LayoutData } from './$types.js';

	export let data: LayoutData;

	onMount(() => {
		console.log('Layout data:', data);
	});
</script>

<slot />
