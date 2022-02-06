/** @type {import('@docusaurus/types').DocusaurusConfig} */
const path = require('path')

module.exports = {
  title: 'Concrete',
  tagline: 'Concrete design-system documentation',
  url: 'https://concrete.habx.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'habx',
  projectName: 'concrete-docs',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  themeConfig: {
    navbar: {
      logo: {
        src: 'img/logo.svg',
        srcDark: 'img/logo-white.svg',
        alt: 'Concrete',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'components/',
          activeBasePath: 'components',
          label: 'Components',
          position: 'left',
        },
        {
          to: 'table/',
          activeBasePath: 'table',
          label: 'Table',
          position: 'left',
        },
        {
          to: 'guidelines/',
          activeBasePath: 'guidelines',
          label: 'Guidelines',
          position: 'left',
        },
        {
          label: 'Dribble',
          href: 'https://dribbble.com/habx',
          position: 'right',
        },
        {
          href: 'https://github.com/habx/ui-core',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/habx/ui-core',
            },
            {
              label: 'Dribble',
              href: 'https://dribbble.com/habx',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Concrete, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/habx/concrete-docs/edit/dev/',
        },
      },
    ],
  ],
  plugins: [
    path.resolve(__dirname, './plugins/figma'),
    path.resolve(__dirname, './plugins/cloudinary'),
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'guidelines',
        path: 'guidelines',
        routeBasePath: 'guidelines',
        sidebarPath: require.resolve('./sidebarsGuidelines.js'),
        // ... other options
      },
    ],
  ],
}
