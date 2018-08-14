<template lang="html">

  <section class="src-views-items">
    <div class="items-list d-flex flex-row flex-wrap justify-content-center align-items-start align-content-start px-5">
      <div
        class="item d-flex flex-column align-items-center"
        v-for="(tag, index) in this.$store.state.tags.tags"
        :key="index">
        <router-link :to="makeLink(tag.title)"><span>#</span>{{tag.title}}</router-link>
        <div class="item-videos">Videos: {{tag.videos.length}}</div>
      </div>
    </div>
  </section>

</template>

<script lang="js">
import _ from 'lodash'
export default {
  name: 'src-views-items',
  props: [],
  mounted () {},
  data () {
    return {}
  },
  methods: {
    makeLink (name) {
      return '/tags/' + _.kebabCase(name)
    }
  },
  computed: {},
  components: {}
}
</script>

<style scoped lang="scss">
@import "../assets/scss/_variables.scss";
.items-list {
  .item {
    height: 4rem;
    font-family: $font-family-jura;
    margin-left: 1rem;
    font-size: 1.5rem;
    font-weight: 800;
    word-spacing: -.1em;
    a {
      color: $primary;
      &:hover {
        color: lighten($primary, 25%);
        text-decoration: none;
      }
    }
    .item-videos {
      font-size: .75rem;
      font-family: $font-family-roboto;
      font-weight: 500;
      color: lighten($primary, 20%);
    }
  }
}
</style>
