<template>
  <div class="shopping-cart-details">
    <button v-if="cart.items.length" class="back-to-menu-btn" @click='store.setModeToMenu'>Back to menu</button>
    <table class="items-in-cart" v-if="cart.items.length">
      <tbody>
        <tr v-for="(item, index) in cart.groupedMenuItems" :key="index" class="item-row">
          <td class="item-img">
            <img :src="require(`@/assets/menu/${item.image}_sm.jpg`)"  />
          </td>
          <td class="item-name">{{ item.name }}</td>
          <td class="item-price">
            <div class="item-price-inside">
              <span>{{ item.price }}</span>
              <span v-if="item.times > 1">&nbsp;X&nbsp;{{ item.times }}</span>
             </div>
            <div v-if="item.times > 1" class="total">{{ item.times * item.price }}</div>
          </td>
          <td class="remove-item">
            <button class="square" @click="removeFromCart(item)">
              <span v-if="item.times > 1">-1</span>
              <span v-else class="delete-symbol">&#128465;</span>
            </button>
            <button class="square" @click="addToCart(item)">
              <span>+1</span>
            </button>
          </td>
        </tr>
        <tr class="item-row">
          <td></td>
          <td><strong>TOTAL</strong></td>
          <td><strong>{{ cart.totalPrice }} lei</strong></td>
          <td><button @click='order'>ORDER</button></td>
        </tr>
      </tbody>
    </table>
    <div v-else class="no-items">
      <h2>No menu items added yet</h2>
      <button @click='store.setModeToMenu'>Go to menu</button>
    </div>
  </div>
</template>

<script setup>
import { useShoppingCart } from '@/stores/cart'
import { store } from '@/stores/mode.js'
const cart = useShoppingCart()

function removeFromCart(item) {
  cart.removeFromItems(item)
}

function addToCart(item) {
  cart.addToItems(item)
}

function order() {
  cart.resetOrder()
  store.setModeToMenu()
}

</script>

<style scoped>
.items-in-cart, .no-items {
  width: 80vw;
  margin: 1em auto;
  border: 1px solid #DC6E79;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
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

.item-row td {
  height: 150px;
  vertical-align: middle;
  border: 1px dashed #DC6E79;
}

.item-img img {
  height: 100px;
}

.item-name {
  text-transform: capitalize;
}

.total {
  border-top: 1px dashed #DC6E79;
  padding-top: .4em;
}

.item-price-inside {
  padding-bottom: .4em;
}

.remove-item {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.square {
  width: 40px;
  height: 40px;
}

.delete-symbol {
  font-size: 1.3em;
  position: relative;
  top: -2px;
}

.back-to-menu-btn {
  margin: 1em auto;
}

</style>
