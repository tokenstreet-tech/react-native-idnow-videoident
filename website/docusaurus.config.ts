/* eslint-disable sort-keys */
import type { Options, ThemeConfig } from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes } from 'prism-react-renderer';

export default {
    title: 'React Native IDnow VideoIdent',
    tagline: 'React Native IDnow VideoIdent bindings for the iOS and Android SDK.',
    url: 'https://tokenstreet-tech.github.io',
    baseUrl: '/react-native-idnow-videoident/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'tokenstreet-tech', // Usually your GitHub org/user name.
    projectName: 'react-native-idnow-videoident', // Usually your repo name.
    deploymentBranch: 'gh-pages',
    trailingSlash: false,
    presets: [
        [
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/tokenstreet-tech/react-native-idnow-videoident/tree/main/website/',
                },
                blog: {
                    showReadingTime: true,
                    editUrl:
                        'https://github.com/tokenstreet-tech/react-native-idnow-videoident/tree/main/website/blog/',
                },
                theme: { customCss: require.resolve('./src/css/custom.css') },
                googleAnalytics: {
                    trackingID: 'UA-227265647-1',
                },
                gtag: {
                    trackingID: 'UA-227265647-1',
                },
            } satisfies Options,
        ],
    ],

    themeConfig: {
        navbar: {
            title: 'React Native IDnow VideoIdent',
            logo: { alt: 'tokenstreet Logo', src: 'img/logo.svg', srcDark: 'img/logoDark.svg' },
            items: [
                { type: 'doc', docId: 'getting-started', position: 'left', label: 'Docs' },
                { to: '/blog', label: 'Blog', position: 'left' },
                {
                    href: 'https://github.com/tokenstreet-tech/react-native-idnow-videoident',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        { label: 'Getting started', to: '/docs/getting-started' },
                        { label: 'API', to: '/docs/api/modules' },
                        { label: 'Contributing', to: '/docs/contributing' },
                    ],
                },
                {
                    title: 'Company',
                    items: [
                        { label: 'Website', href: 'https://en.tokenstreet.com/' },
                        { label: 'Career', href: 'https://en.tokenstreet.com/career' },
                        { label: 'LinkedIn', href: 'https://www.linkedin.com/company/tokenstreet-com/' },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        { label: 'Blog', to: '/blog' },
                        { label: 'Medium', href: 'https://medium.com/tokenstreet-tech' },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/tokenstreet-tech/react-native-idnow-videoident',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} tokenstreet GmbH`,
        },
        prism: { theme: themes.github, darkTheme: themes.dracula },
    } satisfies ThemeConfig,
    plugins: [
        [
            'docusaurus-plugin-typedoc',
            // Plugin / TypeDoc options
            {
                entryPoints: ['../src/index.ts'],
                tsconfig: '../tsconfig.json',
                sidebar: {
                    position: 2,
                },
                entryDocument: 0,
            },
        ],
    ],
} satisfies Config;
