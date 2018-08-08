<template lang="html">

  <div class="modal fade" id="addCategoryModal" tabindex="-1" role="dialog" aria-labelledby="addCategoryModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title" id="addCategoryModalLabel">Add new category or tag</h3>
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
  name: 'src-components-add-category-dialog',
  props: [],
  mounted () {
    $('#addCategoryModal').on('hide.bs.modal', (e) => {
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
      console.log(this.item)
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
