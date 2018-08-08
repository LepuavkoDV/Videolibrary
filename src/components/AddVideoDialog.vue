<template lang="html">

  <div class="modal fade" id="addVideoDialog" tabindex="-1" role="dialog" aria-labelledby="addVideoDialogLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title" id="addVideoDialogLabel">Add Video</h3>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="link">Youtube Link</label>
              <input v-model="video.link" type="email" class="form-control" id="link" aria-describedby="emailHelp" placeholder="Enter Youtube video url">
            </div>
            <div class="form-group">
              <label for="category">Category</label>
              <multiselect
                v-model="video.category"
                :options="$store.getters.getCategoriesList()"
                :searchable="true"
                :close-on-select="true"
                :show-labels="true"
                track-by="_id"
                label="title"
                placeholder="Select Category">
              </multiselect>
            </div>
            <div class="form-group">
              <label for="tags">Tags</label>
              <multiselect
                v-model="video.tags"
                :options="$store.getters.getTagsList()"
                :searchable="true"
                :close-on-select="true"
                :show-labels="true"
                :multiple="true"
                track-by="_id"
                label="title"
                placeholder="Select Tags">
              </multiselect>
            </div>
          </form>
        </div>
        <div class="modal-footer d-flex flex-row justify-content-between">
          <div class="float-left">
            <button
              @click.prevent="showAddCategoryDialog()"
              data-toggle="tooltip"
              data-placement="top"
              title="Add new category or tag"
              class="btn btn-sm btn-outline-success">
              <font-awesome-icon icon="cogs"/>
            </button>
          </div>
          <div class="float-right">
            <button @click.prevent="addVideo()" type="button" class="btn btn-danger btn-sm">Add</button>
            <button type="button" class="btn btn-secondary btn-sm" data-dismiss="modal">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="js">
import $ from 'jquery'
import Multiselect from 'vue-multiselect'
export default {
  name: 'src-components-add-video-dialog',
  props: [],
  mounted () {
    $('#addVideoDialog').on('hidden.bs.modal', (e) => {
      this.resetForm()
    })
    this.videoDefaultValues = { ...this.video }
  },
  data () {
    return {
      video: {
        link: null,
        category: null,
        tags: []
      },
      videoDefaultValues: null
    }
  },
  methods: {
    addVideo () {
      this.$store.dispatch('addVideo', this.video).then(res => {
        $('#addVideoDialog').modal('hide')
        this.$notify({
          group: 'main',
          title: 'Success',
          type: 'success',
          text: 'New video added to library'
        })
      }).catch(err => {
        this.$notify({
          group: 'main',
          title: 'Error',
          type: 'error',
          text: err.response.data.message
        })
      })
    },
    resetForm () {
      this.video = { ...this.videoDefaultValues }
    },
    showAddTagDialog () {
      $('#addVideoDialog').modal('hide')
      $('#addTagModal').modal('show')
    },
    showAddCategoryDialog () {
      $('#addVideoDialog').modal('hide')
      $('#addCategoryModal').modal('show')
    }
  },
  computed: {},
  components: {
    Multiselect
  }
}
</script>

<style lang="css" src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style scoped lang="scss">
@import "../assets/scss/_variables.scss";
.modal-title {
  font-family: $font-family-lobster;
}
</style>
