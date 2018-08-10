<template lang="html">

  <section class="src-views-category">
    <CategoryView :config="config"></CategoryView>
  </section>

</template>

<script lang="js">
import CategoryView from '../components/CategoryView'
export default {
  name: 'src-views-category',
  props: [],
  created () {
    this.loadInfo()
  },
  data () {
    return {
      category: null,
      config: {
        mode: 'categories',
        item: this.category,
        videos: this.$store.state.categories.videos,
        videosLoaded: this.$store.state.categories.videosLoaded
      }
    }
  },
  methods: {
    loadInfo () {
      this.category = this.$store.getters.getCategoryByName(this.$route.params.categoryName)
      if (this.category !== undefined) {
        this.$store.dispatch('loadCategoryVideos', this.category._id)
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
    '$store.state.categories.categories' (newVal) {
      this.loadInfo()
    },
    'category' (newVal) {
      this.config.item = newVal
    },
    '$store.state.categories.videos' (newVal) {
      this.config.videos = newVal
    },
    '$store.state.categories.videosLoaded' (newVal) {
      this.config.videosLoaded = newVal
    }
  }
}
</script>
<style scoped lang="scss"></style>
