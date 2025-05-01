<script>
	import './header.css';
	import { theme, toggleTheme } from '$lib/stores/theme';
	import { toggleLanguage, language } from '$lib/stores/language';
	import { t } from '$lib/locales/translations';
	import { page } from '$app/stores';
	import { fade, fly } from 'svelte/transition';

	const links = [
		{ name: 'home', href: '/' },
		{ name: 'skills', href: '/skills' }
	];

	let showMenu = false;

	let clientWidth = 0;
	$: hide = clientWidth <= 768;
</script>

<div class="header" bind:clientWidth>
	<div>
		<button
			on:click={() => (showMenu = !showMenu)}
			class:dark-hamburger={$theme === 'dark-mode'}
			class:light-hamburger={$theme === 'light-mode'}
		>
			{#if showMenu}
				✕
			{:else}
				☰
			{/if}
		</button>
		{#if showMenu || !hide}
			<nav class:show-menu={showMenu} in:fade={{ duration: 500 }} out:fade={{ duration: 500 }}>
				{#each links as link, i (link.href)}
					<a
						in:fly={{ x: -150, delay: i * 50 }}
						out:fly={{ y: -150, delay: i * 50 }}
						on:click={() => (showMenu = false)}
						href={link.href}
						class:active={$page.url.pathname === link.href}
					>
						{$t(`common.${link.name}`, {default: link.name.charAt(0).toUpperCase() + link.name.slice(1)})}
					</a>
				{/each}
			</nav>
		{/if}
		<div style="width: auto; display: flex;justify-content: flex-end; align-items: center; padding: 0">
			<button 
				class="header-button"
				on:click={() => toggleLanguage(window.location.pathname)} 
				style="color: white; margin-right: 10px"
				class:dark-language={$theme === 'dark-mode'}
				class:light-language={$theme === 'light-mode'}
			>
				{#if $language === 'es'}
					🇲🇽
				{:else}
					🇺🇸
				{/if}
			</button>
			<button
				on:click={toggleTheme}
				style="color: white"
				class:dark-bg={$theme === 'dark-mode'}
				class:light-bg={$theme === 'light-mode'}
			>
				{#if $theme === 'dark-mode'}
					☀
				{:else}
					☾
				{/if}
			</button>
		</div>
	</div>
</div>
