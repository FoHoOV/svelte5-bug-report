<script lang="ts">
	import store from '$lib/store.js';

	const { data } = $props();
	store.addTitle('page1');
</script>

<h2>
	{data.name}
</h2>
