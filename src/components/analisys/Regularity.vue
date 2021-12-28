<template>
  <div class="analisys-regularity">
    <div class="analisys-betweenMenstruation chart" v-if="differenceData.length > 2">
      <h4>Período de tempo entre o início de cada menstruação</h4>
      <line-chart :data="differenceData"></line-chart>
    </div>
    <div class="analisys-duration chart">
      <h4>Duração da menstruação</h4>
      <line-chart :data="menstruationDuration"></line-chart>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Regularity',
  data () {
    return {
      differenceData: [],
      menstruationDuration: []
    }
  },
  props: {
    lastRegisters: Array
  },
  methods: {
    normalizeDay (day) {
      return day < 10 ? `0${day}` : day
    },
    normalizeMonth (month) {
      month += 1
      return month < 10 ? `0${month}` : month
    },
    timestampToDate (timestamp) {
      const date = new Date(timestamp)
      const year = date.getFullYear()
      const month = this.normalizeMonth(date.getMonth())
      const day = this.normalizeDay(date.getDate())
      return `${year}-${month}-${day}`
    },
    dateDiffInDays (a, b) {
      const _MS_PER_DAY = 1000 * 60 * 60 * 24
      const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate())
      const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate())
      return Math.floor((utc2 - utc1) / _MS_PER_DAY)
    },
    calculateDifference () {
      let i = 1
      this.differenceData = []
      while (i < this.lastRegisters.length - 1) {
        const past = new Date(this.lastRegisters[i - 1].begin)
        const current = new Date(this.lastRegisters[i].begin)
        const currentDate = this.timestampToDate(this.lastRegisters[i].begin)
        const difference = this.dateDiffInDays(past, current)
        const data = []
        data.push(currentDate)
        data.push(difference)
        this.differenceData.push(data)
        i += 1
      }
    },
    calculateMenstruarionDuration () {
      this.menstruationDuration = []
      this.lastRegisters.forEach(register => {
        const begin = new Date(register.begin)
        const end = new Date(register.end)
        if (begin instanceof Date && !isNaN(begin.valueOf()) && end instanceof Date && !isNaN(end.valueOf())) {
          const currentDate = this.timestampToDate(register.begin)
          const difference = this.dateDiffInDays(begin, end)
          const data = []
          data.push(currentDate)
          data.push(difference)
          this.menstruationDuration.push(data)
        }
      })
    },
    initialize () {
      this.calculateDifference()
      this.calculateMenstruarionDuration()
    }
  },
  watch: {
    lastRegisters: {
      deep: true,
      handler () {
        this.initialize()
      }
    }
  },
  mounted () {
    this.initialize()
  }
}
</script>

<style lang="less" scoped>
  .analisys {
    &-regularity {
      display: flex;
      flex-direction: column;
    }

    .chart {
      display: flex;
      flex-direction: column;
      margin: 7px 0px;
    }
  }
</style>
