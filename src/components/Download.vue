<template>
    <div v-if="$store.state.readyUrl === ''" class="dowload">
        <img src="../imgs/arr.png" alt="" class="h-full w-auto -rotate-90">
    </div>
    <a :href="$store.state.readyUrl" v-if="$store.state.readyUrl !== ''" download="Qr code" class="dowload">
        <img src="../imgs/arr.png" alt="" class="h-full w-auto -rotate-90">
    </a>
</template>

<script>
export default {

}
</script>
