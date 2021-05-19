<template>
    <div class="header">
        <div class="header-logo">
            Meu Ciclo
        </div>
    </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
    .header {
        width: 100%;
        height: 65px;
        background-color: pink;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 35px;
        &-logo {
            font-size: 1.4rem;
        }
    }
</style>
