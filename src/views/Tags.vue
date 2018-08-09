<template lang="html">

  <section class="src-views-tags">
    <CategoriesList :items="$store.getters.getTagsList()" :mode="mode"></CategoriesList>
  </section>

</template>

<script lang="js">
import CategoriesList from '../components/CategoriesList'
export default {
  name: 'src-views-tags',
  props: [],
  mounted () {},
  data () {
    return {
      mode: 'tags'
    }
  },
  methods: {},
  computed: {},
  components: {
    CategoriesList
  }
}
</script>

<style scoped lang="scss"></style>
