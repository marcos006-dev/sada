export const getBaseDir = (Astro) =>
  process.env.NODE_ENV === 'development' ? '/' : Astro.url.pathname;
