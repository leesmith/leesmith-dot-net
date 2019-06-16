<template>
  <div>
    <ul class="post-list">
      <li>
        <div class="text-gray-600 text-sm font-light"><fa-icon :icon="['far', 'calendar-alt']" /> December 5, 2018</div>
        <nuxt-link to="/posts/migrating-to-minpac-for-vim" class="text-xl text-blue-600 font-medium">
          Migrating to minpac for Vim
        </nuxt-link>
      </li>
      <li class="mt-5">
        <div class="text-gray-600 text-sm font-light"><fa-icon :icon="['far', 'calendar-alt']" /> August 18, 2018</div>
        <nuxt-link to="/posts/static-sites-powered-by-nuxt-and-aws" class="text-xl text-blue-600 font-medium">
          Static sites powered by Nuxt and AWS
        </nuxt-link>
      </li>
      <li class="mt-5">
        <div class="text-gray-600 text-sm font-light"><fa-icon :icon="['far', 'calendar-alt']" /> June 3, 2018</div>
        <nuxt-link to="/posts/new-site" class="text-xl text-blue-600 font-medium">
          New site who dis
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
</script>
