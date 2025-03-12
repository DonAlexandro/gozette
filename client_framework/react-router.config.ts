import type { Config } from '@react-router/dev/config';

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false, // Disable SSR because it's causing errors when using it with libraries like

  // Prerendering is good only with routes and pages that use libraries which support pre-rendering and don't cause any errors
  // Test carefully each route and remove it once encouter rendering errors
  // async prerender() {
  //   return ['/about'];
  // },
} satisfies Config;
