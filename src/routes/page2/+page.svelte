<script lang="ts">
	import store from '$lib/store';

	const { data } = $props();
	store.addTitle('page2');
</script>

<h2>
	This will not show after navigation in the first div: {data.name}
</h2>
