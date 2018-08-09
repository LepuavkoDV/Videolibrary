<template lang="html">

  <div class="modal fade" id="addItemModal" tabindex="-1" role="dialog" aria-labelledby="addItemModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title" id="addItemModalLabel">Add new category or tag</h3>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="category">Type</label>
              <multiselect
                v-model="item.type"
                :options="['Tag', 'Category']"
                :searchable="true"
                :close-on-select="true"
                :show-labels="true"
                placeholder="Select type">
              </multiselect>
            </div>
            <div class="form-group">
              <label for="title">Title</label>
              <input v-model="item.title" type="text" class="form-control" placeholder="Enter title">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button @click.prevent="addNewItem()" type="button" class="btn btn-sm btn-danger">Add</button>
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
  name: 'src-components-add-item-dialog',
  props: [],
  mounted () {
    $('#addItemModal').on('hide.bs.modal', (e) => {
      $('#addVideoDialog').modal('show')
      this.resetForm()
    })
    this.itemDefaultValues = { ...this.item }
  },
  data () {
    return {
      item: {
        title: null,
        type: 'Category'
      },
      itemDefaultValues: null
    }
  },
  methods: {
    resetForm () {
      this.item = { ...this.itemDefaultValues }
    },
    addNewItem () {
      const action = this.item.type === 'Category' ? 'addCategory' : 'addTag'
      this.$store.dispatch(action, this.item).then(res => {
        $('#addItemModal').modal('hide')
        this.$notify({
          group: 'main',
          title: 'Success',
          type: 'success',
          text: 'New item added'
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

<style scoped lang="scss">
@import "../assets/scss/_variables.scss";
.modal-title {
  font-family: $font-family-lobster;
}
</style>
