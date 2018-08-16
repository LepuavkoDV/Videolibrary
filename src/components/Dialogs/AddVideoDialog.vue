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
              <input
                v-model="video.link"
                type="text"
                :class="['form-control', getValidationClass('link')]"
                id="link"
                placeholder="Enter Youtube video url">
              <span class="validation-error-message" v-if="!$v.video.link.required && $v.video.$dirty">
                This field is required
              </span>
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
        <div class="modal-footer">
            <button @click.prevent="addVideo()" type="button" class="btn btn-primary btn-sm">Add</button>
            <button type="button" class="btn btn-secondary btn-sm" data-dismiss="modal">Cancel</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="js">
import $ from 'jquery'
import Multiselect from 'vue-multiselect'
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'
import Validation from '../../modules/utils/validation'
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
        tags: []
      },
      videoDefaultValues: null
    }
  },
  methods: {
    addVideo () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
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
      }
    },
    resetForm () {
      this.video = { ...this.videoDefaultValues }
      this.$v.$reset()
    },
    getValidationClass (fieldname) {
      return Validation.getValidationClass(this.$v.video, fieldname)
    }
  },
  computed: {},
  components: {
    Multiselect
  },
  mixins: [validationMixin],
  validations: {
    video: {
      link: { required }
    }
  }
}
</script>

<style lang="css" src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style scoped lang="scss"></style>
