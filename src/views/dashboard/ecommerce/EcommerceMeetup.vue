<template>
  <b-card
    v-if="data"
    no-body
    class="card-developer-meetup"
  >
    <div class="bg-light-primary rounded-top text-center">
      <b-img
        :src="require('@/assets/images/illustration/email.svg')"
        alt="Meeting Pic"
        height="170"
      />
    </div>
    <b-card-body>
      <!-- metting header -->
      <div class="meetup-header d-flex align-items-center">
        <div class="meetup-day">
          
        </div>
        <div class="my-auto">
          <b-card-title class="mb-25">
            Destek Talepleri
          </b-card-title>
          <b-card-text class="mb-0">
            Son 5 Destek Talebi
          </b-card-text>
        </div>
      </div>
      <!--/ metting header -->

      <!-- media -->
      <b-media
        v-for="media in data.mediaData"
        :key="media.avatar"
        no-body
      >
       
        <b-media-body>
          <h6 class="mb-0">
            {{ media.title }}
          </h6>
          <small>{{ media.subtitle }}</small>
        </b-media-body>
      </b-media>

      <!-- avatar group -->
      

    </b-card-body>
  </b-card>
</template>

<script>
import {
  BCard, BImg, BCardBody, BCardText, BCardTitle, BMedia, BMediaAside, BAvatar, BAvatarGroup, VBTooltip, BMediaBody,
} from 'bootstrap-vue'

export default {
  components: {
    BCard,
    BImg,
    BCardBody,
    BCardText,
    BCardTitle,
    BMedia,
    BMediaAside,
    BAvatar,
    BAvatarGroup,
    BMediaBody,
  },
  directives: {
    'b-tooltip': VBTooltip,
  },
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
