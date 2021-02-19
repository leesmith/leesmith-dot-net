<template>
  <div>
    <h2 class="page-title">Hello</h2>
    <div class="content">
      <p>Welcome to my personal website. My name is Lee Smith and I'm a software engineer living in Birmingham, AL.</p>
      <p>
        This is my personal site where I'll blog about anything interesting I've learned along the way in my career
        in technology. I'm currently the Director of Engineering for <a href="https://www.nxtsoft.com/" class="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener">Nxtsoft</a>,
        a cybersecurity education and technology startup. I enjoy learning and working with open source software. My primary technology
        stack these days is writing Ruby within the Ruby on Rails web application framework and deploying to Heroku and Amazon Web Services.
        I'm currently experimenting with NuxtJS, which I used to build this site.
      </p>
      <p>
        Feel free to hit me up on <a href="https://www.twitter.com/jeremyleesmith" class="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener"><fa-icon :icon="['fab', 'twitter']" /> Twitter</a>,
        follow me on <a href="https://www.github.com/leesmith" class="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener"><fa-icon :icon="['fab', 'github']" /> Github</a>,
        or shoot me <nuxt-link to="/contact" class="text-blue-500 hover:text-blue-700"><fa-icon :icon="['fas', 'envelope']" /> message</nuxt-link>.
      </p>
      <p>Cheers! <span class="text-3xl">🍻</span></p>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "About - LeeSmith.net",
      meta: [{ hid: "description", name: "description", content: "About Me" }]
    };
  }
};
</script>
