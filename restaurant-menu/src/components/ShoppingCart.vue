<template>
  <div class="shopping-cart">
    Your cart
    <img src="@/assets/shoppingCart.svg" class="shopping-cart-img">
    <div class="how-many-items">3</div>
  </div>
</template>

<script>
export default {
  setup() {
    console.log('in here')
  }
}
</script>

<style scoped>
.shopping-cart {
  position: fixed;
  top: .4em;
  right: .4em;
  width: 100px;
  height: 100px;
  background-color: white;
  padding-top: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  cursor: pointer;
}

.shopping-cart-img {
  width: 50px;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.how-many-items {
  position: absolute;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #A0334B;
  font-size: 18px;
  font-weight: bold;
}
</style>