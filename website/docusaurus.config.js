module.exports = {
  title: 'post-programming',
  url: 'https://post-programming.com',
  baseUrl: '/',
  favicon: 'img/icon.png',
  organizationName: 'post-programming', // Usually your GitHub org/user name.
  projectName: 'post-programming', // Usually your repo name.
  plugins: [
  ],
  themeConfig: {
    colorMode: {
      disableSwitch: true,
    },
    navbar: {
      title: 'post-programming',
      logo: {
        alt: 'post-programming',
        src: 'img/logo.svg'
      },
      items: [
        {
          href: 'https://github.com/post-programming/post-programming',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Art of NewsReeL',
              href: 'https://github.com/setscript/Art-of-NewsReeL'
            }
          ]
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/post-programming'
            },
            {
              label: 'GitHub',
              href: 'https://github.com/setscript/post-programming'
            }
          ]
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/zuxoszx'
            }
          ]
        }
      ],
      copyright: ` ${new Date().getFullYear()} post-programming, Inc.`
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
}
