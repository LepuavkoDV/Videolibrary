<template>
  <section>
    <div class="videos-container d-flex flex-row flex-wrap justify-content-around align-items-stretch">
      <Video v-for="(item, index) in $store.getters.getVideosList()" :key="index" :video="item"></Video>
    </div>
  </section>
</template>

<script>
import Video from '../components/Video'
export default {
  name: 'home',
  components: {
    Video
  },
  data () {
    return {}
  }
}
</script>
