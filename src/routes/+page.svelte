<script lang="ts">
	import { sum } from '$lib/teste';

	var test: number = sum();
	test = 1;
	[1, 2, 3].reduce((a, b) => a + b + test, 0);
</script>

<h1 class="text-xl font-bold underline">Welcome to SvelteKit {test}</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
