<template>
  <div>
    <header class="h-32 sm:h-48 md:h-64">
      <div class="container mx-auto h-full p-4">
        <div class="inline-flex items-center h-full">
          <nuxt-link to="/" class="flex-1">
            <h1 class="site-title">Lee Smith</h1>
          </nuxt-link>
        </div>
      </div>
    </header>
    <div class="container mx-auto px-4 mb-16">
      <main class="bg-white rounded-lg -mt-8 shadow-lg p-4 md:p-6">
        <div class="md:flex">
          <div class="md:w-3/4 md:pr-4">
            <nuxt/>
          </div>
          <aside class="text-center md:w-1/4 mt-8 md:mt-0">
            <nuxt-link to="/" aria-label="Headshot">
              <div class="headshot"></div>
            </nuxt-link>
            <ul class="aside-list px-4">
              <li><nuxt-link to="/" class="text-blue-600 hover:text-blue-800"><fa-icon :icon="['fas', 'home']" /> Home</nuxt-link></li>
              <li><nuxt-link to="/about" class="text-blue-600 hover:text-blue-800"><fa-icon :icon="['fas', 'user-circle']" /> About</nuxt-link></li>
              <li><nuxt-link to="/contact" class="text-blue-600 hover:text-blue-800"><fa-icon :icon="['fas', 'envelope']" /> Contact</nuxt-link></li>
              <li>
                <a class="text-2xl" href="https://www.twitter.com/jeremyleesmith" target="_blank" rel="noopener" aria-label="Twitter" style="margin-right: 2rem; color: #1da1f2;"><fa-icon :icon="['fab', 'twitter']" title="Twitter" role="img" /></a>
                <a class="text-2xl" href="https://www.github.com/leesmith" target="_blank" rel="noopener" aria-label="GitHub" style="margin-right: 2rem; color: #24292e;"><fa-icon :icon="['fab', 'github']" title="GitHub" role="img" /></a>
                <a class="text-2xl" href="https://www.dev.to/smitjel" target="_blank" rel="noopener" aria-label="Dev" style="color: #ff922b;"><fa-icon :icon="['fab', 'dev']" title="Dev" role="img" /></a>
              </li>
            </ul>
          </aside>
        </div>
      </main>
    </div>
  </div>
</template>

<style>
</style>
