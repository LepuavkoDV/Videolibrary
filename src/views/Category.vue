<template lang="html">

  <section class="src-views-category">
    <h3 class="category-title text-center mb-4" v-if="category !== undefined" >{{category.title}}</h3>
    <VideosGrid v-if="$store.state.categories.videosLoaded" :items="$store.state.categories.videos"></VideosGrid>
    <div v-if="!$store.state.categories.videosLoaded">
      <Loading></Loading>
    </div>
  </section>

</template>

<script lang="js">
import VideosGrid from '../components/VideosGrid'
import Loading from '../components/Loading'
export default {
  name: 'src-views-category',
  props: [],
  created () {
    this.loadInfo()
  },
  data () {
    return {
      category: null
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
    VideosGrid,
    Loading
  },
  watch: {
    '$route' (to, from) {
      this.loadInfo()
    },
    '$store.state.categories.categories' (newVal) {
      this.loadInfo()
    }
  }
}
</script>
<style scoped lang="scss"></style>
