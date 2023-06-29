import { defineStore } from 'pinia'

export const useShoppingCart = defineStore('cart', {
  state: () => {
    return { items: [] }
  },
  actions: {
    addToItems(item) {
      this.items.push(item)
    },
    removeFromItems(item) {
      console.log(item.id)
      const idx = this.items.findIndex(el => el.id === item.id)
      this.items.splice(idx, 1)
    }
  },
  getters: {
    howManyItems: (state) => state.items.length,
    totalPrice: (state) => state.items.reduce((acc, curr) => acc + curr.price, 0)
  },
})
