<template lang="html">

  <section class="src-views-item">
    <ItemView :config="config"></ItemView>
  </section>

</template>

<script lang="js">
import ItemView from '../components/ItemView'
export default {
  name: 'src-views-item',
  props: [],
  created () {
    this.loadInfo()
  },
  data () {
    return {
      config: {
        mode: this.mode(),
        item: null,
        videos: this.videos(),
        videosLoaded: this.videosLoaded()
      }
    }
  },
  methods: {
    mode () {
      switch (this.$route.name) {
        case 'category-listing':
          return 'categories'
        case 'tag-listing':
          return 'tags'
      }
    },
    loadInfo () {
      this.config.item = this.mode() === 'categories'
        ? this.$store.getters.getCategoryByName(this.$route.params.categoryName)
        : this.$store.getters.getTagByName(this.$route.params.tagName)

      if (this.config.item !== undefined) {
        const action = this.mode() === 'categories' ? 'loadCategoryVideos' : 'loadTagVideos'
        this.$store.dispatch(action, this.config.item._id)
      }
    },
    videos () {
      const videos = this.mode() === 'categories' ? this.$store.state.categories.videos : this.$store.state.tags.videos
      return videos
    },
    videosLoaded () {
      const videos = this.mode() === 'categories'
        ? this.$store.state.categories.videosLoaded
        : this.$store.state.tags.videosLoaded
      return videos
    }
  },
  computed: {},
  components: {
    ItemView
  },
  watch: {
    '$route' (to, from) {
      this.loadInfo()
    },
    '$store.state.categories.categories' (newVal) {
      this.loadInfo()
    },
    '$store.state.tags.tags' (newVal) {
      this.loadInfo()
    },
    '$store.state.categories.videos' (newVal) {
      this.config.videos = newVal
    },
    '$store.state.tags.videos' (newVal) {
      this.config.videos = newVal
    },
    '$store.state.categories.videosLoaded' (newVal) {
      this.config.videosLoaded = newVal
    },
    '$store.state.tags.videosLoaded' (newVal) {
      this.config.videosLoaded = newVal
    }
  }
}
</script>

<style scoped lang="scss">
</style>
