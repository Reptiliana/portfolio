<script>
	// @ts-nocheck

	import ContentWrapper from '$lib/components/ContentWrapper.svelte';
	import Title from '$lib/components/Title/Title.svelte';
	import SearchWorkTools from '$lib/components/WorkPage/SearchWorkTools.svelte';
	import { t } from '$lib/locales/translations';
	import works from '$lib/data/works';
	import WorksList from '$lib/components/WorkPage/WorksList.svelte';
	import { fly } from 'svelte/transition';

	let filterTerms = [];


	$: worksList = works.filter((work) => {
		if (filterTerms.length === 0 || filterTerms[0] === '') {
			return true;
		}
		return filterTerms.some((term) => {
			return testRegexTags(work.tags, term);
		});
	});

	const testRegexTags = (tags, term) => {
		return tags.some((tag) => {
			return testRegex(tag, `^${term}`);
		});
	};

	const testRegex = (tag, regex) => {
		const regexTest = new RegExp(regex, 'i');
		return regexTest.test(tag);
	};

	const handleSearch = (/** @type {{ detail: { searchTags: any; }; }} */ event) => {
		const { searchTags } = event.detail;
		filterTerms = searchTags;
	};
</script>

<div in:fly={{ y: -150, delay: 200 }} out:fly={{ y: -150, delay: 0 }}>
	<Title text={$t('work.title', { default: 'My Work' })} />
	<p>{$t('work.intro', { default: 'Here you can see projects I have worked in ❤️' })}</p>
	<SearchWorkTools on:search={handleSearch} works={worksList} marginTop={1.5} />
</div>
<ContentWrapper>
	<WorksList works={worksList} />
</ContentWrapper>

<style>
	div {
		max-width: 600px;
		display: flex;
		margin-top: 0.8rem;
		width: 100%;
		flex-direction: column;
	}
</style>
