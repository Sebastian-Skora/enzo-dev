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
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `enzo-dev`
      }
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
      resolve: `gatsby-plugin-netlify-cms-paths`,
      options: {
        // Path to your Netlify CMS config file
        cmsConfig: `/static/admin/config.yml`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          `gatsby-plugin-netlify-cms-paths`,
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
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Defaults used for gatsbyImageData and StaticImage
        defaults: {},
        // Set to false to allow builds to continue on image errors
        failOnError: true,
        // deprecated options and their defaults:
        base64Width: 20,
        forceBase64Format: `jpg`, // valid formats: png,jpg,webp
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        defaultQuality: 50,

      }
    },
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        // The option defaults to true
        checkSupportedExtensions: false,
      }
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets`,
        name: 'images',
      },
    },

  ],
};
