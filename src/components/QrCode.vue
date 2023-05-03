<template>
    <div class="qr-filed p-2">
        <img v-if="$store.state.readyUrl !== ''" :src="$store.state.readyUrl" alt="" class='w-44 h-44'>
        <div v-if="$store.state.readyUrl === ''" class="text-3xl text-gray-500 font-bold text-center">Here will be your qr code</div>
    </div>
</template>

<script>
export default {

}
</script>
