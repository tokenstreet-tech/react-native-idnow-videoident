/*
AUTOGENERATED - DON'T EDIT
Your edits in this file will be overwritten in the next build!
Modify the docusaurus.config.js file at your site's root instead.
*/
export default {
    title: 'React Native IDnow VideoIdent',
    tagline: 'React Native IDnow VideoIdent bindings for the iOS and Android SDK.',
    url: 'https://tokenstreet-tech.github.io',
    baseUrl: '/react-native-idnow-videoident/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'tokenstreet-tech',
    projectName: 'react-native-idnow-videoident',
    deploymentBranch: 'gh-pages',
    trailingSlash: false,
    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: '/Users/danielreichhart/workspace/react-native-idnow-videoident/website/sidebars.js',
                    editUrl: 'https://github.com/tokenstreet-tech/react-native-idnow-videoident/tree/main/website/',
                },
                blog: {
                    showReadingTime: true,
                    editUrl: 'https://github.com/tokenstreet-tech/react-native-idnow-videoident/tree/main/website/',
                },
                theme: {
                    customCss:
                        '/Users/danielreichhart/workspace/react-native-idnow-videoident/website/src/css/custom.css',
                },
            },
        ],
    ],
    themeConfig: {
        navbar: {
            title: 'React Native IDnow VideoIdent',
            logo: {
                alt: 'tokenstreet Logo',
                src: 'img/logo.svg',
                srcDark: 'img/logoDark.svg',
            },
            items: [
                {
                    type: 'doc',
                    docId: 'api/index',
                    position: 'left',
                    label: 'Docs',
                },
                {
                    href: 'https://github.com/tokenstreet-tech/react-native-idnow-videoident',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
            hideOnScroll: false,
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'API',
                            to: '/docs/api',
                        },
                    ],
                },
                {
                    title: 'Company',
                    items: [
                        {
                            label: 'Website',
                            href: 'https://en.tokenstreet.com/',
                        },
                        {
                            label: 'Career',
                            href: 'https://en.tokenstreet.com/career',
                        },
                        {
                            label: 'LinkedIn',
                            href: 'https://www.linkedin.com/company/tokenstreet-com/',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Medium',
                            href: 'https://medium.com/tokenstreet-tech',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/tokenstreet-tech/react-native-idnow-videoident',
                        },
                    ],
                },
            ],
            copyright: 'Copyright © 2022 tokenstreet GmbH',
        },
        prism: {
            theme: {
                plain: {
                    color: '#393A34',
                    backgroundColor: '#f6f8fa',
                },
                styles: [
                    {
                        types: ['comment', 'prolog', 'doctype', 'cdata'],
                        style: {
                            color: '#999988',
                            fontStyle: 'italic',
                        },
                    },
                    {
                        types: ['namespace'],
                        style: {
                            opacity: 0.7,
                        },
                    },
                    {
                        types: ['string', 'attr-value'],
                        style: {
                            color: '#e3116c',
                        },
                    },
                    {
                        types: ['punctuation', 'operator'],
                        style: {
                            color: '#393A34',
                        },
                    },
                    {
                        types: [
                            'entity',
                            'url',
                            'symbol',
                            'number',
                            'boolean',
                            'variable',
                            'constant',
                            'property',
                            'regex',
                            'inserted',
                        ],
                        style: {
                            color: '#36acaa',
                        },
                    },
                    {
                        types: ['atrule', 'keyword', 'attr-name', 'selector'],
                        style: {
                            color: '#00a4db',
                        },
                    },
                    {
                        types: ['function', 'deleted', 'tag'],
                        style: {
                            color: '#d73a49',
                        },
                    },
                    {
                        types: ['function-variable'],
                        style: {
                            color: '#6f42c1',
                        },
                    },
                    {
                        types: ['tag', 'selector', 'keyword'],
                        style: {
                            color: '#00009f',
                        },
                    },
                ],
            },
            darkTheme: {
                plain: {
                    color: '#F8F8F2',
                    backgroundColor: '#282A36',
                },
                styles: [
                    {
                        types: ['prolog', 'constant', 'builtin'],
                        style: {
                            color: 'rgb(189, 147, 249)',
                        },
                    },
                    {
                        types: ['inserted', 'function'],
                        style: {
                            color: 'rgb(80, 250, 123)',
                        },
                    },
                    {
                        types: ['deleted'],
                        style: {
                            color: 'rgb(255, 85, 85)',
                        },
                    },
                    {
                        types: ['changed'],
                        style: {
                            color: 'rgb(255, 184, 108)',
                        },
                    },
                    {
                        types: ['punctuation', 'symbol'],
                        style: {
                            color: 'rgb(248, 248, 242)',
                        },
                    },
                    {
                        types: ['string', 'char', 'tag', 'selector'],
                        style: {
                            color: 'rgb(255, 121, 198)',
                        },
                    },
                    {
                        types: ['keyword', 'variable'],
                        style: {
                            color: 'rgb(189, 147, 249)',
                            fontStyle: 'italic',
                        },
                    },
                    {
                        types: ['comment'],
                        style: {
                            color: 'rgb(98, 114, 164)',
                        },
                    },
                    {
                        types: ['attr-name'],
                        style: {
                            color: 'rgb(241, 250, 140)',
                        },
                    },
                ],
            },
            additionalLanguages: [],
        },
        colorMode: {
            defaultMode: 'light',
            disableSwitch: false,
            respectPrefersColorScheme: false,
        },
        docs: {
            versionPersistence: 'localStorage',
        },
        metadata: [],
        hideableSidebar: false,
        autoCollapseSidebarCategories: false,
        tableOfContents: {
            minHeadingLevel: 2,
            maxHeadingLevel: 3,
        },
    },
    plugins: [
        [
            'docusaurus-plugin-typedoc',
            {
                entryPoints: ['../src/index.ts'],
                tsconfig: '../tsconfig.json',
            },
        ],
    ],
    baseUrlIssueBanner: true,
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
        localeConfigs: {},
    },
    onDuplicateRoutes: 'warn',
    staticDirectories: ['static'],
    customFields: {},
    themes: [],
    titleDelimiter: '|',
    noIndex: false,
};
