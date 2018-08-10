<template lang="html">

  <section class="src-components-videos-grid">
    <div class="videos-container d-flex flex-row flex-wrap justify-content-around align-items-stretch">
      <Video v-show="loadComplete" v-for="(item, index) in _props.items" :key="index" :video="item" @loaded="itemLoaded"></Video>
    </div>
    <Loading v-if="!loadComplete"></Loading>
  </section>

</template>

<script lang="js">
import Video from './Video'
import Loading from './Loading'
export default {
  name: 'src-components-videos-grid',
  props: ['items'],
  mounted () {},
  data () {
    return {
      loadedItems: []
    }
  },
  methods: {
    itemLoaded (id) {
      this.loadedItems.push(id)
    }
  },
  computed: {
    loadComplete () {
      return this.loadedItems.length === this._props.items.length
    }
  },
  components: {
    Video,
    Loading
  }
}
</script>

<style scoped lang="scss"></style>
