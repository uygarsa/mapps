<template>
  <p class="clearfix mb-0">
    <span class="float-md-left d-block d-md-inline-block mt-25">
      © {{ new Date().getFullYear() }}
      <b-link
        class="ml-25"
        href="https://1.envato.market/pixinvent_portfolio"
        target="_blank"
      >TURKMOBİL </b-link>
      <span class="d-none d-sm-inline-block"> , Tüm Hakları Saklıdır</span>
    </span>
    </p>
</template>

<script>
import { BLink } from 'bootstrap-vue'

export default {
  components: {
    BLink,
  },
}
</script>
