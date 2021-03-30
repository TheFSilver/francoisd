<template>
  <Layout>
    <section class="skewed-bottom-right">
      <div class="bg-gray-900 pt-12 lg:pt-20 pb-20 radius-for-skewed">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap -mx-4">
            <div
              class="w-full lg:w-1/2 px-4 mb-12 md:mb-20 lg:mb-0 flex items-center"
            >
              <div class="w-full text-center lg:text-left">
                <div class="max-w-md mx-auto lg:mx-0">
                  <h2 class="mb-3 text-4xl lg:text-5xl text-white font-bold">
                    <span class="lg:mb-10">Lancez-vous </span>
                    <span class="text-blue-400">facilement</span>
                  </h2>
                </div>
                <div class="max-w-sm mx-auto lg:mx-0">
                  <p class="mb-6 text-gray-400 leading-loose text-lg">
                    Déléguez et automatisez l'aspect technique de vos activités
                    en ligne de manière rapide et efficace.
                  </p>
                  <div>
                    <g-link
                      to="/#processus"
                      class="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose text-white font-semibold bg-gray-900 border-2 border-gray-700 hover:border-gray-600 rounded-l-xl rounded-t-xl transition duration-200"
                      >Comment?</g-link
                    ><g-link
                      to="/#contact"
                      class="inline-block w-full lg:w-auto py-2 px-6 leading-loose bg-blue-400 hover:bg-blue-600 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200"
                      >Je me lance!</g-link
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full lg:w-1/2 px-4 flex items-center justify-center">
              <div class="relative" style="z-index: 0;">
                <g-image
                  class="h-128 w-full max-w-lg object-cover rounded-3xl md:rounded-br-none"
                  src="~/me.jpg"
                  alt=""
                /><g-image
                  class="hidden md:block absolute"
                  style="top:-2rem; right: 3rem; z-index: -1;"
                  src="~/blue-up.svg"
                  alt=""
                /><g-image
                  class="hidden md:block absolute"
                  style="bottom:-2rem; right: -2rem; z-index: -1;"
                  src="~/wing-purple-down.svg"
                  alt=""
                /><g-image
                  class="hidden md:block absolute"
                  style="top:3rem; right: -3rem; z-index: -1;"
                  src="~/bullets-dark-right.svg"
                  alt=""
                /><g-image
                  class="hidden md:block absolute"
                  style="bottom:2.5rem; left: -4.5rem; z-index: -1;"
                  src="~/bullets-dark-left.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mr-for-radius">
        <svg
          class="h-8 md:h-12 lg:h-20 w-full text-gray-900"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 0 0 10"></polygon>
        </svg>
      </div>
    </section>

    <section id="services" class="py-12 md:py-32 overflow-x-hidden">
      <div class="container px-4 mx-auto">
        <div class="flex flex-wrap lg:flex-nowrap">
          <div class="relative hidden lg:block lg:w-1/2 my-12 lg:my-0">
            <g-image
              class="relative mx-auto rounded-xl w-full z-10"
              src="~/crop4.jpg"
              alt=""
            /><g-image
              class="absolute top-0 left-0 w-40 -ml-12 -mt-12"
              src="~/blob-tear.svg"
              alt=""
            /><g-image
              class="absolute bottom-0 right-0 w-40 -mr-12 -mb-12"
              src="~/blob-tear.svg"
              alt=""
            />
          </div>
          <div class="w-full lg:w-1/2">
            <div class="py-6 lg:pl-32">
              <div class="mb-4">
                <span
                  class="text-sm py-1 px-3 text-blue-600 font-semibold bg-blue-50 rounded-xl"
                  ><g-link to="/#contact">Demandez un devis!</g-link></span
                >
                <h2 class="mt-3 text-4xl lg:text-5xl font-bold font-heading">
                  Services
                </h2>
              </div>
              <div class="flex items-start py-4">
                <div class="w-8 mr-5 text-blue-500">
                  <svg
                    class="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewbox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 class="mb-2 text-xl font-semibold font-heading">
                    Data scraping
                  </h3>
                  <p class="text-blueGray-400 leading-loose">
                    G&eacute;n&eacute;ration de bases de donn&eacute;es. (pour
                    prospection, veille concurentielle, etc...)
                  </p>
                </div>
              </div>
              <div class="flex items-start py-4">
                <div class="w-8 mr-5 text-blue-500">
                  <svg
                    class="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewbox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 class="mb-2 text-xl font-semibold font-heading">
                    D&eacute;veloppement Web
                  </h3>
                  <p class="text-blueGray-400 leading-loose">
                    Cr&eacute;ation de sites et d'applications web
                    optimis&eacute;s SEO, sur mesure et responsive.
                  </p>
                </div>
              </div>
              <div class="flex items-start py-4">
                <div class="w-8 mr-5 text-blue-500">
                  <svg
                    class="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewbox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 class="mb-2 text-xl font-semibold font-heading">
                    Automatisation
                  </h3>
                  <p class="text-blueGray-400 leading-loose">
                    Elimination des t&acirc;ches manuelles et
                    r&eacute;p&eacute;titives pour vous faire gagner en
                    productivit&eacute;.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="relative w-full lg:hidden my-12">
            <g-image
              class="relative mx-auto rounded-xl w-full z-10"
              src="~/crop4.jpg"
              alt=""
            /><img
              class="absolute top-0 left-0 w-40 -ml-12 -mt-12"
              src="atis-assets/elements/blob-tear.svg"
              alt=""
            /><img
              class="absolute bottom-0 right-0 w-40 -mr-12 -mb-12"
              src="atis-assets/elements/blob-tear.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>

    <section id="processus">
      <div class="skew skew-top mr-for-radius">
        <svg
          class="h-8 md:h-12 lg:h-20 w-full text-gray-900"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 10 0 10"></polygon>
        </svg>
      </div>
      <div class="skew skew-top ml-for-radius">
        <svg
          class="h-8 md:h-12 lg:h-20 w-full text-gray-900"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 10 10 0 10 10"></polygon>
        </svg>
      </div>
      <div class="py-20 bg-gray-900 radius-for-skewed">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap items-center">
            <div class="w-full lg:w-1/2 mb-12 lg:mb-0">
              <div class="max-w-md lg:mx-auto">
                <span class="text-blue-600 font-bold"
                  >Comment travailler ensemble?</span
                >
                <h2
                  class="my-2 text-4xl lg:text-5xl font-bold font-heading text-white"
                >
                  Processus
                </h2>
                <p class="mb-6 text-gray-500 leading-loose">
                  Dans un premier temps, il suffit simplement de m'envoyer un
                  message via le
                  <g-link to="/#contact" class="font-semibold"
                    >formulaire</g-link
                  >
                  plus bas pour découvrir:
                </p>
                <ul class="text-gray-500 font-bold">
                  <li class="flex mb-4">
                    <svg
                      class="mr-2 w-6 h-6 text-blue-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span
                      >Un expert disponible et à l'écoute de vos besoins</span
                    >
                  </li>
                  <li class="flex mb-4">
                    <svg
                      class="mr-2 w-6 h-6 text-blue-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span
                      >Un service réactif et à la hauteur de vos attentes</span
                    >
                  </li>
                  <li class="flex mb-4">
                    <svg
                      class="mr-2 w-6 h-6 text-blue-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Une tarification juste et honnête</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="w-full lg:w-1/2 flex flex-wrap -mx-4">
              <div class="mb-8 lg:mb-0 w-full md:w-1/2 px-4">
                <div class="mb-8 py-6 pl-6 pr-4 shadow-md rounded bg-gray-800">
                  <span class="mb-4 inline-block p-3 rounded-lg bg-blue-800">
                    <svg
                      class="w-10 h-10 text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </span>
                  <h4 class="mb-2 text-2xl font-bold font-heading text-white">
                    1. Définition du besoin
                  </h4>
                  <p class="text-gray-500 leading-loose">
                    On échange sur votre projet lors d'une visio-conférence.
                  </p>
                </div>
                <div class="py-6 pl-6 pr-4 shadow-md rounded bg-gray-800">
                  <span class="mb-4 inline-block p-3 rounded-lg bg-blue-800">
                    <svg
                      class="w-10 h-10 text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                      ></path>
                    </svg>
                  </span>
                  <h4 class="mb-2 text-2xl font-bold font-heading text-white">
                    2. Proposition d'un devis
                  </h4>
                  <p class="text-gray-500 leading-loose">
                    Vous recevez un devis rapidement pour faire un choix
                    éclairé.
                  </p>
                </div>
              </div>
              <div class="w-full md:w-1/2 lg:mt-20 px-4">
                <div
                  class="mb-8 py-6 pl-6 pr-4 shadow-md rounded-lg bg-gray-800"
                >
                  <span class="mb-4 inline-block p-3 rounded bg-blue-800">
                    <svg
                      class="w-10 h-10 text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </span>
                  <h4 class="mb-2 text-2xl font-bold font-heading text-white">
                    3. Exécution de la prestation
                  </h4>
                  <p class="text-gray-500 leading-loose">
                    Je réalise votre projet en me tenant à votre disposition.
                  </p>
                </div>
                <div class="py-6 pl-6 pr-4 shadow-md rounded-lg bg-gray-800">
                  <span class="mb-4 inline-block p-3 rounded bg-blue-800">
                    <svg
                      class="w-10 h-10 text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                        clip-rule="evenodd"
                      ></path>
                      <path
                        d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"
                      ></path>
                    </svg>
                  </span>
                  <h4 class="mb-2 text-2xl font-bold font-heading text-white">
                    4. Paiement & livraison
                  </h4>
                  <p class="text-gray-500 leading-loose">
                    Vous recevez une facture à payer pour la livraison.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="skew skew-bottom mr-for-radius">
        <svg
          class="h-8 md:h-12 lg:h-20 w-full text-gray-900"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 0 0 10"></polygon>
        </svg>
      </div>
      <div class="skew skew-bottom ml-for-radius">
        <svg
          class="h-8 md:h-12 lg:h-20 w-full text-gray-900"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 0 10 10"></polygon>
        </svg>
      </div>
    </section>

    <section>
      <div class="skew skew-top mr-for-radius">
        <svg
          class="h-8 md:h-12 lg:h-20 w-full text-gray-100"
          viewbox="0 0 10 10"
          preserveaspectratio="none"
        >
          <polygon fill="currentColor" points="0 0 10 10 0 10"></polygon>
        </svg>
      </div>
      <div class="skew skew-top ml-for-radius">
        <svg
          class="h-8 md:h-12 lg:h-20 w-full text-gray-100"
          viewbox="0 0 10 10"
          preserveaspectratio="none"
        >
          <polygon fill="currentColor" points="0 10 10 0 10 10"></polygon>
        </svg>
      </div>
      <div class="py-20 bg-gray-100 radius-for-skewed">
        <div class="container mx-auto px-4">
          <h2
            class="mb-4 text-4xl lg:text-5xl text-gray-900 text-center font-bold font-heading"
          >
            On adore travailler ensemble
          </h2>
          <div class="flex flex-wrap items-center -mx-3 pt-4">
            <div class="w-full lg:w-1/3 px-3 mb-8 lg:mb-0">
              <ul
                class="flex flex-wrap flex-row lg:flex-col justify-center lg:justify-start space-x-6 lg:space-x-0"
              >
                <li>
                  <button
                    class="text-2xl lg:text-4xl mb-4 text-gray-400 hover:text-gray-900 font-bold focus:outline-none"
                    @click.prevent="setActive('organic')"
                    :class="{ 'text-gray-900': isActive('organic') }"
                    href="#organic"
                  >
                    Organic Therapy
                  </button>
                </li>
                <li>
                  <button
                    class="text-2xl lg:text-4xl mb-4 text-gray-400 hover:text-gray-900 font-bold focus:outline-none"
                    @click.prevent="setActive('humind')"
                    :class="{ 'text-gray-900': isActive('humind') }"
                    href="#humind"
                  >
                    Humind School
                  </button>
                </li>
              </ul>
            </div>
            <div class="w-full lg:w-2/3 px-3">
              <div
                class="flex p-6 flex-wrap bg-white rounded-lg"
                id="organic"
                :class="{
                  block: isActive('organic'),
                  hidden: !isActive('organic')
                }"
              >
                <div class="w-full lg:w-1/2 lg:pr-3 hidden lg:block">
                  <g-image
                    class="h-80 lg:h-auto w-full lg:w-auto object-cover rounded-lg"
                    src="~/ot.jpg"
                    alt=""
                  />
                </div>
                <div class="w-full lg:w-1/2 lg:pr-3 lg:hidden">
                  <g-image
                    class="h-80 lg:h-auto w-full lg:w-auto object-cover rounded-lg"
                    src="~/ot_small.jpg"
                    alt=""
                  />
                </div>
                <div
                  class="w-full lg:w-1/2 lg:pl-3 lg:mt-6 order-first lg:order-last"
                >
                  <h4 class="text-2xl font-bold font-heading">
                    <a href="https://organictherapy.fr" target="_blank"
                      >Organic Therapy</a
                    >
                  </h4>
                  <p class="mb-6 text-gray-900">
                    Consultant Web & Stratégie Commerciale
                  </p>
                  <p class="mb-6 text-gray-500 leading-loose">
                    Organic Therapy se concentre à faire (re)découvrir les
                    plantes naturelles par la tisane et le thé.
                  </p>
                  <p class="mb-6 text-gray-500 leading-loose">
                    Créé à l'automne 2020 par Shadia et Ludovic, Organic Therapy
                    propose déjà plus d'une demi-douzaine de recettes 100%
                    naturelles & originales conçue pour pour chaque moment de la
                    journée.
                  </p>
                </div>
              </div>
              <div
                class="flex p-6 flex-wrap bg-white rounded-lg"
                id="humind"
                :class="{
                  block: isActive('humind'),
                  hidden: !isActive('humind')
                }"
              >
                <div class="w-full lg:w-1/2 lg:pr-3 hidden lg:block">
                  <g-image
                    class="h-80 lg:h-auto w-full lg:w-auto object-cover sm:object-center rounded-lg"
                    src="~/humind.jpg"
                    alt=""
                  />
                </div>
                <div class="w-full lg:w-1/2 lg:pr-3 hidden md:block lg:hidden">
                  <g-image
                    class="h-80 lg:h-auto w-full lg:w-auto object-cover sm:object-center rounded-lg"
                    src="~/humind_medium.jpg"
                    alt=""
                  />
                </div>
                <div class="w-full lg:w-1/2 lg:pr-3 md:hidden">
                  <g-image
                    class="h-80 lg:h-auto w-full lg:w-auto object-cover sm:object-center rounded-lg"
                    src="~/humind_small.jpg"
                    alt=""
                  />
                </div>
                <div
                  class="w-full lg:w-1/2 lg:pl-3 lg:mt-6 order-first lg:order-last"
                >
                  <h4 class="text-2xl font-bold font-heading">
                    <a href="https://www.humindschool.com" target="_blank"
                      >Humind School</a
                    >
                  </h4>
                  <p class="mb-6 text-gray-900">
                    Automation & Web Scraping Coach
                  </p>
                  <p class="mb-6 text-gray-500 leading-loose">
                    Humind School est le leader de l'accompagnement et de la
                    formation de profils commerciaux dans la Tech.
                  </p>
                  <p class="mb-6 text-gray-500 leading-loose">
                    Depuis 2018, ils ont formé plus de 500 Business Developers,
                    Sales, Account Managers et Customer Success Managers en
                    poste dans les plus belles startups de la Tech : Payfit,
                    Mirakl, Oracle, Skello, Partoo...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="skew skew-bottom mr-for-radius">
        <svg
          class="h-8 md:h-12 lg:h-20 w-full text-gray-900"
          viewbox="0 0 10 10"
          preserveaspectratio="none"
        >
          <polygon fill="currentColor" points="0 0 10 0 0 10"></polygon>
        </svg>
      </div>
      <div class="skew skew-bottom ml-for-radius">
        <svg
          class="h-8 md:h-12 lg:h-20 w-full text-gray-900"
          viewbox="0 0 10 10"
          preserveaspectratio="none"
        >
          <polygon fill="currentColor" points="0 0 10 0 10 10"></polygon>
        </svg>
      </div>
    </section>

    <section id="contact" class="py-12 px-4 bg-gray-900 text-white">
      <h2 class="text-4xl mb-10 text-center font-semibold font-heading">
        Contact
      </h2>
      <div class="w-full max-w-2xl mx-auto mb-12">
        <form v-on:submit.prevent="submitForm">
          <input type="hidden" name="_subject" value="francoisd.fr contact!" />
          <input type="text" name="_honey" class="hidden" />
          <input type="hidden" name="_template" value="box" />
          <div class="flex mb-4 -mx-2">
            <div class="w-1/2 px-2">
              <input
                type="email"
                id="email"
                name="email"
                v-model="form.email"
                placeholder="Email"
                class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
                required
              />
            </div>
            <div class="w-1/2 px-2">
              <select
                type="text"
                id="service"
                name="service"
                v-model="form.service"
                class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
                required
              >
                <option value="" selected>-- Selectionnez un service --</option>
                <option value="Automatisation">Automatisation</option>
                <option value="Data scraping">Data scraping</option>
                <option value="Développement Web">Développement Web</option>
              </select>
            </div>
          </div>
          <div class="mb-4">
            <textarea
              id="message"
              name="message"
              v-model="form.message"
              class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
              placeholder="Écrivez ici..."
              rows="5"
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              class="inline-block w-full py-4 px-8 leading-none text-white bg-blue-400 hover:bg-blue-600 font-semibold rounded shadow"
            >
              {{ button.text }}
            </button>
          </div>
        </form>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: "%s Développeur Web."
  },
  data() {
    return {
      form: {
        email: "",
        service: "",
        message: ""
      },
      button: {
        text: "Envoyer le message!"
      },
      activeItem: "organic"
    };
  },
  methods: {
    isActive(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive(menuItem) {
      this.activeItem = menuItem;
    },
    submitForm() {
      if (
        this.form.service != "-- Selectionnez un service --" &&
        this.form.service != "" &&
        this.form.email != "" &&
        this.form.message != ""
      ) {
        fetch("https://formsubmit.co/c28553f289106b3f323a2caa0ba4f558", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            service: this.form.service,
            email: this.form.email,
            message: this.form.message
          })
        })
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.log(error));
        this.form.service.value = "";
        this.form.email = "";
        this.form.message = "";
        this.button.text = "Merci!";
      }
    }
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
