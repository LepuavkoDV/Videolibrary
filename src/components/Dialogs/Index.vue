<template lang="html">

  <section class="src-components-dialogs">
    <AddVideoDialog></AddVideoDialog>
    <AddItemDialog></AddItemDialog>
    <AssignTagToVideoDialog></AssignTagToVideoDialog>
  </section>

</template>

<script lang="js">
import AddVideoDialog from './AddVideoDialog'
import AddItemDialog from './AddItemDialog'
import AssignTagToVideoDialog from './AssignTagToVideoDialog'
export default {
  name: 'src-components-dialogs',
  props: [],
  mounted () {},
  data () {
    return {}
  },
  methods: {},
  computed: {},
  components: {
    AddVideoDialog,
    AddItemDialog,
    AssignTagToVideoDialog
  }
}
</script>

<style scoped lang="scss"></style>
