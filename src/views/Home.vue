<template>
  <section>
    <VideosGrid :items="$store.getters.getVideosList()"></VideosGrid>
  </section>
</template>

<script>
import VideosGrid from '../components/VideosGrid'
export default {
  name: 'home',
  components: {
    VideosGrid
  },
  data () {
    return {}
  }
}
</script>
