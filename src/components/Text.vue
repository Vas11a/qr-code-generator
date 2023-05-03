<template>
  <input type="text" placeholder="Qr text" v-model="textValue">
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    const textValue = computed({
      get() {
        return store.state.textValue
      },
      set(value) {
        store.commit('updateTextValue', value)
      }
    })
    return {
      textValue
    }
  }
}
</script>

