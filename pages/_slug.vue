<template>
  <nuxt-content :document="doc" />
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const doc = await $content(params.slug || 'AppIndex').fetch()

    return { doc }
  },
}
</script>
