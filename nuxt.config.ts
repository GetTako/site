export default defineNuxtConfig({
  extends: ['docus'],
  modules: ['@nuxt/ui'],
  css: ['@fontsource/inter', '@fontsource/plus-jakarta-sans', '~/assets/fonts.css'],
  ignore: ['tako', 'tako/**/*', 'content/.git', 'content/.git/**/*'],
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      meta: [
        { name: 'go-import', content: 'gettako.dev/tako git https://github.com/gettako/tako' },
        {
          name: 'go-source',
          content:
            'gettako.dev/tako https://github.com/gettako/tako https://github.com/gettako/tako/tree/main{/dir} https://github.com/gettako/tako/blob/main{/dir}/{file}#L{line}',
        },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  appConfig: {
    github: {
      url: 'https://github.com/gettako/docs',
      branch: 'main',
      rootDir: '',
    },
  },
  mdc: {
    highlight: {
      theme: {
        light: 'github-light',
        dark: 'github-dark',
      },
      langs: ['go', 'yaml'],
    },
  },
  vite: {
    optimizeDeps: {
      include: ['@vue/devtools-core', '@vue/devtools-kit'],
    },
  },
});
