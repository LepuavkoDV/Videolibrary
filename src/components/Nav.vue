<template lang="html">

  <section class="pt-2">
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <a
          @click.prevent="showAddVideoDialog()"
          class="nav-link"
          href="#"
          data-toggle="tooltip"
          data-placement="top"
          title="Add video">
          <font-awesome-icon icon="plus"/>
        </a>
      </li>
      <li class="nav-item" v-for="(link, index) in links" :key="index">
        <router-link
          :class="['nav-link', { 'active': currentRoute === link.to}]"
          :to="link.to"
          data-toggle="tooltip"
          data-placement="top"
          :title="link.tooltip">
          <font-awesome-icon :icon="link.icon" />
        </router-link>
      </li>
    </ul>
    <AddVideoDialog></AddVideoDialog>
    <AddItemDialog></AddItemDialog>
    <AssignTagToVideoDialog></AssignTagToVideoDialog>
  </section>

</template>

<script lang="js">
import $ from 'jquery'
import router from '../modules/router'
import AddVideoDialog from './AddVideoDialog'
import AddItemDialog from './AddItemDialog'
import AssignTagToVideoDialog from './AssignTagToVideoDialog'
export default {
  name: 'src-components-nav',
  props: [],
  created () {
    this.currentRoute = router.currentRoute.name
  },
  mounted () {
    $('[data-toggle="tooltip"]').tooltip({
      trigger: 'hover'
    })
  },
  data () {
    return {
      currentRoute: null,
      links: [
        { to: '/', icon: 'home', tooltip: 'Home' },
        { to: 'categories', icon: 'folder-open', tooltip: 'Categories' },
        { to: 'tags', icon: 'tags', tooltip: 'Tags' }
      ]
    }
  },
  methods: {
    showAddVideoDialog () {
      $('#addVideoDialog').modal('show')
    }
  },
  computed: {},
  components: {
    AddVideoDialog,
    AddItemDialog,
    AssignTagToVideoDialog
  },
  watch: {
    '$route' (to, from) {
      this.currentRoute = to.name
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/_variables.scss";
.nav {
  .nav-link {
    color: $danger;
    &.active {
      color: $white;
      border: 1px solid $danger;
      border-radius: 250%;
      background-color: $danger;
      padding: .25rem .5rem;
      margin: .2rem .2rem 0;
    }
  }
}
</style>
