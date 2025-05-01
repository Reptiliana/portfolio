<script>
	import ContentWrapper from '$lib/components/ContentWrapper.svelte';
	import Title from '$lib/components/Title/Title.svelte';
	import { t } from '$lib/locales/translations';
	import { theme } from '$lib/stores/theme';
	import { fly } from "svelte/transition";
</script>

<div
	style="width: 100%; max-width: 600px;"
	in:fly={{ y: -150, delay: 200 }}
	out:fly={{ y: -150, delay: 0 }}
>
	<Title text={$t('common.skills', {default: "Skills"})} marginTop={.8} />
	<h2>{$t('skills.description', {default: "Here you can check my main, side and soft skills. 📚"})}</h2>
</div>

<ContentWrapper>
	<h3>{$t('skills.tech_skills', {default: "Tech Skills"})}</h3>
	<p>
		{$t('skills.main_skills', {default: "My main skills are in web development, specially in the frontend. I have experience with:"})}
	</p>

	<h3>Frontend</h3>
	<ul>
		<li>HTML5</li>
		<li>CSS3</li>
		<li>JavaScript</li>
		<li>Typescript</li>
		<li>Angular</li>
		<li>React</li>
		<li>Vue</li>
		<li>Vuetify</li>
		<li>Boostrap</li>
	</ul>

	<p style="margin-top: 1.5rem">
		{$t('skills.pre_backend', {default: "I also have some experience building and giving support to backend platforms and databases"})}
	</p>

	<h3>Backend</h3>
	<ul>
		<li>.NET Core</li>
		<li>Nuget</li>
		<li>MongoDB</li>
		<li>Docker</li>
		<li>SQL/MySQL</li>
		<li>Redis</li>
		<li>NodeJS</li>
	</ul>

	<p style="margin-top: 1.5rem">
		{$t('skills.other_tech', {default: "I have also worked with some other techonologies, I don't include them in the previous list because it's not that common for me to use them, but I have some experience with them. ie. PHP, Laravel, Angular 2+, Python, etc."})}
	</p>

	<h3>{$t('skills.soft_skills', {default: "Soft Skills"})}</h3>
	<p>
		{$t('skills.soft_skills_des', {default: "As a developer I have worked with a good amount of different people from different backgrounds, and countries. They have taught me a lot about how to work in a team, and how to communicate with other people. I have also worked with clients, and I have learned how to communicate with them and how to understand their needs."})}
	</p>
	<ul>
		<li>{$t('skills.communication', {default: "Communication"})}</li>
		<li>{$t('skills.teamwork', {default: "Teamwork"})}</li>
		<li>{$t('skills.self_learning', {default: "Self Learning"})}</li>
		<li>{$t('skills.self_motivation', {default: "Self Motivation"})}</li>
		<li>{$t('skills.self_management', {default: "Self Management"})}</li>
		<li>{$t('skills.problem_solving', {default: "Problem Solving"})}</li>
		<li>{$t('skills.time_management', {default: "Time Management"})}</li>
		<li>{$t('skills.responsibility', {default: "Responsibility"})}</li>
	</ul>
</ContentWrapper>

<style>
	h3 {
		margin-top: 2rem; font-size: large; font-weight: bold;
	}

	p {
		margin-top: .5rem;
		line-height: normal;
	}

	ul {
		margin-top: .3rem;
	}

	li {
		margin-top: .3rem;
		list-style: disc;
		margin-left: 2rem;
	}

	a {
		text-decoration: underline;
    	cursor: pointer;
	}

	.linkDark {
		color: var(--day-color)
	}

	.linkLight{
		color: var(--night-color)
	}

</style>
