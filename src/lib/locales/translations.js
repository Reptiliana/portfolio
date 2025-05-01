import i18n from 'sveltekit-i18n';
import lang from './lang.json';

/** @type {import('sveltekit-i18n').Config} */
export const config = {
  translations: {
    en: { lang },
    es: { lang },
  },
  loaders: [
    {
      locale: 'en',
      key: 'home',
      loader: async () => (await import('./en/home.json')).default,
    },
    {
      locale: 'es',
      key: 'home',
      loader: async () => (await import('./es/home.json')).default,
    },
    {
      locale: 'en',
      key: 'common',
      loader: async () => (await import('./en/common.json')).default,
    },
    {
      locale: 'es',
      key: 'common',
      loader: async () => (await import('./es/common.json')).default,
    },{
      locale: 'en',
      key: 'work',
      loader: async () => (await import('./en/work.json')).default,
    },
    {
      locale: 'es',
      key: 'work',
      loader: async () => (await import('./es/work.json')).default,
    },
    {
      locale: 'en',
      key: 'skills',
      loader: async () => (await import('./en/skills.json')).default
    },
    {
      locale: 'es',
      key: 'skills',
      loader: async () => (await import('./es/skills.json')).default
    }
  ],
};

export const { t, loading, locales, locale, loadTranslations } = new i18n(config);

loading.subscribe(($loading) => $loading && console.log('Loading translations...'));