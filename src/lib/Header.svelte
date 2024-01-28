<script lang="ts" context="module">
	type Props = {
		title: string | null;
	};
</script>

<script lang="ts">
	const { title = '' } = $props<Props>();
</script>

<h1>
	{title}
</h1>
