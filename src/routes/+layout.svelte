<script lang="ts">
	import { navigating } from '$app/stores';
	import Title from '$lib/Title.svelte';

	const { children } = $props();
</script>

<div style="font-size: 2rem;">
	<a href="/">home</a>
	<a href="/page1"> page1 </a>
	<a href="/page2"> page2 </a>
</div>

{#if $navigating}
	<h1>Navigating</h1>
{:else}
	<div style="border: 1px solid black; background-color: beige;">
		<p>this section is broken and will only work on full page refreshes</p>
		<p>for some reason if you remove the `Title` component this section will work as well</p>
		{@render children()}
		<Title></Title>
	</div>
{/if}

<div style="border: 1px solid black; background-color: #c0ffc0;">
	<p>this section works perfectly :|</p>
	{@render children()}
	<Title></Title>
</div>
