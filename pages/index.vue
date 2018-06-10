<template>
  <div class="container" id="main-content">
    <div class="columns">
      <div class="column is-three-quarters">
        <fa-icon :icon="['far', 'calendar-alt']" /> June 3, 2018
        <a href="#" class="is-size-3 is-block has-text-weight-semibold">New site who dis</a>
      </div>
      <aside class="column">
        <div class="headshot"></div>
        <ul class="aside-list">
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="/about">About</nuxt-link></li>
          <li>
            <a class="is-size-4" href="https://www.twitter.com/jeremyleesmith" target="_blank" style="margin-right: 16px; color: #1da1f2;"><fa-icon :icon="['fab', 'twitter']" /></a>
            <a class="is-size-4" href="https://www.github.com/leesmith" target="_blank" style="color: #24292e;"><fa-icon :icon="['fab', 'github']" /></a>
          </li>
        </ul>
      </aside>
    </div>
  </div>
</template>

<script>
</script>

<style>
</style>
