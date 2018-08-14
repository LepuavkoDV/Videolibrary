<template lang="html">

  <div class="video-item">
    <div class="video-box d-flex flex-column border rounded shadow-sm p-1">
      <div class="embed-responsive rounded embed-responsive-16by9">
        <iframe
          class="embed-responsive-item"
          width="auto"
          height="150"
          :src="url"
          allowfullscreen
          v-show="loaded"
          @load="loadComplete"
          ref="frame"
        ></iframe>
      </div>
      <div class="video-item__info my-3 mx-1">
        <div class="video-title d-flex justify-content-between">
          <h5 class="video-title__title">{{videoName}}</h5>
          <div>
            <span class="badge badge-primary">{{duration}}</span>
          </div>
        </div>
        <div class="video-tags d-flex justify-content-center flex-wrap">
          <router-link
            v-for="(tag, index) in _props.video.tags"
            :key="index"
            class="tag"
            :to="generateLink(tag.title, 'tags')">
            #{{tag.title}}
          </router-link>
          <a
            @click.prevent="showAddTagToVideoDialog(_props.video._id)"
            href="#"
            class="tag"
            data-toggle="tooltip"
            data-placement="top"
            title="Edit tags"><font-awesome-icon icon="tags"/>
          </a>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="js">
import $ from 'jquery'
import moment from 'moment'
import _ from 'lodash'
import Loading from './Loading'
export default {
  name: 'src-components-video',
  props: ['video'],
  mounted () {
    $('[data-toggle="tooltip"]').tooltip({
      trigger: 'hover'
    })
  },
  data () {
    return {
      loaded: false
    }
  },
  methods: {
    loadComplete () {
      this.loaded = true
      this.$emit('loaded', this._props.video._id)
    },
    showAddTagToVideoDialog (videoId) {
      const video = this.$store.getters.getVideoById(videoId)
      this.$store.dispatch('setCurrentVideoId', videoId)
      this.$store.dispatch('setCurrentTags', video.tags)
      $('#assignTagToVideoDialog').modal('show')
    },
    generateLink (name, mode) {
      return '/' + mode + '/' + _.kebabCase(name)
    }
  },
  computed: {
    videoName () {
      return _.truncate(this._props.video.title, {
        'length': 30,
        'omission': '...'
      })
    },
    duration () {
      const seconds = this._props.video.duration
      const format = seconds > 3600 ? 'HH:mm:ss' : 'mm:ss'
      const duration = moment.utc(seconds * 1000).format(format)
      return duration
    },
    url () {
      return 'https://www.youtube.com/embed/' + this._props.video.YTId + '?rel=0'
    }
  },
  components: {
    Loading
  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/_variables";
@import "../assets/scss/_mixins";
.video-item {
  background-color: lighten($primary, 64%);
  margin-bottom: 2rem;
  width: 100%;
  .video-title {
    padding: .25rem 0;
    .video-title__title {
      font-family: $font-family-roboto;
      margin-bottom: 0;
    }
    .badge {
      font-family: $font-family-jura !important;
    }
  }
  .video-box {
    &:hover {
      box-shadow: 0 0 .7rem $gray-500;
      animation: shadowAppear .25s forwards 0s ease-in, shadowBlink 1s infinite .5s ease-in-out;
    }
  }
  .video-item__info {
    .video-tags {
      .tag {
        font-family: $font-family-jura;
        color: $primary;
        font-size: 1rem;
        font-weight: 600;
        margin-left: .25em;
        &:hover {
          text-decoration: none;
          color: lighten($primary, 20%);
        }
      }
    }
  }
}

@include media-breakpoint-up(md) {
  .video-item {
    width: 30%;
  }
}

@keyframes shadowAppear {
  0% {
    transform: rotate(xx);
    box-shadow: 0 0 0 $primary;
  }
  100% {
    transform: rotate(xx);
    box-shadow: 0 0 .5rem $primary;
  }
}

@keyframes shadowBlink {
  0% {
    transform: rotate(xx);
    box-shadow: 0 0 .5rem $primary;
  }
  50% {
    transform: rotate(xx);
    box-shadow: 0 0 .5rem $gray-500;
  }
  100% {
    transform: rotate(xx);
    box-shadow: 0 0 .5rem $primary;
  }
}
</style>
