<template>
  <section id="card-text-alignment">
  
    <b-row>
      <b-col
        md="10"
        lg="4"
      >
        <b-card
          title="Mapps Akıllı Gözlük"
          class="text-center"
        >
          
          <b-button
            v-ripple.400="'rgba(113, 102, 240, 0.15)'"
            variant="primary"
          >
           Yükle
          </b-button>
        </b-card>
      </b-col>

      <b-col
        md="6"
        lg="4"
      >
        <b-card
          title="İş Akışı"
          class="text-center"
        >
          
          <b-button
            v-ripple.400="'rgba(113, 102, 240, 0.15)'"
            variant="primary"
          >
           Yükle
          </b-button>
        </b-card>
      </b-col>

      <b-col
        md="6"
        lg="4"
      >
        <b-card
          class="text-center"
          title="PBX"
        >
          
          <b-button
            v-ripple.400="'rgba(113, 102, 240, 0.15)'"
            variant="primary"
          >
           Yükle
          </b-button>
        </b-card>
      </b-col>
    </b-row>
    <b-row>

    <b-col
        md="6"
        lg="4"
      >
        <b-card
          title="Scada Entegrasyonu"
          class="text-center"
        >
          
          <b-button
            v-ripple.400="'rgba(113, 102, 240, 0.15)'"
            variant="primary"
          >
           Yükle
          </b-button>
        </b-card>
      </b-col>

      <b-col
        md="6"
        lg="4"
      >
        <b-card
          title="KVKK Bildirim Sistemi"
          class="text-center"
        >
          
          <b-button
            v-ripple.400="'rgba(113, 102, 240, 0.15)'"
            variant="primary"
          >
           Yükle
          </b-button>
        </b-card>
      </b-col>

      
      <b-col
        md="6"
        lg="4"
      >
        <b-card
          class="text-center"
          title="İSG (İş Sağlığı Güvenliği)"
        >
          
          <b-button
            v-ripple.400="'rgba(113, 102, 240, 0.15)'"
            variant="primary"
          >
           Yükle
          </b-button>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col
        md="6"
        lg="4"
      >
        <b-card
          title="WebRTC ve PBX Entegrasyonu"
          class="text-center"
        >
          
          <b-button
            v-ripple.400="'rgba(113, 102, 240, 0.15)'"
            variant="primary"
          >
           Yükle
          </b-button>
        </b-card>
      </b-col>

      <b-col
        md="6"
        lg="4"
      >
        <b-card
          title="Kurumsal E-Posta Servisi"
          class="text-center"
        >
          
          <b-button
            v-ripple.400="'rgba(113, 102, 240, 0.15)'"
            variant="primary"
          >
           Yükle
          </b-button>
        </b-card>
      </b-col>
      <b-col
        md="6"
        lg="4"
      >
        <b-card
          class="text-center"
          title="Personel Takip"
        >
          
          <b-button
            v-ripple.400="'rgba(113, 102, 240, 0.15)'"
            variant="primary"
          >
           Yükle
          </b-button>
        </b-card>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import {
  BRow, BCol, BCard, BCardText, BButton,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BRow, BCol, BCard, BCardText, BButton,
  },
  directives: {
    Ripple,
  },
}
</script>
