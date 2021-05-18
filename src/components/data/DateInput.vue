<template>
    <div class="date-input">
        <input
          type="text"
          v-model.lazy="value"
          v-maska="{ mask: 'd#/m#/yYy#', tokens: tokens }"
        >
    </div>
</template>

<script>
export default {
  name: 'DateInput',
  props: ['modelValue'],
  emits: ['update:modelValue'],
  data: function () {
    return {
      services: [],
      tokens: {
        d: { pattern: '[0-3]' },
        m: { pattern: '[0-1]' },
        y: { pattern: '2' },
        Y: { pattern: '0' }
      }
    }
  },
  methods: {
    timestampToDate: function (timestamp) {
      const normalizeDay = function (day) {
        return day < 10 ? `0${day}` : day
      }
      const normalizeMonth = function (month) {
        month += 1
        return month < 10 ? `0${month}` : month
      }
      const date = new Date(timestamp)
      if (!isNaN(date)) {
        const day = normalizeDay(date.getDate())
        const month = normalizeMonth(date.getMonth())
        const year = date.getFullYear()
        return `${day}/${month}/${year}`
      } else {
        return ''
      }
    },
    dateToTimestamp: function (date) {
      const arrayDate = date.split('/')
      const dateObj = new Date(arrayDate[2], arrayDate[1] - 1, arrayDate[0])
      if (!isNaN(dateObj)) {
        return dateObj.valueOf()
      } else {
        return ''
      }
    }
  },
  computed: {
    value: {
      get () {
        return this.timestampToDate(this.modelValue)
      },
      set (value) {
        const timestamp = this.dateToTimestamp(value)
        this.$emit('update:modelValue', timestamp)
        console.log('adasdadas', value, timestamp)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .date-input {
    width: 80%;
    input {
      width: 100%;
    }
  }
</style>
