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
      const idx = this.items.findIndex(el => el.id === item.id)
      this.items.splice(idx, 1)
    },
    resetOrder() {
      this.items = []
    },
  },
  getters: {
    howManyItems: (state) => state.items.length,
    totalPrice: (state) => state.items.reduce((acc, curr) => acc + curr.price, 0),
    groupedMenuItems: (state) => {
      const items = state.items
      const result = []
      for (let item of items) {
        const alreadyExisting = result.find(el => el.id === item.id)
        if (alreadyExisting) { // duplicate found
          alreadyExisting.times += 1
        } else {
          const element = { ...item }
          element.times = 1
          result.push(element)
        }
      }
      return result.sort((a, b) => (a.name < b.name) ? 1 : -1)
    }
  },
})
