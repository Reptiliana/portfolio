<script>
    import { theme } from '$lib/stores/theme';
</script>

<div>
    <p>
        Produly made with <a 
        class:link-night={$theme === 'light-mode'}
        class:link-light={$theme === 'dark-mode'}
        target="blank"
        href="https://kit.svelte.dev/">SvelteKit</a>
    </p>
</div>

<style>
    div {
        background-color: var(--color-background);
        color: var(--color-text);
        padding: 3rem 2rem 1rem;
    }
    p {
        font-family: var(--font-family-chivomono);
        font-weight: 200;
        text-align: center;
    }
</style>