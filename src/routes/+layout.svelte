<script>
// @ts-nocheck

	import '../app.css';
	import Header from '$lib/components/Header/Header.svelte';
	import Footer from '$lib/components/Footer/Footer.svelte';
	import { locale, loadTranslations } from '$lib/locales/translations.js';
	import { onMount } from 'svelte';
	import { setAppTheme, theme } from '$lib/stores/theme';
	onMount(async () => {
		const { pathname } = window.location;

		if(!localStorage.language) {
			localStorage.setItem('language', 'en');
		}

		if(!localStorage.theme) {
			localStorage.setItem('theme', 'light-mode');
			theme.set('light-mode');
			setAppTheme('light-mode');
		}

		const defaultLocale = localStorage.language || 'en';
		const initLocale = locale.get() || defaultLocale;
		await loadTranslations(initLocale, pathname);
		return {};
	});

	export let data;
</script>

<svelte:head>
	<title>{data.pageTitle}</title>
	<meta name="description" content="{data.pageDescription}" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="icon" type="image/x-icon" href="/favicon.ico" />

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
	<meta name="twitter:description" content="{data.pageDescription}" />
	<meta name="twitter:image" content="https://res.cloudinary.com/dgontkzbf/image/upload/v1746657964/2da52f96-cd3c-4576-ab4c-9a46fad29d2a_jcybhp.jpg" />

	<!-- facebook card -->
	<meta property="og:title" content="Reptiliana" />
	<meta property="og:description" content="{data.pageDescription}" />
	<meta property="og:url" content="https://my-portfolio-mocha-ten.vercel.app/" />
	<meta property="og:site_name" content="Reptiliana" />
	<meta property="og:type" content="website" />

	<link rel="icon" type="image/x-icon" href="/favicon.ico" />

	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
</svelte:head>

<main>
	<Header />
	<slot />
	<Footer />
</main>
