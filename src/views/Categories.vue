<template lang="html">

  <section class="src-views-categories">
    <CategoriesList :items="$store.getters.getCategoriesList()" :mode="mode"></CategoriesList>
  </section>

</template>

<script lang="js">
import CategoriesList from '../components/CategoriesList'
export default {
  name: 'src-views-categories',
  props: [],
  mounted () {},
  data () {
    return {
      mode: 'categories'
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
