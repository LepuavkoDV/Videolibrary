<template lang="html">

  <section class="pt-3 d-flex flex-row justify-content-between">
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
          :class="['nav-link', { 'btn btn-sm btn-outline-danger btn-round active': currentRoute === link.to}]"
          :to="link.to"
          data-toggle="tooltip"
          data-placement="top"
          :title="link.tooltip">
          <font-awesome-icon :icon="link.icon" />
        </router-link>
      </li>
    </ul>
    <div>
      <button
        @click.prevent="showAddItemDialog()"
        data-toggle="tooltip"
        data-placement="top"
        title="Add new category or tag"
        class="btn btn-sm btn-outline-danger btn-round">
        <font-awesome-icon icon="cogs"/>
      </button>
      <a
        target="_blank"
        href="https://github.com/LepuavkoDV/Videolibrary"
        class="btn btn-sm btn-outline-secondary btn-round">
        <font-awesome-icon :icon="['fab', 'github']" />
      </a>
    </div>
  </section>

</template>

<script lang="js">
import $ from 'jquery'
import router from '../modules/router'
export default {
  name: 'src-components-nav',
  props: [],
  created () {
    this.currentRoute = router.currentRoute.path
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
        { to: '/categories', icon: 'folder-open', tooltip: 'Categories' },
        { to: '/tags', icon: 'tags', tooltip: 'Tags' }
      ]
    }
  },
  methods: {
    showAddVideoDialog () {
      $('#addVideoDialog').modal('show')
    },
    showAddItemDialog () {
      $('#addItemDialog').modal('show')
    }
  },
  computed: {},
  components: {},
  watch: {
    '$route' (to, from) {
      this.currentRoute = to.path
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/_variables.scss";
.nav {
  .nav-link {
    color: $danger;
    padding: .25rem .5rem;
    &.active {
      color: $white;
    }
  }
}

.btn-round {
  border-radius: 100rem;
}
</style>
