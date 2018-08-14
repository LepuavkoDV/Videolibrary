<template lang="html">

  <section class="src-views-tag">
    <h3 class="category-title text-center mb-4" v-if="this.tag !== undefined">
      <span>#</span>
      {{this.tag.title}}
    </h3>
    <VideosGrid v-if="this.$store.state.tags.videosLoaded" :items="this.$store.state.tags.videos"></VideosGrid>
  </section>

</template>

<script lang="js">
import VideosGrid from '../components/VideosGrid'
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
    mode () {
      switch (this.$route.name) {
        case 'tag-listing':
          return 'tags'
      }
    },
    loadInfo () {
      this.tag = this.$store.getters.getTagByName(this.$route.params.tagName)
      if (this.tag !== undefined) {
        this.$store.dispatch('loadTagVideos', this.tag._id)
      }
    }
  },
  computed: {},
  components: {
    VideosGrid
  },
  watch: {
    '$route' (to, from) {
      this.loadInfo()
      this.config.mode = this.mode()
    },
    '$store.state.tags.tags' (newVal) {
      this.loadInfo()
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/_variables.scss";
.category-title {
  color: lighten($primary, 20%);
}
</style>
