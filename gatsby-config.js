module.exports = {
  siteMetadata: {
    title: "eSwipe",
    description:
      "Firma IT ➤ Tworzenie strony internetowej ➤ Tworzenie sklepu internetowego ☆ Pozycjonowanie SEO ☆ eSwipe ☆ Tworzenie aplikacji mobilnych ☆ Projektowanie logo/wizytówek ☆ Kompleksowa usługa IT",
    author: "eSwipe",
    siteUrl: "https://www.eswipe.pl",
  },

  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-netlify",
    // `gatsby-plugin-preload-fonts`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.eswipe.pl",
        sitemap: "https://www.eswipe.pl/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     // The property ID; the tracking code won't be generated without it
    //     trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
    //     // Defines where to place the tracking script - `true` in the head and `false` in the body
    //     head: false,
    //     // Setting this parameter is optional
    //     anonymize: true,
    //     // Setting this parameter is also optional
    //     respectDNT: true,
    //     // Avoids sending pageview hits from custom paths
    //     exclude: ["/preview/**", "/do-not-track/me/too/"],
    //     // Delays sending pageview hits on route update (in milliseconds)
    //     pageTransitionDelay: 0,
    //     // Enables Google Optimize using your container Id
    //     optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
    //     // Enables Google Optimize Experiment ID
    //     experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
    //     // Set Variation ID. 0 for original 1,2,3....
    //     variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
    //     // Defers execution of google analytics script after page load
    //     defer: false,
    //     // Any additional optional fields
    //     sampleRate: 5,
    //     siteSpeedSampleRate: 10,
    //     cookieDomain: "example.com",
    //     // defaults to false
    //     enableWebVitalsTracking: true,
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-google-gtag`,
    //   options: {
    //     // You can add multiple tracking ids and a pageview event will be fired for all of them.
    //     trackingIds: [
    //       "G-P21TX35DRV", // Google Analytics / GA
    //     ],
    //     // This object gets passed directly to the gtag config command
    //     // This config will be shared across all trackingIds
    //     gtagConfig: {
    //       optimize_id: "OPT_CONTAINER_ID",
    //       anonymize_ip: true,
    //       cookie_expires: 0,
    //     },
    //     // This object is used for configuration specific to this plugin
    //     pluginConfig: {
    //       // Puts tracking script in the head instead of the body
    //       head: false,
    //       // Setting this parameter is also optional
    //       respectDNT: true,
    //       // Avoids sending pageview hits from custom paths
    //       exclude: ["/preview/**", "/do-not-track/me/too/"],
    //     },
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-gtag`,
    //   options: {
    //     // your google analytics tracking id
    //     trackingId: `UA-219520182-1`,
    //     // Puts tracking script in the head instead of the body
    //     head: false,
    //     // enable ip anonymization
    //     anonymize: true,
    //   },
    // },

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
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
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
        cmsConfig: `/static/admin/config.yml`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          `gatsby-plugin-netlify-cms-paths`,
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
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
      },
    },
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        // The option defaults to true
        checkSupportedExtensions: false,
      },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/assets`,
        name: "images",
      },
    },
  ],
};
