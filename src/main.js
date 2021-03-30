// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
// Import global styles

require("~/main.css");
require("~/tailwind.min.css");

import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  head.htmlAttrs = {
    lang: "fr",
    class: "overflow-x-hidden"
  };
  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
  });
  head.link.push({
    rel: "stylesheet",
    href: "https://rsms.me/inter/inter.css"
  });
}
