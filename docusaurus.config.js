/** @type {import('@docusaurus/types').DocusaurusConfig} */
const path = require('path')

module.exports = {
  title: 'Concrete',
  tagline: 'Concrete design-system documentation',
  url: 'https://habx.github.io/concrete-docs',
  baseUrl: '/concrete-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'habx',
  projectName: 'concrete-docs',
  themeConfig: {
    navbar: {
      title: 'Concrete',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
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
  plugins: [path.resolve(__dirname, './plugins/figma')],
}
