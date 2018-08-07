<template>
  <section>
    <div class="videos-container d-flex flex-row flex-wrap justify-content-around align-items-stretch">
      <Video v-for="(item, index) in videos" :key="index"></Video>
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
    return {
      videos: [1]
    }
  }
}
</script>
