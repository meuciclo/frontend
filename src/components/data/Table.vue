<template>
  <div class="table" ref="dataTable">
    <table class="table-data">
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
            <div class="table-data-cell">
              <DateInput v-model="entry.begin" class="day"/>
            </div>
          </td>
          <td>
            <div class="table-data-cell">
              <DateInput v-model="entry.end" class="day"/>
            </div>
          </td>
          <td>
            <a class="material-icons btn-remove pointer" @click="removeEntry(index)">
              remove_circle
            </a>
          </td>
        </tr>
        <tr>
          <td colspan="3">
            <a class="material-icons btn-add pointer" @click="addEntry">add_circle</a>
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
        font-size: 3rem;
        &:active {
          color: rgb(122, 168, 122);
        }
        @media (min-width: 768px) {
          font-size: 2rem;
        }
      }
      &-remove {
        color: rgb(255, 77, 77);
        font-size: 2rem;
        margin: 0px 20px;
        &:active {
          color: rgb(255, 170, 170);
        }
        @media (min-width: 768px) {
          font-size: 1.3rem;
        }
      }
    }

    &-data-cell {
      display: flex;
      justify-content: center;
      align-items: center;
      justify-items: center;
      align-content: center;
    }

    td {
      padding: 7px 0;
    }

    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    &::-webkit-scrollbar-button {
      width: 0px;
      height: 0px;
    }
    &::-webkit-scrollbar-thumb {
      background: #e1e1e1;
      border: 0px none #ffffff;
      border-radius: 50px;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: #9c9c9c;
    }
    &::-webkit-scrollbar-thumb:active {
      background: #757575;
    }
    &::-webkit-scrollbar-track {
      background: #666666;
      border: 0px none #ffffff;
      border-radius: 50px;
    }
    &::-webkit-scrollbar-track:hover {
      background: #666666;
    }
    &::-webkit-scrollbar-track:active {
      background: #3e3e3e;
    }
    &::-webkit-scrollbar-corner {
      background: transparent;
    }
  }
</style>
