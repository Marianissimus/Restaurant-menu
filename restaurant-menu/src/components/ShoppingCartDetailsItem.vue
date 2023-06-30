<template>
  <td class="item-img">
    <img :src="require(`@/assets/menu/${ordered.image}_sm.jpg`)"  />
  </td>
  <td class="item-name">{{ ordered.name }}</td>
  <td class="item-price">
    <div class="item-price-inside">
      <span class="item-unit-price">{{ ordered.price }}</span>
      <span v-if="isMultipleOrder">&nbsp;X&nbsp;</span>
      <span v-if="isMultipleOrder" class="item-times">{{ ordered.times }}</span>
     </div>
    <div v-if="isMultipleOrder" class="subtotal">{{ ordered.times * ordered.price }}</div>
  </td>
  <td class="remove-item">
    <button class="square remove-item-btn" @click="removeFromCart(ordered)">
      <span v-if="isMultipleOrder">-1</span>
      <span v-else class="delete-symbol">&#128465;</span>
    </button>
    <button class="square add-item-btn" @click="addToCart(ordered)">
      <span>+1</span>
    </button>
  </td>
</template>

<script>
import { toRefs, computed } from "vue"
import { useShoppingCart } from '@/stores/cart'

export default {
  props: ['item'],
  setup(props) {
    const item = toRefs(props)
    const cart = useShoppingCart()

    function removeFromCart(item) {
      cart.removeFromItems(item)
    }

    function addToCart(item) {
      cart.addToItems(item)
    }

    const isMultipleOrder = computed(() => {
      return item.item.value.times > 1
    })

    return {
      ordered: item.item,
      removeFromCart,
      addToCart,
      isMultipleOrder,
    }
  }

}
</script>

<style scoped>

td {
  height: 150px;
  vertical-align: middle;
}

td:not(first-of-type) {
  border-left: 1px dashed #DC6E79;
}

.item-img img {
  height: 100px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}

.item-name {
  text-transform: capitalize;
}

.subtotal {
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

</style>
