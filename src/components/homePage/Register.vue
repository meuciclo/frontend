<template>
    <div class="register">
        <div class="register-btn pointer">
            <span v-if="isCounting">Parei de<br>Menstruar</span>
            <span v-else>Menstruei</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Register',
  props: {
    isCounting: Boolean
  }
}
</script>

<style lang="scss" scoped>
    .register {
        margin: 45px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        &-btn {
            $buttonSize: 170px;
            width: $buttonSize;
            height: $buttonSize;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: pink;
            text-transform: uppercase;
            margin-bottom: 50px;
            span {
                font-weight: bold;
                font-size: 1.3rem;
            }
        }
    }
</style>
