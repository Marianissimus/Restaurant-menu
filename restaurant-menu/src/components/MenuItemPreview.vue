<template>
  <div class="menu-preview">
    <h1 class="top">
      <div class="name">{{ item.name }}</div>
      <div class="price">{{ item.price }}&nbsp;lei</div>
    </h1>
    <div class="content">
      <div class="description">
        {{ item.description }}
      </div>
      <div class="menu-image">
        <img :src="require(`@/assets/menu/${item.image}_sm.jpg`)" />
      </div>
    </div>
    <div class="bottom">
      <button class="add-to-cart" @click="addToCart(item)">Add to cart</button>
    </div>
  </div>
</template>

<script>
import { toRefs } from "vue"
import { useShoppingCart } from '@/stores/cart'

export default {
  props: ['currentItem'],
  setup(props) {
    const item = toRefs(props)
    const cart = useShoppingCart()

    function addToCart(item) {
      cart.addToItems(item)
    }

    return {
      item: item.currentItem,
      addToCart,
    }
  }
}

</script>

<style scoped>
.menu-preview {
  width: 80vw;
  margin: 1em auto;
  padding: 1em;
  display: flex;
  border: 1px solid #DC6E79;
  flex-direction: column;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.description {
  padding-right: .3em;
}

.bottom {
  text-align: center;
  padding-top: 1em;
}

.top, .bottom {
  height: 50px;
}

.menu-image img {
  width: 250px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}

.top {
  display: flex;
  justify-content: space-between;
}

.name {
  text-transform: capitalize;
  color: #A0334B;
}

.price {
  color: #DC6E79;
}

</style>
