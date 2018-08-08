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
              <input v-model="video.link" type="email" class="form-control" id="link" aria-describedby="emailHelp" placeholder="https://www.youtube.com/watch?v=md2umXaV5tw">
            </div>
            <div class="form-group">
              <label for="category">Category</label>
              <multiselect
                v-model="video.category"
                :options="categories"
                :searchable="true"
                :close-on-select="true"
                :show-labels="true"
                placeholder="Select Category">
              </multiselect>
            </div>
            <div class="form-group">
              <label for="tags">Tags</label>
              <multiselect
                v-model="video.tags"
                :options="tags"
                :searchable="true"
                :close-on-select="true"
                :show-labels="true"
                :multiple="true"
                placeholder="Select Tags">
              </multiselect>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button @click.prevent="addVideo()" type="button" class="btn btn-danger btn-sm">Add</button>
          <button type="button" class="btn btn-secondary btn-sm" data-dismiss="modal">Cancel</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="js">
import Multiselect from 'vue-multiselect'
export default {
  name: 'src-components-add-video-dialog',
  props: [],
  mounted () {

  },
  data () {
    return {
      video: {
        link: '',
        category: '',
        tags: []
      },
      categories: ['Category1', 'Category2', 'Category3'],
      tags: ['Tag1', 'Tag2']
    }
  },
  methods: {
    addVideo () {
      console.log(this.video)
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
