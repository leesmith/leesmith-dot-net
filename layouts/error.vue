<template>
  <div>
    <h2 class="page-title" v-if="error.statusCode === 404"><fa-icon :icon="['far', 'question-circle']" /> This page could not be found</h2>
    <h2 class="page-title" v-else>An error occurred</h2>
    <p>Please return to the <nuxt-link to="/">home page</nuxt-link>.</p>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'default'
}
</script>
