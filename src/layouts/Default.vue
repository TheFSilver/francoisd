<template>
  <div class="antialiased bg-body text-body font-body">
    <header>
      <section>
        <nav class="relative py-6 bg-gray-900">
          <div class="container mx-auto px-4 flex justify-between items-center">
            <g-link to="/" class="text-white text-3xl font-bold leading-none"
              >François D.</g-link
            >
            <div class="lg:hidden">
              <button class="navbar-burger flex items-center text-white p-3">
                <svg
                  class="block h-4 w-4 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Mobile menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </button>
            </div>
            <ul
              class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6"
            >
              <li>
                <g-link
                  to="/#services"
                  class="text-md text-gray-300 hover:text-white"
                  >Services</g-link
                >
              </li>
              <li class="text-gray-800">
                <svg
                  class="w-4 h-4 current-fill"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  ></path>
                </svg>
              </li>
              <li>
                <g-link
                  to="/#processus"
                  class="text-md text-gray-300 hover:text-white"
                  >Processus</g-link
                >
              </li>
            </ul>
            <g-link
              to="/#contact"
              class="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 text-sm text-white font-bold border-2 border-gray-800 hover:border-gray-700 rounded-l-xl rounded-t-xl transition duration-200"
              >Contact</g-link
            >
          </div>
        </nav>
        <div class="hidden navbar-menu relative z-50">
          <div
            class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"
          ></div>
          <nav
            class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto"
          >
            <div class="flex items-center mb-8">
              <g-link to="/" class="mr-auto text-3xl font-bold leading-none"
                >François D.</g-link
              >
              <button class="navbar-close">
                <svg
                  class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div>
              <ul>
                <li class="mb-1">
                  <g-link
                    to="/#services"
                    class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                    >Services</g-link
                  >
                </li>
                <li class="mb-1">
                  <g-link
                    to="/#processus"
                    class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                    >Processus</g-link
                  >
                </li>
              </ul>
            </div>
            <div class="mt-auto">
              <div class="pt-6">
                <g-link
                  to="/#contact"
                  class="block px-4 py-3 mb-2 leading-loose text-xs text-center text-blue-500 font-semibold bg-gray-200 hover:bg-blue-200 rounded-l-xl rounded-t-xl"
                  >Contact</g-link
                >
              </div>
              <p class="my-4 text-xs text-center text-gray-400">
                <span>© 2020 All rights reserved.</span>
              </p>
              <div class="text-center">
                <a
                  class="inline-block px-1"
                  target="_blank"
                  href="https://www.linkedin.com/in/francois-dasylva/"
                >
                  <svg
                    class="text-blue-500 w-6 h-6 fill-current"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                    /></svg
                ></a>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </header>
    <slot />
    <footer class="p-4 bg-gray-900 text-white">
      <div class="flex flex-col lg:flex-row items-center">
        <div class="w-full lg:w-auto lg:mr-auto text-center lg:text-left">
          © 2020 François D. 
        </div>

        <div class="flex justify-center items-center space-x-6 mt-4 lg:mt-0">
          <a
            href="https://www.linkedin.com/in/francois-dasylva/"
            target="_blank"
          >
            <svg
              class="text-blue-500 w-6 h-6 fill-current"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
if (process.isClient) {
  document.onreadystatechange = () => {
    if (document.readyState == "complete") {
      // open
      const burger = document.querySelectorAll(".navbar-burger");
      const menu = document.querySelectorAll(".navbar-menu");

      if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
          burger[i].addEventListener("click", function() {
            for (var j = 0; j < menu.length; j++) {
              menu[j].classList.toggle("hidden");
            }
          });
        }
      }

      // close
      const close = document.querySelectorAll(".navbar-close");
      const backdrop = document.querySelectorAll(".navbar-backdrop");

      if (close.length) {
        for (var i = 0; i < close.length; i++) {
          close[i].addEventListener("click", function() {
            for (var j = 0; j < menu.length; j++) {
              menu[j].classList.toggle("hidden");
            }
          });
        }
      }

      if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
          backdrop[i].addEventListener("click", function() {
            for (var j = 0; j < menu.length; j++) {
              menu[j].classList.toggle("hidden");
            }
          });
        }
      }
    }
  };
}
</script>
