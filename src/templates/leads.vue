<template>
  <div
    class="antialiased font-body bg-body text-body mci-c4f7c3b940b2fda375c61f1064b5e7f6 bg-black"
  >
    <div class="">
      <section class="relative pb-20 overflow-hidden bg-black">
        <div class="absolute bottom-0 inset-x-0 h-full"></div>
        <div
          class="absolute bottom-0 inset-x-0 h-3/5 w-2full -ml-64 -mb-12 transform -rotate-6"
        ></div>
        <nav class="relative">
          <div class="flex py-8 px-4 lg:px-8 justify-between items-center">
            <button class=""></button>
            <div
              class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
            >
              <a class="text-2xl text-white font-bold" href="#">François D.</a>
            </div>
            <div class="hidden lg:block">
              <a
                class="inline-block px-12 py-4 text-white font-bold border border-gray-200 hover:border-white rounded-full"
                href="https://bit.ly/Scraper-Et-Cleaner-Le-Guide"
                >Suis le guide, {{ $page.leads.prenom }}!</a
              >
            </div>
          </div>
        </nav>
        <div class="relative container px-4 pt-12 mx-auto md:pt-10">
          <div
            class="hidden 2xl:block absolute bottom-0 w-3/5 mb-40 h-2 border-b border-white"
          ></div>
          <div class="relative flex flex-wrap -mx-4">
            <div
              class="w-full lg:w-1/2 2xl:w-2/5 px-4 mb-12 mb:mb-0 flex flex-col"
            >
              <span
                class="text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 to-orange-600 lg:text-left text-center"
                >Maitrise enfin tes données commerciales!</span
              >
              <h2
                class="max-w-lg lg:max-w-md 2xl:max-w-none mt-7 mb-12 mb:mb-20 lg:text-7xl 2xl:text-9xl text-white font-bold font-heading text-center lg:text-left mx-auto lg:mx-0 md:text-6xl text-3xl"
              >
                {{ $page.leads.prenom }}, automatise ta data !
              </h2>
              <p
                class="mb-12 lg:mb-24 text-lg text-white opacity-90 text-center lg:text-left"
              >
                Découvre rapidement comment scraper et nettoyer tes données
                commerciales une bonne fois pour toutes.
              </p>
              <div
                class="flex flex-wrap items-center justify-center lg:justify-start"
              >
                <a
                  class="inline-block px-12 py-5 text-lg text-white font-bold custom_cta_button rounded-full transition duration-200 lg:mr-14"
                  href="https://bit.ly/Scraper-Et-Cleaner-Le-Guide"
                  >Suis le guide, {{ $page.leads.prenom }}!</a
                >
              </div>
            </div>
            <div
              v-if="$page.leads.videoUrl"
              class="w-full lg:w-1/2 2xl:w-3/5 px-4"
            >
              <div
                class="h-5/6 flex flex-wrap content-center mt-8 lg:mt-0 xl:mt-0"
              >
                <video
                  controls
                  preload="auto"
                  class="w-full object-contain my-auto flex-auto mb-8 rounded"
                >
                  <source :src="$page.leads.videoUrl" type="video/mp4" />
                </video>
              </div>
            </div>
            <div class="w-full lg:w-1/2 2xl:w-3/5 px-4" v-else>
              <g-image
                class="w-full object-contain h-full hidden lg:block"
                src="~/assets/images/FD-pointer-1000x1000.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section
        class="pt-20 overflow-hidden bg-black pb-20 md:block lg:block xl:block 2xl:block hidden"
      >
        <div class="container px-4 mx-auto">
          <div class="flex flex-wrap items-center -mx-4">
            <div class="w-full px-4">
              <div class="flex justify-center items-center">
                <div class="sm:px-6 mr-3 rounded-lg logos_bg px-2 py-6 md:py-8">
                  <g-image
                    class="mx-auto h-12 md:h-16"
                    src="https://theme.zdassets.com/theme_assets/9331069/1a91b2a9ce53db90ed71f9a40e265e64e8b84407.png"
                    alt=""
                  />
                </div>

                <div class="flex flex-col mr-3">
                  <div
                    class="inline-block ml-auto py-12 px-4 sm:px-8 mb-3 rounded-lg logos_bg"
                  >
                    <g-image
                      class="h-14 mx-auto"
                      src="https://cdn-icons-png.flaticon.com/512/2965/2965327.png"
                      alt=""
                    />
                  </div>

                  <div class="py-16 px-2 sm:px-12 rounded-lg logos_bg">
                    <g-image
                      class="mx-auto h-8"
                      src="https://images.squarespace-cdn.com/content/v1/5acc7a9f2487fdb8c2b76b94/1556546489414-YWJ6TJ036CR49L0597ZJ/humindschool222.png?format=1500w"
                      alt=""
                    />
                  </div>
                </div>
                <div class="-mb-32">
                  <div class="py-8 parabola mb-3 rounded-lg logos_bg">
                    <g-image
                      class="h-6 mx-auto"
                      src="https://lever-client-logos.s3-us-west-2.amazonaws.com/7e588d63-4cc2-41e6-a501-9d6c477ee8bc-1596570412492.png"
                      alt=""
                    />
                  </div>

                  <div
                    class="inline-block py-14 px-2 sm:px-8 rounded-lg logos_bg"
                  >
                    <g-image
                      class="h-8 mx-auto"
                      src="https://n8n.io/_nuxt/img/n8n-logo-press.9d4dfc1.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="relative py-20 2xl:py-40 bg-black overflow-hidden">
        <g-image
          class="hidden lg:block absolute top-0 left-0 mt-144 -ml-24 w-96 h-96"
          src="~/assets/zospace-assets/lines/full-circle.svg"
          alt=""
        /><g-image
          class="hidden lg:block absolute top-0 left-0 mt-144 -ml-24 w-96 h-96"
          src="~/assets/zospace-assets/lines/circle.svg"
          alt=""
        />
        <div class="relative container px-4 mx-auto">
          <div class="max-w-2xl mb-16 md:mb-24 mx-auto text-center">
            <h2
              class="mb-7 text-white font-bold font-heading 2xl:text-6xl text-3xl md:text-4xl lg:text-5xl"
            >
              Le Guide:<br />Scraper &amp; Cleaner la data.
            </h2>
            <span
              class="text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 to-orange-600"
              >Tout ce que tu dois savoir ou presque!</span
            >
          </div>
          <div class="flex flex-wrap -m-8 mb-8 md:mb-20">
            <div class="w-full h-96 p-8">
              <g-image
                class="w-full h-full object-cover rounded md:rounded-xl lg:rounded-2xl"
                src="~/assets/images/nocode-tools.png"
                alt=""
              />
            </div>
          </div>
          <div class="max-w-xl text-center mx-auto">
            <div
              class="inline-flex pt-14 mb-14 items-center border-t border-gray-500"
            >
              <g-image
                class="mr-8 w-20 lg:w-24 h-20 lg:h-24 rounded-full"
                src="https://media-exp1.licdn.com/dms/image/C5603AQHsA0ji9fVlIg/profile-displayphoto-shrink_200_200/0/1580198395435?e=1641427200&amp;v=beta&amp;t=0FkbEKj8abV72ozbuXcm-WkzN82n_LnEmc1yf1kbIq0"
                alt=""
              />
              <div class="text-left">
                <h4 class="mb-1 text-2xl font-bold text-gray-50">
                  François Dasylva
                </h4>
                <p class="text-white">1 novembre, 8:30</p>
              </div>
            </div>
            <p class="mb-6 text-left text-xl text-gray-200">
              J'avoue avoir pris mon temps et m'être un peu amusé à créer tout
              ce petit process pour les participants du webinar!
            </p>
            <p class="mb-6 text-left text-xl text-gray-200">
              C'est l'occasion pour moi de tester en live quelques idées dont
              ces landing pages personnalisées et automatisées à 100%.
            </p>
            <p class="mb-6 text-left text-xl text-gray-200">
              Peut-être que je partagerais le process derrière tout ça...<br />Je
              dis bien peut-être mais sans plus attendre:
            </p>
            <a
              href="https://bit.ly/Scraper-Et-Cleaner-Le-Guide"
              class="inline-block px-12 py-5 text-lg text-white font-bold custom_cta_button rounded-full transition duration-200 mx-auto mt-12"
              >Suis le guide, {{ $page.leads.prenom }}!</a
            >
          </div>
        </div>
      </section>

      <section class="py-20 2xl:py-40 bg-black">
        <div class="container mx-auto px-4 mb-12 md:mb-20">
          <div class="max-w-4xl mx-auto text-center">
            <div class="flex justify-center">
              <a
                class="flex justify-center items-center w-12 h-12 rounded-full text-white bg-gray-100"
                href="https://www.linkedin.com/in/francois-dasylva/"
              >
                <g-image
                  src="~/assets/images/iconmonstr-linkedin-3.svg"
                  class="h-4 w-4"
                />
              </a>
            </div>
          </div>
        </div>
        <p
          class="text-center text-lg text-white pt-12 px-4 border-t border-gray-500"
        >
          <span>© 2021 François D. </span>
          <span class="text-gray-300">All rights reserved.</span>
        </p>
      </section>
    </div>
  </div>
</template>

<page-query>
query($path: String!) {
  leads(path: $path){
    prenom,
    thumbnailUrl,
    videoUrl,
    videoTitle
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      titleTemplate: "%s, scrape & clean la data comme un pro!",
      title: this.$page.leads.prenom,
      meta: [
        {
          description: this.$page.leads.prenom + ", moi aussi je suis malin ;)"
        },
        {
          name: "robots",
          content: "noindex"
        }
      ]
    };
  }
};
</script>
