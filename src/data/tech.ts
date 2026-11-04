import * as si from 'simple-icons';

/**
 * Tech stack shown in the "Stack" section.
 * - `icon`: a Simple Icons export name (brand logo, CC0) — see https://simpleicons.org
 * - `mono`: 1–2 letters shown as a monogram when no brand icon exists
 * - `glyph`: a built-in line icon (api, webhook)
 * - `color`: brand colour used for the glow (defaults to the Simple Icons colour)
 * To add a tool: add one line to the right group.
 */
type Tool = { name: string; icon?: keyof typeof si; mono?: string; glyph?: 'api' | 'webhook'; color?: string };

export const techGroups: { id: string; title: { fr: string; en: string }; tools: Tool[] }[] = [
  {
    id: 'lang',
    title: { fr: 'Langages & frameworks', en: 'Languages & frameworks' },
    tools: [
      { name: 'PHP', icon: 'siPhp' },
      { name: 'JavaScript', icon: 'siJavascript' },
      { name: 'React', icon: 'siReact' },
      { name: 'Next.js', icon: 'siNextdotjs' },
      { name: 'AngularJS', icon: 'siAngular', color: '#DD0031' },
      { name: 'HTML5', icon: 'siHtml5' },
      { name: 'CSS3', icon: 'siCss', color: '#1572B6' },
      { name: 'MySQL', icon: 'siMysql' },
      { name: 'Spring Boot', icon: 'siSpringboot' },
    ],
  },
  {
    id: 'cms',
    title: { fr: 'CMS & e-commerce', en: 'CMS & e-commerce' },
    tools: [
      { name: 'WordPress', icon: 'siWordpress' },
      { name: 'WooCommerce', icon: 'siWoocommerce' },
      { name: 'Elementor', icon: 'siElementor' },
      { name: 'Polylang', mono: 'Pl', color: '#2D9CDB' },
      { name: 'Shopify', icon: 'siShopify' },
    ],
  },
  {
    id: 'api',
    title: { fr: 'Intégrations & automatisation', en: 'Integrations & automation' },
    tools: [
      { name: 'HubSpot', icon: 'siHubspot' },
      { name: 'REST API', glyph: 'api', color: '#0EA5E9' },
      { name: 'Webhooks', glyph: 'webhook', color: '#C73A63' },
      { name: 'JSON-LD', icon: 'siJson', color: '#F5A623' },
    ],
  },
  {
    id: 'devops',
    title: { fr: 'DevOps & hébergement', en: 'DevOps & hosting' },
    tools: [
      { name: 'Git', icon: 'siGit' },
      { name: 'GitHub', icon: 'siGithub' },
      { name: 'GitLab', icon: 'siGitlab' },
      { name: 'Cloudways', icon: 'siCloudways' },
      { name: 'Azure', mono: 'Az', color: '#0078D4' },
      { name: 'SSL', icon: 'siLetsencrypt', color: '#2C9C3F' },
    ],
  },
  {
    id: 'seo',
    title: { fr: 'SEO & analytics', en: 'SEO & analytics' },
    tools: [
      { name: 'GA4', icon: 'siGoogleanalytics' },
      { name: 'Tag Manager', icon: 'siGoogletagmanager' },
      { name: 'Search Console', icon: 'siGooglesearchconsole' },
      { name: 'Google Ads', icon: 'siGoogleads' },
      { name: 'Clarity', mono: 'Cl', color: '#5B5FC7' },
    ],
  },
  {
    id: 'design',
    title: { fr: 'Design & vidéo', en: 'Design & video' },
    tools: [
      { name: 'Photoshop', mono: 'Ps', color: '#31A8FF' },
      { name: 'Illustrator', mono: 'Ai', color: '#FF9A00' },
      { name: 'Premiere Pro', mono: 'Pr', color: '#9999FF' },
      { name: 'After Effects', mono: 'Ae', color: '#9999FF' },
    ],
  },
];

const luminance = (hex: string) => {
  const n = parseInt(hex.replace('#', ''), 16);
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

export const resolveTool = (t: Tool) => {
  const icon = t.icon ? (si[t.icon] as { path: string; hex: string } | undefined) : undefined;
  const color = t.color ?? (icon ? `#${icon.hex}` : '#7FB2E5');
  // very dark brand colours (Next.js, GitHub…) follow the text colour so they stay visible in dark mode
  const dark = luminance(color) < 0.04;
  return { ...t, path: icon?.path, color, glow: dark ? '#7FB2E5' : color, adaptive: dark };
};
