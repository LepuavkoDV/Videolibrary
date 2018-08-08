<template lang="html">

  <div class="video-item">
    <div class="video-title d-flex justify-content-between">
      <h5 class="video-title__title">{{videoName}}</h5>
      <div>
        <span class="badge badge-danger">{{duration}}</span>
      </div>
    </div>
    <div class="video-box d-flex flex-column border rounded shadow-sm p-1 mb-4">
      <div class="embed-responsive rounded embed-responsive-16by9">
        <iframe class="embed-responsive-item" width="auto" height="150" :src="url" allowfullscreen></iframe>
      </div>
      <div class="video-item__info">
        <div class="video-description d-flex justify-content-center py-1 px-5">
          <div>
            <a href="#">{{category}}</a>
            <!-- <a href="#">Author</a> -->
          </div>
        </div>
        <div class="video-tags d-flex justify-content-center">
          <a v-for="(tag, index) in _props.video.tags" :key="index" class="tag" href="#">#{{tag.title}}</a>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="js">
import moment from 'moment'
import _ from 'lodash'
export default {
  name: 'src-components-video',
  props: ['video'],
  mounted () {

  },
  data () {
    return {

    }
  },
  methods: {},
  computed: {
    videoName () {
      return _.truncate(this._props.video.title, {
        'length': 20,
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
    },
    category () {
      return this._props.video.category.title
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/_variables";
.video-item {
  width: 30%;
  .video-title {
    padding: .25rem 0;
    .video-title__title {
      font-family: $font-family-lobster;
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
    .video-description {
      border-bottom: 1px solid $gray-200;
      a {
        color: $danger;
        font-weight: 300;
        font-size: .9rem;
        &:hover {
          color: $gray-700;
          text-decoration: none;
        }
      }
    }
    .video-tags {
      .tag {
        font-family: $font-family-jura;
        color: $success;
        font-size: .8rem;
        font-weight: 400;
        margin-left: .25em;
        &:hover {
          text-decoration: none;
          color: $gray-700;
        }
      }
    }
  }
}
@keyframes shadowAppear {
  0% {
    transform: rotate(xx);
    box-shadow: 0 0 0 $danger;
  }
  100% {
    transform: rotate(xx);
    box-shadow: 0 0 .5rem $danger;
  }
}

@keyframes shadowBlink {
  0% {
    transform: rotate(xx);
    box-shadow: 0 0 .5rem $danger;
  }
  50% {
    transform: rotate(xx);
    box-shadow: 0 0 .5rem $gray-500;
  }
  100% {
    transform: rotate(xx);
    box-shadow: 0 0 .5rem $danger;
  }
}
</style>
