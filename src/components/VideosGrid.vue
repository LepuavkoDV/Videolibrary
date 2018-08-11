<template lang="html">

  <section class="src-components-videos-grid">
    <div class="videos-container d-flex flex-column flex-md-row flex-wrap justify-content-around align-items-stretch">
      <Video v-show="loadComplete" v-for="(item, index) in _props.items" :key="index" :video="item" @loaded="itemLoaded"></Video>
    </div>
    <div v-if="!loadComplete" class="d-flex flex-column align-items-center m-0 p-0">
      <progress-bar class="w-25" :value="loadingProgress"/>
      <Loading></Loading>
    </div>
  </section>

</template>

<script lang="js">
import Video from './Video'
import Loading from './Loading'
import _ from 'lodash'
export default {
  name: 'src-components-videos-grid',
  props: ['items'],
  created () {
    _.forEach(this._props.items, (item) => {
      this.itemsToLoad.push(item._id)
    })
  },
  data () {
    return {
      loadedItems: [],
      itemsToLoad: []
    }
  },
  methods: {
    itemLoaded (id) {
      this.loadedItems.push(id)
      this.itemsToLoad = _.filter(this.itemsToLoad, (item) => {
        return item !== id
      })
    }
  },
  computed: {
    loadComplete () {
      return this.itemsToLoad.length === 0
    },
    loadingProgress () {
      const progress = this.loadedItems.length * 100 / this._props.items.length
      return progress
    }
  },
  components: {
    Video,
    Loading
  }
}
</script>

<style scoped lang="scss"></style>
