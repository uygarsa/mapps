<template>
  <section id="dashboard-analytics">
      <b-row class="match-height">
      <b-col lg="6">
        <analytics-avg-sessions :data="data.avgSessions" />
      </b-col>
      <b-col lg="6">
        <analytics-support-tracker :data="data.supportTracker" />
      </b-col>
    </b-row>

    

    <b-row>
      <b-col cols="12">
        <invoice-list />
      </b-col>
    </b-row>
  </section>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'

import StatisticCardWithAreaChart from '@core/components/statistics-cards/StatisticCardWithAreaChart.vue'
import { kFormatter } from '@core/utils/filter'
import InvoiceList from '@/views/apps/invoice/invoice-list/InvoiceList.vue'
import AnalyticsCongratulation from './AnalyticsCongratulation.vue'
import AnalyticsAvgSessions from './AnalyticsAvgSessions.vue'
import AnalyticsSupportTracker from './AnalyticsSupportTracker.vue'
import AnalyticsTimeline from './AnalyticsTimeline.vue'
import AnalyticsSalesRadarChart from './AnalyticsSalesRadarChart.vue'
import AnalyticsAppDesign from './AnalyticsAppDesign.vue'

export default {
  components: {
    BRow,
    BCol,
    AnalyticsCongratulation,
    AnalyticsAvgSessions,
    StatisticCardWithAreaChart,
    AnalyticsSupportTracker,
    AnalyticsTimeline,
    AnalyticsSalesRadarChart,
    AnalyticsAppDesign,
    InvoiceList,
  },
  data() {
    return {
      data: {},
    }
  },
  created() {
    // data
    this.$http.get('/analytics/data')
      .then(response => { this.data = response.data })
  },
  methods: {
    kFormatter,
  },
}
</script>
