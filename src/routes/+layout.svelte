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

	<meta name="keywords" content="Reptil Ruiz, web developer, mobile developer, frontend developer, react native, nextjs, nodejs, react, javascript, typescript" />
	<meta name="author" content="Reptil Ruiz" />
	<meta name="robots" content="index, follow" />
	<meta name="googlebot" content="index, follow" />
	<meta name="google" content="nositelinkssearchbox" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />

	<meta property="og:image" content="https://res.cloudinary.com/dpc15/image/upload/v1677558025/DALL_E_2023-02-27_22.19.58_-_Digital_art_of_a_brain_that_is_programming_it_s_made_of_lines_of_code_and_looks_very_techy_and_cyberpunk_ysigrz.png" />
	<meta property="og:image:secure_url" content="https://res.cloudinary.com/dpc15/image/upload/v1677558025/DALL_E_2023-02-27_22.19.58_-_Digital_art_of_a_brain_that_is_programming_it_s_made_of_lines_of_code_and_looks_very_techy_and_cyberpunk_ysigrz.png" />
	<meta property="og:image:alt" content="Reptil Ruiz" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="520" />
	<meta property="og:image:height" content="520" />

	<!-- twitter card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Reptil Ruiz" />
	<meta name="twitter:description" content="{data.pageDescription}" />
	<meta name="twitter:image" content="https://res.cloudinary.com/dpc15/image/upload/v1677558025/DALL_E_2023-02-27_22.19.58_-_Digital_art_of_a_brain_that_is_programming_it_s_made_of_lines_of_code_and_looks_very_techy_and_cyberpunk_ysigrz.png" />

	<!-- facebook card -->
	<meta property="og:title" content="Reptil Ruiz" />
	<meta property="og:description" content="{data.pageDescription}" />
	<meta property="og:url" content="https://my-portfolio-mocha-ten.vercel.app/" />
	<meta property="og:site_name" content="Reptil Ruiz" />
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
