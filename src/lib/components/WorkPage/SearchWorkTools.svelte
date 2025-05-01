<script>
// @ts-nocheck
	import { t } from '$lib/locales/translations';
	import { createEventDispatcher } from 'svelte';

	export let works = [];
	export let marginTop = 0;
	const dispatch = createEventDispatcher();

	function handleSearchTagChange(event) {
		const tagsRaw = event.target.value;
		const separatedTags = tagsRaw.split(',')

		const noRepeatedTags = separatedTags.filter((tag, index) => {
			return separatedTags.indexOf(tag) === index;
		});

		const cleanTags = noRepeatedTags.map(tag => tag.trim());

		dispatch('search', { searchTags: cleanTags });
	}
</script>

<div
	style="margin-top: {marginTop}rem;"
>
	<input
		class="text-input"
		type="text"
		placeholder={$t('work.search', { default: 'Search terms separated by commas' })}
		on:input={handleSearchTagChange}
	/>
	<p>
		Results: {works.length}
		| Total Projects: {works.reduce((acc, work) => {
			return acc + (work?.subprojects || 1);
		}, 0)
	}
	</p>
</div>

<style>
	div {
		display: flex;
		margin-top: 1rem;
		width: 100%;
		flex-direction: column;
	}
	.text-input {
		height: 30px;
		border: 1px solid #ccc;
		border-radius: 4px;
		padding: 0 0.5rem;
		font-family: var(--font-family-chivomono);
	}
	p {
		margin-top: 0.5rem;
		font-size: .7rem;
		font-family: var(--font-family-chivomono);
	}
</style>
