<script>
	import { fade, fly } from 'svelte/transition';
	export let center = false;
</script>

<div 
	in:fly={{ y: 100, delay: 300 }}
	out:fly={{ y: 100, delay: 0 }}
	class:center={center}
>
	<slot />
</div>

<style>
	div {
		display: flex;
		width: 100%;
		flex-direction: column;
		max-width: 600px;
		min-height: 100vh;
	}
	.center {
		align-items: center;
	}
</style>
