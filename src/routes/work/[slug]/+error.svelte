<script>
	import { page } from '$app/stores';
	import ContentWrapper from '$lib/components/ContentWrapper.svelte';
</script>

<ContentWrapper>
	<div>
		<h1>{$page.status} {$page.error?.message}</h1>
	</div>
</ContentWrapper>

<style>
    div{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    h1 {
        font-size: 1rem;
        font-weight: 400;
        color: var(--color-text);
    }
</style>
