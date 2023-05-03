import { createStore } from 'vuex'
import axios from 'axios'

export const store = createStore({
    state () {
      return {
        textValue: '',
        bgValue: 'FFFFFF',
        colorValue: '000000',
        format: 'png',
        isLoading: false,
        readyUrl: ''
      }
    },
    mutations: {
      updateTextValue(state, value) {
        state.textValue = value
      },
      updateBgValue(state, value) {
        state.bgValue = value
      },
      updateColorValue(state, value) {
        state.colorValue = value
      },
      changeFormat(state, value) {
        state.format = value
      }
    },
    actions: {
       async getQr() {
            const config = {
                headers: {
                  'X-Api-Key': 'Clh48cu+zMIJJZgUjsRWDA==tr94SLAlMqIWMBQu'
                },
                contentType: 'application/json'
            }
            this.state.isLoading = true
            try {
                const res = await axios.get('https://api.api-ninjas.com/v1/qrcode?data=' + this.state.textValue + '&format=' + this.state.format + '&fg_color=' + this.state.colorValue + '&bg_color=' + this.state.bgValue, config )
                this.state.readyUrl = `data:image/${this.state.format};base64,${res.data}`
                this.state.isLoading = false
            } catch (error) {
                alert('Something was wrong')
                this.state.readyUrl = ''
                this.state.isLoading = false
            } 
       }
    },
})