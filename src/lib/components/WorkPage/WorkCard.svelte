<script lang="ts">
	import { language } from '$lib/stores/language';
	import { fade, fly } from 'svelte/transition';
	import { theme } from '$lib/stores/theme';
	import { t } from '$lib/locales/translations';
	import type { Work } from '$lib/types';
	import Icon from 'svelte-icons-pack';
	import SvelteTooltip from 'svelte-tooltip';
	import { createEventDispatcher } from 'svelte';
	import { goto } from '$app/navigation';

	export let work: Work;
	export let i = 0;

	$: length = work.techs.length;
	$: description = $language === 'en' ? work.short_description_en : work.short_description_es;

	const extractIcon = (work: Work) => {
		const image = work.assets.find((image) => image.type === 'icon');
		return image?.url || '';
	};

</script>

<div
	class="shadow container-card"
	class:card-bg-light={$theme === 'light-mode'}
	class:card-bg-dark={$theme === 'dark-mode'}
	in:fade={{ duration: 300, delay: i * 200 }}
	out:fly={{ y: 100, delay: 0 }}
	on:click={() => goto(`/work/${work.slug}`)}
>
	<div class="card-header">
		<h3>{work.title}</h3>
		<div class="card-img-wrapper">
			<img class="card-img" src={extractIcon(work)} alt={work.title} />
		</div>
	</div>
	<p>{description}</p>
	<span>
		<div>
			{#each [...work.techs].splice(0, work.techs.length >= 4 ? 4 : work.techs.length) as tech}
				<div class="card-icon-wrapper">
					<SvelteTooltip tip={tech.name} top color="white">
						{#if tech.isImage}
							<img src={tech.icon} alt={tech.name} style="height: 25px; width: 25px" />
						{:else}
							<Icon src={tech.icon} size="25px" />
						{/if}
					</SvelteTooltip>
				</div>
			{/each}
			{#if length > 4}
				<p>+{length - 4}</p>
			{/if}
		</div>
		<a href={`/work/${work.slug}`} >{$t('common.see_more', { default: 'See more' })}</a>
	</span>
</div>

<style>
	img {
		height: 30px !important;
		width: 30px !important;
		object-fit: contain !important;
	}
	h3 {
		margin: 0 0 0 .3em !important;
		margin-bottom: 0.5rem;
		font-weight: bold;
		font-size: 1rem;
	}
	p {
		margin: 0;
		margin-top: 0.5rem;
		font-size: 0.8rem;
		line-height: normal;
	}
	span {
		display: flex;
		flex-direction: column;
		flex: 1;
		justify-content: flex-end;
	}
	span div {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		margin-bottom: 1rem;
	}
	span a {
		font-size: 0.7rem;
		/* font-weight: bold; */
		color: #000;
		text-decoration: underline;
		cursor: pointer;
	}
	span a:hover {
		opacity: 0.8;
	}
	span div p {
		margin: 0;
		font-weight: bold;
		font-size: 0.8rem;
	}
	.container-card {
		display: flex;
		flex-direction: column;
		border-radius: 4px;
		padding: 1rem;
		min-height: 220px;
		cursor: pointer;
	}
	.container-card:hover{
		box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
		animation: grow 0.5s ease-in;
	}

	@keyframes grow {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.05);
		}
		100% {
			transform: scale(1);
		}
	}

	.card-header {
		display: flex;
		flex-direction: row;
		width: 100%;
		padding: 0 !important;
		justify-content: space-between;
		align-items: center;
	}
	.card-img-wrapper {
		height: 45px !important;
		width: 45px !important;
		padding: 0 !important;
		margin: 0 !important;
		border-radius: 8px;
		background-color: #fff;
		border: 1px solid #eaeaea;
		display: flex !important;
		justify-content: center !important;
		align-items: center !important;
	}
	.card-icon-wrapper {
		display: flex;
		margin: 0;
		margin-right: 0.5rem;
		flex-wrap: wrap;
	}
	.card-bg-light {
		background-color: #f5f5f5;
	}
	.card-bg-dark {
		background-color: #eaeaea;
		color: #000;
	}
</style>
