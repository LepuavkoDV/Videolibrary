<template lang="html">

  <section class="src-views-tag">
    <h1>#{{tag.title}}</h1>
    <div class="videos-container d-flex flex-row flex-wrap justify-content-around align-items-stretch">
      <Video v-for="(item, index) in $store.state.tags.videos" :key="index" :video="item"></Video>
    </div>
  </section>

</template>

<script lang="js">
import Video from '../components/Video'
export default {
  name: 'src-views-tag',
  props: [],
  mounted () {
    this.$store.dispatch('loadTagVideos', this.tag._id)
  },
  data () {
    return {}
  },
  methods: {},
  computed: {
    tag () {
      return this.$store.getters.getTagByName(this.$route.params.tagName)
    }
  },
  components: {
    Video
  }
}
</script>

<style scoped lang="scss">
  .src-views-tag {

  }
</style>
