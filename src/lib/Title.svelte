<script lang="ts">
	import Header from '$lib/Header.svelte';
	import store from '$lib/store';

	const currentTitle = $derived($store.length > 0 ? $store[$store.length - 1].title : null);
</script>

<Header title={currentTitle}></Header>
