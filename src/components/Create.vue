<template>
    <div class="create">
        <div class="button" @click="getQr">Generate
            <img src="../imgs/loader.gif" v-if="$store.state.isLoading" class=" w-5 h-auto my-1 m-auto bg-transparent" alt="">
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        getQr() {
            this.$store.dispatch('getQr')
        },
    }
}
</script>
