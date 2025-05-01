<script>
	// @ts-nocheck
	import ContentWrapper from '$lib/components/ContentWrapper.svelte';
	import Title from '$lib/components/Title/Title.svelte';
	import { theme } from '$lib/stores/theme';
	import { language } from '$lib/stores/language';
	import Icon from 'svelte-icons-pack';
	import BiChevronLeft from 'svelte-icons-pack/bi/BiChevronLeft';
	import SvelteTooltip from 'svelte-tooltip';
	import { fly } from 'svelte/transition';
	import { t } from '$lib/locales/translations';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="header-tools" in:fly={{ y: -100, delay: 300 }} out:fly={{ y: -100, delay: 0 }}>
	<a href="/work">
		<Icon src={BiChevronLeft} size="23px" color={$theme !== 'dark-mode' ? 'black' : 'white'} />
		<p>{$t('common.go_back', { deafult: 'Go Back' })}</p>
	</a>
</div>
<ContentWrapper center>
	<Title text={data.title} marginTop={0.8} />
	{#if data.description_en && data.description_es}
		<div class="content-wrapper">
			{@html $language === 'en' ? data.description_en : data.description_es}
		</div>
	{/if}
	<div class="content-wrapper">
		{#if data.techs.length > 0}
			<div class="techs">
				<h3>{$t('common.ingredients', { default: 'Ingredients' })}</h3>
				<div>
					{#each [...data.techs] as tech, index (index)}
						<SvelteTooltip tip={tech.name} bottom color="white">
							{#if !tech.isImage}
								<span style="margin-right: .3rem;">
									<Icon
										src={tech.icon}
										size="30px"
										color={$theme !== 'dark-mode' ? 'black' : 'white'}
									/>
								</span>
							{:else}
								<img
									alt={tech.name}
									src={tech.icon}
									style="height: 30px; width: 30px; margin-right: .3rem;"
								/>
							{/if}
						</SvelteTooltip>
					{/each}
				</div>
			</div>
		{/if}
		{#if data.tags.length > 0}
			<div class="techs" style="margin-top: 2rem;">
				<h3>{$t('common.tags', { default: 'Tags' })}</h3>
				<div style="display: flex; flex-direction: row; flex-wrap: wrap">
					{#each data.tags as tag (tag)}
						<span
							class="bullet"
							class:light-bg={$theme === 'light-mode'}
							class:dark-bg={$theme === 'dark-mode'}
							style="color: white"
						>
							{tag[0].toUpperCase() + tag.slice(1) + ' '}
						</span>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</ContentWrapper>

<style>
	.header-tools {
		display: flex;
		max-width: 600px;
		width: 100%;
		margin: 0.2rem 0 1rem 0;
	}
	.content-wrapper {
		width: 100%;
		margin-top: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.techs {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 100%;
	}
	.techs h3 {
		font-size: 1.2em;
		font-weight: bold;
		align-self: flex-start;
	}
	.techs div {
		margin-top: 1rem;
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		width: 100%;
	}
	.bullet {
		padding: 0.5rem 0.8rem;
		margin-bottom: 0.3rem;
		margin-right: 0.3em;
		border-radius: 1rem;
		font-size: small;
		font-weight: 600;
	}
	a {
		display: flex;
		align-items: center;
		justify-content: center;
		float: left;
		max-width: 600px;
	}
	a p {
		margin: 0 !important;
		padding: 0;
	}
</style>
