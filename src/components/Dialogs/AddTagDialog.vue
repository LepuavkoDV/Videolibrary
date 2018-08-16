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
              <input
                v-model="Tag.title"
                type="text"
                :class="['form-control', getValidationClass('title')]"
                placeholder="Enter title">
              <span class="validation-error-message" v-if="!$v.Tag.title.required && $v.Tag.$dirty">
                This field is required
              </span>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button @click.prevent="addNewTag()" type="button" class="btn btn-sm btn-primary">Add</button>
          <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">Cancel</button>
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
        title: null
      },
      TagDefaultValues: null
    }
  },
  methods: {
    resetForm () {
      this.Tag = { ...this.TagDefaultValues }
      this.$v.$reset()
    },
    addNewTag () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$store.dispatch('addTag', this.Tag).then(res => {
          $('#addTagDialog').modal('hide')
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
    getValidationClass (fieldname) {
      return Validation.getValidationClass(this.$v.Tag, fieldname)
    }
  },
  computed: {},
  components: {
    Multiselect
  },
  mixins: [validationMixin],
  validations: {
    Tag: {
      title: { required }
    }
  }

}
</script>

<style scoped lang="scss"></style>
