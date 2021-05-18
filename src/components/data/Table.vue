<template>
  <div class="table" ref="dataTable">
    <table class="table-remove">
      <thead>
        <tr>
          <th>Dia de Início</th>
          <th>Dia do Fim</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(entry, index) in entries" :key="index">
          <td>
            <div class="table-remove-cell">
              <DateInput v-model="entry.begin" class="day"/>
            </div>
          </td>
          <td>
            <div class="table-remove-cell">
              <DateInput v-model="entry.end" class="day"/>
            </div>
          </td>
          <td>
            <span class="material-icons btn-remove pointer" @click="removeEntry(index)">
              remove_circle
            </span>
          </td>
        </tr>
        <tr>
          <td colspan="3">
            <span class="material-icons btn-add pointer" @click="addEntry">add_circle</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import DateInput from '@/components/data/DateInput'
export default {
  name: 'Table',
  props: {
    modelValue: Array
  },
  components: {
    DateInput
  },
  methods: {
    addEntry: function () {
      this.entries.push({})
      this.scrollToBottom()
    },
    removeEntry: function (index) {
      this.entries.splice(index, 1)
    },
    scrollToBottom: function () {
      this.$nextTick(() => {
        const element = this.$refs.dataTable
        if (element) {
          element.scroll({
            top: element.scrollHeight + 100,
            left: 0,
            behavior: 'smooth'
          })
        }
      })
    }
  },
  computed: {
    entries: {
      get () {
        return this.modelValue
      },
      set (value) {
        this.$emit('update:modelValue', value)
      }
    }
  },
  mounted: function () {
    this.scrollToBottom()
  }
}
</script>

<style lang="scss" scoped>
  .table {
    width: 300px;
    height: calc(100vh / 2);
    overflow-y: auto;
    @media (min-width: 768px) {
      width: 600px;
      display: flex;
      justify-content: center;
    }
    .btn{
      &-add {
        color: rgb(69, 156, 69);
        margin-top: 20px;
        font-size: 2rem;
      }
      &-remove {
        color: rgb(255, 77, 77);
      }
    }
    &-remove-cell {
      display: flex;
      justify-content: center;
    }
  }
</style>
