<template lang="html">

  <section class="src-views-category">
    <h1>{{category.title}}</h1>
    <div class="videos-container d-flex flex-row flex-wrap justify-content-around align-items-stretch">
      <Video v-for="(item, index) in $store.state.categories.videos" :key="index" :video="item"></Video>
    </div>
  </section>

</template>

<script lang="js">
import Video from '../components/Video'
export default {
  name: 'src-views-category',
  props: [],
  mounted () {
    this.$store.dispatch('loadCategoryVideos', this.category._id)
  },
  data () {
    return {}
  },
  methods: {},
  computed: {
    category () {
      return this.$store.getters.getCategoryByName(this.$route.params.categoryName)
    }
  },
  components: {
    Video
  }
}
</script>
<style scoped lang="scss"></style>
