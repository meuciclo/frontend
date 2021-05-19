<template>
  <label class="switch">
    <input type="checkbox" v-model="value">
    <span class="slider round"></span>
  </label>
</template>

<script>
export default {
  name: 'SwitchButton',
  props: ['modelValue'],
  emits: ['update:modelValue'],
  computed: {
    value: {
      get () {
        return this.modelValue
      },
      set (value) {
        this.$emit('update:modelValue', value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  $switch-width: 45px;
  $switch-height: 24px;
  .switch {
    position: relative;
    display: inline-block;
    width: $switch-width;
    height: $switch-height;
    input {
      /* Hide default HTML checkbox */
      opacity: 0;
      width: 0;
      height: 0;
    }
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
    width: $switch-width;
    height: $switch-height;

    /* Rounded sliders */
    &.round {
      border-radius: 34px;
    }

    &.round:before {
      border-radius: 50%;
    }

    &:before {
      position: absolute;
      content: "";
      height: 20px;
      width: 20px;
      left: 2px;
      bottom: 1.5px;
      background-color: white;
      -webkit-transition: .4s;
      transition: .4s;
    }
  }

  input:checked + .slider {
    background-color: pink;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px pink;
  }

  input:checked + .slider:before {
    $checked-translate: 20px;
    -webkit-transform: translateX($checked-translate);
    -ms-transform: translateX($checked-translate);
    transform: translateX($checked-translate);
  }
</style>
