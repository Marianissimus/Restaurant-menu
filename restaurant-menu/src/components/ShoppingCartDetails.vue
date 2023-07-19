<template>
  <div class="shopping-cart-details">
    <button v-if="cart.items.length" class="back-to-menu-btn" @click='store.setModeToMenu'>Back to menu</button>
    <table class="items-in-cart" v-if="cart.items.length">
      <tbody>
        <tr v-for="(item, index) in cart.groupedMenuItems" :key="index" class="item-row" :data-cy="`${item.name.slice(0, item.name.indexOf(' '))}-tr`">
          <ShoppingCartDetailsItem :item="item"/>
        </tr>
        <tr class="item-row total-row">
          <td></td>
          <td><strong>TOTAL</strong></td>
          <td id="totalValue"><strong>{{ cart.totalPrice }} lei</strong></td>
          <td><button id="order-btn" @click='order'>ORDER</button></td>
        </tr>
      </tbody>
    </table>
    <div class="no-items">
      <h2 v-if="hasJustOrdered">Your order was recieved and reset</h2>
      <h2 v-else-if="!cart.items.length">No menu items added yet</h2>
      <button class="back-to-menu-btn" @click='backToMenu'>Back to menu</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useShoppingCart } from '@/stores/cart'
import { store } from '@/stores/mode.js'
import ShoppingCartDetailsItem from '@/components/ShoppingCartDetailsItem'

const cart = useShoppingCart()

const hasJustOrdered = ref(false)

function order() {
  hasJustOrdered.value = true
  cart.resetOrder()
}

function backToMenu() {
  hasJustOrdered.value = false
  store.setModeToMenu()
}

</script>

<style scoped>
.items-in-cart {
  border: 1px solid #DC6E79;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}

.items-in-cart, .no-items {
  width: 80vw;
  margin: 1em auto;
}

.no-items {
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.item-row {
  border: 1px solid #DC6E79;
}

.total-row td {
  height: 150px;
  vertical-align: middle;
}

.total-row td:not(first-of-type) {
  border-left: 1px dashed #DC6E79;
}

.back-to-menu-btn {
  margin: 1em auto;
}

</style>
