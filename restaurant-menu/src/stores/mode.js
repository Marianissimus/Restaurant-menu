import { reactive } from 'vue'

export const store = reactive({
  mode: 'menu',
  setModeToMenu() {
    this.mode = 'menu'
  },
  setModeToCart() {
    this.mode = 'cart'
  }
})
