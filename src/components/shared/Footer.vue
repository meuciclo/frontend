<template>
    <div class="footer">
        <div class="footer-home pointer footer-selected">
            <span class="material-icons">home</span>
        </div>
        <div class="footer-data pointer">
            <span class="material-icons">trending_up</span>
        </div>
        <div class="footer-settings pointer">
            <span class="material-icons">settings</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss" scoped>
    .footer {
        $footer-height: 45px;
        $footer-color: pink;
        width: 100vw;
        height: $footer-height;
        background-color: $footer-color;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 35px;
        position: fixed;
        bottom: 0;
        &-logo {
            font-size: 1.4rem;
        }
        &-selected {
            width: $footer-height;
            height: $footer-height;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: lighten($color: $footer-color, $amount: 7);
        }
    }
</style>
