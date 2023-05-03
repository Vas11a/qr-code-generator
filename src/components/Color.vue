<template>
  <input type="text" placeholder="Color in HEX" v-model="colorValue">
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    const colorValue = computed({
      get() {
        return store.state.colorValue
      },
      set(value) {
        store.commit('updateColorValue', value)
      }
    })
    return {
      colorValue
    }
  }
}
</script>
