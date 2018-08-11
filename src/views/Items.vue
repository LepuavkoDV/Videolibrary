<template lang="html">

  <section class="src-views-items">
    <ItemsList :items="items" :mode="this.$route.name"></ItemsList>
  </section>

</template>

<script lang="js">
import ItemsList from '../components/ItemsList'
export default {
  name: 'src-views-items',
  props: [],
  mounted () {},
  data () {
    return {}
  },
  methods: {},
  computed: {
    items () {
      switch (this.$route.name) {
        case 'categories':
          return this.$store.getters.getCategoriesList()
        case 'tags':
          return this.$store.getters.getTagsList()
      }
    }
  },
  components: {
    ItemsList
  }
}
</script>

<style scoped lang="scss"></style>
