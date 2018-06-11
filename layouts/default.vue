<template>
  <div>
    <section class="hero is-medium" id="hero-banner">
      <div class="hero-body">
        <div class="container">
          <nuxt-link to="/">
            <div class="title-bg">
              <h1>Lee Smith</h1>
            </div>
          </nuxt-link>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container" id="main-content">
        <div class="columns">
          <div class="column is-three-quarters">
            <nuxt/>
          </div>
          <aside class="column">
            <nuxt-link to="/"><div class="headshot"></div></nuxt-link>
            <ul class="aside-list">
              <li><nuxt-link to="/"><fa-icon :icon="['fas', 'home']" /> Home</nuxt-link></li>
              <li><nuxt-link to="/about"><fa-icon :icon="['fas', 'user-circle']" /> About</nuxt-link></li>
              <li>
                <a class="is-size-4" href="https://www.twitter.com/jeremyleesmith" target="_blank" style="margin-right: 24px; color: #1da1f2;"><fa-icon :icon="['fab', 'twitter']" /></a>
                <a class="is-size-4" href="https://www.github.com/leesmith" target="_blank" style="color: #24292e;"><fa-icon :icon="['fab', 'github']" /></a>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
</style>
