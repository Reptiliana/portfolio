<script>
	import { fly } from "svelte/transition";
	import { theme } from '$lib/stores/theme';
	import { t } from '$lib/locales/translations.js';
</script>

<div
	in:fly={{ y: -150, delay: 200 }}
	out:fly={{ y: -150, delay: 0 }}
	class="bullet-flying shadow"
	class:dark-bg={$theme === 'dark-mode'}
	class:light-bg={$theme === 'light-mode'}
>
	<p>{$t('home.bullet', { default: "Hi! I'm a developer based in Mexico City"})}</p>
</div>
