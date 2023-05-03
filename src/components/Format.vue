<template>
    <div class="choose-form">
        <div @click="openClosePanel" class="cursor-pointer select-none">{{$store.state.format}}</div>
        <div v-show="isOpenPanel" class="block-choose">
            <div class="elem" @click="chooseOther('png')">.png</div>
            <div class="elem" @click="chooseOther('jpg')">.jpg</div>
            <div class="elem" @click="chooseOther('jpeg')">.jpeg</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isOpenPanel: false
        }
    },
    methods: {
        openClosePanel() {
            this.isOpenPanel = !this.isOpenPanel
        },
        chooseOther(data) {
            this.isOpenPanel = false
            this.$store.commit('changeFormat', data)
        }
    }
}
</script>

