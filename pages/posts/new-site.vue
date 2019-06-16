<template>
  <div>
    <div class="text-sm"><fa-icon :icon="['far', 'calendar-alt']" /> June 3, 2018</div>
    <h2 class="page-title">New site who dis</h2>
    <div class="content">
      <p>
        So I'm finally publishing a personal blog! I know...I should have been doing this a long time ago. I don't know what made me check on the availability but
        this domain wasn't registered so I pulled the trigger. Finally - a domain name I don't hate! But that's a terrible reason to not blog but oh well.
        Now I'm on it!</p>
      <p>
        I built this site using <a href="http://nuxtjs.org" target="_blank" rel="noopener">Nuxt</a>. It's a completely static site, generated from Nuxt and I'm really digging
        it. I've also deployed it to Amazon S3. I'll probably be writing a bit about Nuxt and Vue here at first since I'm really enjoying learning these newer
        frontend frameworks. Anyway, thanks for stopping by!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "New site who dis - LeeSmith.net",
      meta: [
        { hid: "description", name: "description", content: "New site who dis" }
      ]
    };
  }
};
</script>
