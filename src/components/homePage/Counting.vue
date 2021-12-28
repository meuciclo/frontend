<template>
  <div class="counting" v-if="days >= 0">
    <div class="counting-who">Você está</div>
    <div class="counting-number">{{days}}</div>
    <div class="counting-timing">dias
      <span v-if="isCounting == true"> menstruando</span>
      <span v-else> desde sua última menstruação</span>
    </div>
  </div>
  <div class="counting" v-else>
    <div class="counting-who">Faltam</div>
    <div class="counting-number">{{-1 * days}}</div>
    <div class="counting-timing">dias
      <span> para acabar sua menstruação</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Counting',
  props: {
    days: String,
    isCounting: Boolean
  }
}
</script>

<style lang="less" scoped>
  .counting {
    @commomText-size: 1.7rem;
    &-who {
      font-size: @commomText-size;
    }
    &-number {
      font-size: 6.7rem;
    }
    &-timing {
      font-size: @commomText-size;
    }
  }
</style>
