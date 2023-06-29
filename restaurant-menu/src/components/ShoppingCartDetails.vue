<template>
  <div class="shopping-cart-details">
    <table class="items-in-cart" v-if="cart.items.length">
      <tbody>
        <tr v-for="(item, index) in cart.items" :key="index" class="item-row">
          <td class="item-img">
            <img :src="require(`@/assets/menu/${item.image}_sm.jpg`)"  />
          </td>
          <td class="item-name">{{ item.name }}</td>
          <td class="item-price">{{ item.price }} lei</td>
          <td>
            <button @click="removeFromCart(item)">Remove</button>
          </td>
        </tr>
        <tr class="item-row">
          <td></td>
          <td><strong>TOTAL</strong></td>
          <td>{{ cart.totalPrice }} lei</td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <div v-else>No items selected yet</div>
  </div>
</template>

<script setup>
import { useShoppingCart } from '@/stores/cart'
const cart = useShoppingCart()

function removeFromCart(item) {
  cart.removeFromItems(item)
}

</script>

<style scoped>
.items-in-cart {
  width: 80vw;
  margin: 1em auto;
  border: 1px solid #DC6E79;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  line-height: 0;
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

</style>
