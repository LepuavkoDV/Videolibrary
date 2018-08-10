<template lang="html">

  <section class="src-views-tag">
    <h3 class="category-title text-center mb-4" v-if="tag !== undefined" >#{{tag.title}}</h3>
    <VideosGrid v-if="$store.state.tags.videosLoaded" :items="$store.state.tags.videos"></VideosGrid>
    <div v-if="!$store.state.tags.videosLoaded">
      <Loading></Loading>
    </div>
  </section>

</template>

<script lang="js">
import VideosGrid from '../components/VideosGrid'
import Loading from '../components/Loading'
export default {
  name: 'src-views-tag',
  props: [],
  created () {
    this.loadInfo()
  },
  data () {
    return {
      tag: null
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
    VideosGrid,
    Loading
  },
  watch: {
    '$route' (to, from) {
      this.loadInfo()
    },
    '$store.state.tags.tags' (newVal) {
      this.loadInfo()
    }
  }
}
</script>

<style scoped lang="scss">
</style>
