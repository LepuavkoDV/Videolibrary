<template lang="html">

  <div class="modal fade" id="addTagDialog" tabindex="-1" role="dialog" aria-labelledby="addTagDialogLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title" id="addTagDialogLabel">Add new category or tag</h3>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="title">Title</label>
              <input v-model="Tag.title" type="text" class="form-control" placeholder="Enter title">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button @click.prevent="addNewTag()" type="button" class="btn btn-sm btn-danger">Add</button>
          <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">Cancel</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="js">
import $ from 'jquery'
import Multiselect from 'vue-multiselect'
export default {
  name: 'src-components-add-Tag-dialog',
  props: [],
  mounted () {
    $('#addTagDialog').on('hide.bs.modal', (e) => {
      this.resetForm()
    })
    this.TagDefaultValues = { ...this.Tag }
  },
  data () {
    return {
      Tag: {
        title: null,
        type: 'Category'
      },
      TagDefaultValues: null
    }
  },
  methods: {
    resetForm () {
      this.Tag = { ...this.TagDefaultValues }
    },
    addNewTag () {
      this.$store.dispatch('addTag', this.Tag).then(res => {
        this.resetForm()
        this.$notify({
          group: 'main',
          title: 'Success',
          type: 'success',
          text: 'New Tag added'
        })
      }).catch(err => {
        this.$notify({
          group: 'main',
          title: 'Error',
          type: 'error',
          text: err.response.data.message
        })
      })
    }
  },
  computed: {},
  components: {
    Multiselect
  }
}
</script>

<style scoped lang="scss"></style>
