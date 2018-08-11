<template>
  <div>
    <h1 class="title has-text-brown">About</h1>
    <div class="content">
      <p>Welcome to my personal website. My name is Lee Smith and I'm a software engineer living in Birmingham, AL.</p>
      <p>
        This is my personal site where I'll blog about anything interesting I've learned along the way in my career
        in technology. I'm currently the Director of Engineering for <a href="https://www.threatadvice.com/" target="_blank" rel="noopener">ThreatAdvice</a>,
        a cybersecurity education and technology startup. I enjoy learning and working with open source software. My primary technology
        stack these days is writing Ruby within the Ruby on Rails web application framework and deploying to Heroku and Amazon Web Services.
        I'm currently experimenting with NuxtJS, which I used to build this site.
      </p>
      <p>
        Feel free to hit me up on <a href="https://www.twitter.com/jeremyleesmith" target="_blank" rel="noopener"><fa-icon :icon="['fab', 'twitter']" /> Twitter</a>
        or follow me on <a href="https://www.github.com/leesmith" target="_blank" rel="noopener"><fa-icon :icon="['fab', 'github']" /> Github</a>.
      </p>
      <p>Cheers! <span class="is-size-3">🍻</span></p>
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
