<template lang="html">

  <section class="src-components-category-view">
    <h3 class="category-title text-center mb-4" v-if="_props.config.item !== undefined">
      <span v-if="_props.config.mode === 'tags'">#</span>
      {{_props.config.item.title}}
    </h3>
    <VideosGrid v-if="_props.config.videosLoaded" :items="_props.config.videos"></VideosGrid>
  </section>

</template>

<script lang="js">
import VideosGrid from '../components/VideosGrid'
export default {
  name: 'src-components-item-view',
  props: ['config'],
  created () {},
  data () {
    return {}
  },
  methods: {},
  computed: {},
  components: {
    VideosGrid
  }
}
</script>

<style scoped lang="scss"></style>
