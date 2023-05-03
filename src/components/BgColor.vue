<template>
  <input type="text" placeholder="BG in HEX" v-model="bgValue">
</template>


<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    const bgValue = computed({
      get() {
        return store.state.bgValue
      },
      set(value) {
        store.commit('updateBgValue', value)
      }
    })
    return {
      bgValue
    }
  }
}
</script>
