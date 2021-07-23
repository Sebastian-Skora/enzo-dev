module.exports = {
  siteMetadata: {
    title: "enzo-dev",
  },

  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-sass",
    "gatsby-plugin-image",

    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
    "gatsby-plugin-react-helmet",
    // "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-cookie-though`,
      options: {
        config: {
          policies: [
            {
              id: "essential",
              label: "Niezbędne pliki cookies",
              description:
                "Aby strona działała poprawnie, musimy zapisać niektóre techniczne pliki cookies.",
              category: "essential",
            },
            {
              id: "functional",
              label: "Funkcjonalne pliki cookies",
              category: "functional",
              description:
                "Musimy zapisać kilka podstawowych preferencji, np. język.",
            },
            {
              id: "statistics",
              label: "Statystyki",
              category: "statistics",
              description:
                "Aby strona działała poprawnie, musimy zapisać niektóre techniczne pliki cookies.",
            },
            {
              id: "social",
              label: "Social Media Cookies",
              category: "social",
              description:
                "Aby strona działała poprawnie, musimy zapisać niektóre pliki cookies społecznościowe.",
            },
          ],
          permissionLabels: {
            accept: "Akceptuję",
            acceptAll: "Akceptuję wszystkie",
            decline: "Nie akceptuję",
          },
          cookiePreferenceKey: "cookie-preferences",
          header: {
            title: "Pliki cookies?",
            subTitle: "Pewnie jesteś zmęczony tym komunikatem na stronach...",
            description:
              "Każdy chce pokazać się z jak najlepszej strony – my też. Dlatego używamy plików cookies, aby zagwarantować Ci lepsze wrażenia.",
          },
          cookiePolicy: {
            url: "https://www.gov.pl/web/gov/polityka-dotyczaca-cookies",
            label: "Przeczytaj więcej o cookies",
          },
        },
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Footnotes mode (default: true)
        footnotes: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      }
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/imgs/logo.png",
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/src/pages/aktualnosci`,

      },
      __key: "images",

    },

  ],
};
