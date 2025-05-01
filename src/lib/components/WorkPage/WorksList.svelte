<script>
    import { flip } from "svelte/animate";
	import WorkCard from "./WorkCard.svelte";

    /**
	 * @type {any[]}
	 */
     export let works = [];

</script>

<div>
    {#each works as work, i (work.slug)}
    <span
        animate:flip={{duration: 300, delay: i * 200}}
    >
        <WorkCard 
            {work} 
            {i} 
        />
    </span>

    {/each}
</div>

<style>
    div {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(48%, 1fr));
        grid-gap: 1rem;
        margin-top: 2rem;
        width: 100%;
    }
</style>