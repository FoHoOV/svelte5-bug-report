<script lang="ts">
	import store from '$lib/store.js';

	const { data } = $props();
	store.addTitle('page2');
</script>

<h2>
	{data.name}
</h2>
