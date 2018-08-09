<template lang="html">

  <section class="src-components-categories-list">
    <div class="categories-list d-flex flex-row flex-wrap justify-content-center align-items-start align-content-start px-5">
      <div
        class="category d-flex flex-column align-items-center"
        v-for="(item, index) in items"
        :key="index">
        <router-link :to="makeCategoryLink(item.title)"><span v-if="_props.mode === 'tags'">#</span>{{item.title}}</router-link>
        <div class="categry-videos">Videos: {{item.videos.length}}</div>
      </div>
    </div>
  </section>

</template>

<script lang="js">
import _ from 'lodash'
export default {
  name: 'src-components-categories-list',
  props: ['items', 'mode'],
  mounted () {},
  data () {
    return {}
  },
  methods: {
    makeCategoryLink (name) {
      const prefix = this._props.mode === 'tags' ? '/tags/' : '/categories/'
      return prefix + _.kebabCase(name)
    }
  },
  computed: {}
}
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";
.categories-list {
  .category {
    height: 4rem;
    font-family: $font-family-jura;
    margin-left: 1rem;
    font-size: 1.5rem;
    font-weight: 800;
    word-spacing: -.1em;
    a {
      color: $gray-500;
      &:hover {
        color: $gray-600;
        text-decoration: none;
      }
    }
    .categry-videos {
      font-size: .75rem;
      font-family: $font-family-roboto;
      font-weight: 500;
    }
  }
}
</style>
