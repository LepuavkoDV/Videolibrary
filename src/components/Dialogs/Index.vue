<template lang="html">

  <section class="src-components-dialogs">
    <AddVideoDialog></AddVideoDialog>
    <AddTagDialog></AddTagDialog>
    <AssignTagToVideoDialog></AssignTagToVideoDialog>
  </section>

</template>

<script lang="js">
import AddVideoDialog from './AddVideoDialog'
import AddTagDialog from './AddTagDialog'
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
    AddTagDialog,
    AssignTagToVideoDialog
  }
}
</script>

<style scoped lang="scss"></style>
