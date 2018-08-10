<template lang="html">

  <section class="src-views-tag">
    <CategoryView :config="config"></CategoryView>
  </section>

</template>

<script lang="js">
import CategoryView from '../components/CategoryView'
export default {
  name: 'src-views-tag',
  props: [],
  created () {
    this.loadInfo()
  },
  data () {
    return {
      tag: null,
      config: {
        mode: 'tags',
        item: this.tag,
        videos: this.$store.state.tags.videos,
        videosLoaded: this.$store.state.tags.videosLoaded
      }
    }
  },
  methods: {
    loadInfo () {
      this.tag = this.$store.getters.getTagByName(this.$route.params.tagName)
      if (this.tag !== undefined) {
        this.$store.dispatch('loadTagVideos', this.tag._id)
      }
    }
  },
  computed: {},
  components: {
    CategoryView
  },
  watch: {
    '$route' (to, from) {
      this.loadInfo()
    },
    '$store.state.tags.tags' (newVal) {
      this.loadInfo()
    },
    'tag' (newVal) {
      this.config.item = newVal
    },
    '$store.state.tags.videos' (newVal) {
      this.config.videos = newVal
    },
    '$store.state.tags.videosLoaded' (newVal) {
      this.config.videosLoaded = newVal
    }
  }
}
</script>

<style scoped lang="scss">
</style>
