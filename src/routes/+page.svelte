<script>
	// @ts-nocheck
	import './home.css';
	import { theme } from '$lib/stores/theme';
	import Title from '$lib/components/Title/Title.svelte';
	import Subtitle from '$lib/components/Subtitle/Subtitle.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import ContentWrapper from '$lib/components/ContentWrapper.svelte';
	import { t } from '$lib/locales/translations.js';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import AiFillGithub from 'svelte-icons-pack/ai/AiFillGithub';
	import AiFillLinkedin from 'svelte-icons-pack/ai/AiFillLinkedin';
	import IoMailSharp from 'svelte-icons-pack/io/IoMailSharp';
	const my_links = [
		{
			name: 'Github',
			url: 'https://github.com/Reptiliana',
			icon: AiFillGithub
		}
	];
</script>

<svelte:head>
	<title>Reptiliana</title>
	<meta name="description" content="I'm a web developer, Angular, NetCore, AWS" />
	<meta name="keywords" content="Reptiliana, web developer, frontend developer, angular, nodejs, react, javascript, typescript" />
	<meta name="author" content="Reptiliana" />
	<meta name="robots" content="index, follow" />
	<meta name="googlebot" content="index, follow" />
	<meta name="google" content="nositelinkssearchbox" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />

	<meta property="og:image" content="https://res.cloudinary.com/dgontkzbf/image/upload/v1746657964/2da52f96-cd3c-4576-ab4c-9a46fad29d2a_jcybhp.jpg" />
	<meta property="og:image:secure_url" content="https://res.cloudinary.com/dgontkzbf/image/upload/v1746657964/2da52f96-cd3c-4576-ab4c-9a46fad29d2a_jcybhp.jpg" />
	<meta property="og:image:alt" content="Reptiliana" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="520" />
	<meta property="og:image:height" content="520" />

	<!-- twitter card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Reptiliana" />
	<meta name="twitter:description" content="I'm a full-stack developer, mostly with Angular and .Net" />
	<meta name="twitter:image" content="https://res.cloudinary.com/dgontkzbf/image/upload/v1746657964/2da52f96-cd3c-4576-ab4c-9a46fad29d2a_jcybhp.jpg" />

	<!-- facebook card -->
	<meta property="og:title" content="Reptiliana" />
	<meta property="og:description" content="I'm a full-stack developer, mostly with Angular and .Net" />
	<meta property="og:url" content="https://my-portfolio-mocha-ten.vercel.app/" />
	<meta property="og:site_name" content="Reptiliana" />
	<meta property="og:type" content="website" />

	<link rel="icon" type="image/x-icon" href="/favicon.ico" />
</svelte:head>
<ContentWrapper>
	<div class="content-header">
		<div>
			<Title text="Reptiliana" />
			<Subtitle text="Angular / .NET Core / AWS" />
		</div>
		<img			
			style="object-fit: cover;"
			class="shadow" src="pp_1.webp" alt="Reptiliana" />
	</div>

	<div class="section" style="margin-top: 2em; position: relative">
		<p>{$t("common.work", {default: 'Work'})}</p>
		<article>
			{$t("home.work", {default: 'I specialize in utilizing NextJS and React Native to create high-performance and user-friendly applications. I also have some experience in backend technologies such as NodeJS, MongoDB, and Postgres, and have experience integrating Web3 technologies such as wallet connections and contract calls."'})}
		</article>
		<a
			href="/skills"
			class="button hover shadow growing"
			style="position: relative;"
			class:dark-bg={$theme === 'dark-mode'}
			class:light-bg={$theme === 'light-mode'}
		>
			{$t('common.see_more', { default: 'See more' })} 🔥
			<img
				class="bouncy"
				src="icon_hand.png"
				style="height: 30px; width: 30px; position: absolute; bottom: -20px; right: 0;"
				alt="Hand Icon"
			/>
		</a>
	</div>
	<div class="section" style="margin-top: 2em;">
		<p>Bio</p>
		<article>
			<div class="list">
				<span>2020</span>
				{$t('home.2019', {default: ''})}
			</div>
			<div class="list">
				<span>2020</span>
				{$t('home.2020', {default: ''})}
			</div>
			<div class="list">
				<span>2021</span>
				{$t('home.2021', {default: ''})}
			</div>
			<div class="list">
				<span>2022</span>
				{$t('home.2022', {default: ''})}
			</div>
			<div class="list">
				<span>Now</span>
				{$t('home.Now', {default: ''})}
			</div>
		</article>
	</div>
	<div class="section" style="margin-top: 2em;">
		<p>{$t('home.like', {default: 'I'})} ❤️</p>
		<article style="text-align: center;">
			{$t('home.like2', {default: 'Coding 💻, Learning 🧠, Philosophy 📚, Kickboxing 🥋'})}
		</article>
	</div>
	<div class="section" style="margin-top: 2em;">
		<p>{$t("home.on_the_web", {default: 'On the Web'})}</p>
		<div style="display: flex; flex-direction: column">
			{#each my_links as link}
				<div style="margin-bottom: .5em; display:flex; align-items: center">
					<Icon src={link.icon} color={$theme === 'dark-mode' ? 'white' : 'black'} />
					<a
						href={link.url}
						style="text-decoration: underline; margin-left: .5em;"
						target="_blank"
						class:link-night={$theme === 'light-mode'}
						class:link-light={$theme === 'dark-mode'}
					>
						{link.name}
					</a>
				</div>
			{/each}
			<div style="margin-bottom: .5em; display:flex; align-items: center">
				<Icon src={IoMailSharp} color={$theme === 'dark-mode' ? 'white' : 'black'} />
				<a
					target="_blank"
					href="mailto:ruizReptil.avi@gmail.com"
					style="text-decoration: underline; margin-left: .5em;"
					class:link-night={$theme === 'light-mode'}
					class:link-light={$theme === 'dark-mode'}
				>
					{$t('home.my_mail', {default: 'My mail'})}
				</a>
			</div>
		</div>
	</div>
</ContentWrapper>
