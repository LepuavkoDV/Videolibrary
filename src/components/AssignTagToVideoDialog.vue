<template lang="html">

  <div class="modal fade" id="assignTagToVideoDialog" tabindex="-1" role="dialog" aria-labelledby="assignTagToVideoDialogLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title" id="assignTagToVideoDialogLabel">Add tag</h3>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="tags">Tags</label>
              <multiselect
                :value="$store.state.tags.currentTags"
                :options="$store.getters.getTagsList()"
                :searchable="true"
                :close-on-select="true"
                :show-labels="true"
                :multiple="true"
                track-by="_id"
                label="title"
                @input="setCurrentTags"
                placeholder="Select Tags">
              </multiselect>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button @click.prevent="assignTags()" type="button" class="btn btn-danger btn-sm">Add</button>
          <button type="button" class="btn btn-secondary btn-sm" data-dismiss="modal">Cancel</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="js">
import $ from 'jquery'
import Multiselect from 'vue-multiselect'
import { mapActions } from 'vuex'
export default {
  name: 'src-components-assign-tag-to-video-dialog',
  props: [],
  mounted () {},
  data () {
    return {}
  },
  methods: {
    ...mapActions(['setCurrentTags']),
    assignTags () {
      this.$store.dispatch('updateVideoTags').then(res => {
        $('#assignTagToVideoDialog').modal('hide')
        this.$notify({
          group: 'main',
          title: 'Success',
          type: 'success',
          text: 'Video tags updated'
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
</style>
