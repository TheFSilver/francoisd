// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwind = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss");

const postcssPlugins = [tailwind()];

if (process.env.NODE_ENV === "production")
  postcssPlugins.push(purgecss(require("./purgecss.config.js")));

module.exports = {
  siteName: "François D.",
  transformers: {
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link",
      plugins: [
        // ...global plugins
      ]
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins
      }
    }
  },
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
      // these options are optional, as they are copies of the default values...
      options: {
        tailwindConfig: "./tailwind.config.js",
        presetEnvConfig: {},
        shouldImport: false,
        shouldTimeTravel: false
      }
    },
    {
      use: "gridsome-source-google-sheets-v2",
      options: {
        apiKey: process.env.GOOGLE_API_KEY,
        spreadsheets: [
          {
            spreadsheetId: process.env.SPREADSHEET_ID,
            sheets: [
              {
                sheetName: process.env.SHEET_NAME, // Example: "Sheet1"
                collectionName: process.env.COLLECTION_NAME // Example: "Users" (Must be unique)
              }
            ]
          }
        ]
      }
    }
  ],
  siteUrl: "https://francoisd.fr",
  templates: {
    leads: [
      {
        path: node => {
          return "/Workshop-x-Humind-School/" + node.submissionId;
        },
        component: "./src/templates/leads.vue"
      }
    ]
  }
};
