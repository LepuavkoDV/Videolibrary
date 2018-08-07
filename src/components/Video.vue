<template lang="html">

  <div class="video-item">
    <div class="video-title d-flex justify-content-between">
      <h5 class="video-title__title">Video name</h5>
      <div>
        <span class="badge badge-danger">20:22</span>
      </div>
    </div>
    <div class="video-box d-flex flex-column border rounded shadow-sm p-1 mb-4">
      <div class="embed-responsive rounded embed-responsive-16by9">
        <iframe class="embed-responsive-item" width="auto" height="150" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"></iframe>
      </div>
      <div class="video-item__info">
        <div class="video-description d-flex justify-content-center py-1 px-5">
          <div>
            <a href="#">Category</a>,
            <a href="#">Author</a>
          </div>
        </div>
        <div class="video-tags d-flex justify-content-center">
          <a class="tag" href="#">#tag</a>
          <a class="tag" href="#">#tag</a>
          <a class="tag" href="#">#tag</a>
          <a class="tag" href="#">#tag</a>
          <a class="tag" href="#">#tag</a>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="js">
export default {
  name: 'src-components-video',
  props: [],
  mounted () {

  },
  data () {
    return {

    }
  },
  methods: {

  },
  computed: {

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
        color: $danger !important;
        font-weight: 300;
        color: $primary;
        font-size: .9rem;
        &:hover {
          text-decoration: none;
        }
      }
    }
    .video-tags {
      .tag {
        font-family: $font-family-jura;
        color: $gray-600;
        font-size: .8rem;
        font-weight: 400;
        margin-left: .25em;
        &:hover {
          text-decoration: none;
          color: $danger;
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
