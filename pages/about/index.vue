<template>
  <div class="container" id="main-content">
    <div class="columns">
      <div class="column is-three-quarters">
        <h2 class="title has-text-brown">About</h2>
        <div class="content">
          <p>Welcome to my personal website. My name is Lee Smith and I'm a software engineer living in Birmingham, AL.</p>
          <p>
            This is my personal site where I'll blog about anything interesting I've learned along the way in my career
            in technology. I'm currently the Director of Engineering for ThreatAdvice, a cybersecurity education and technology
            startup. My primary technology stack these days is writing Ruby within the Ruby on Rails web application framework
            and deploying to Heroku and Amazon Web Services.
          </p>
          <p>
            Feel free to hit me up on Twitter: <a href="https://www.twitter.com/jeremyleesmith" target="_blank"><fa-icon :icon="['fab', 'twitter']" /> jeremyleesmith</a>
          </p>
          <p>Cheers! <span class="is-size-3">🍻</span></p>
        </div>
      </div>
      <div class="column">
        <p><nuxt-link to="/">Home</nuxt-link></p>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
</style>
