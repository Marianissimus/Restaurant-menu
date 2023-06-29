<template>
  <div class="menu-preview">
    <h1 class="top">
      <span>{{ item.name }}&nbsp;</span>
      <span>{{ item.rating }}</span>
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
        <div class="price">{{ item.price }}&nbsp;lei</div>
        <button>Add to cart</button>
    </div>
  </div>
</template>

<script>
import { toRefs } from "vue"

export default {
  props: ['currentItem'],
  setup(props) {
    const item = toRefs(props)
    return {
      item: item.currentItem
    }
  }
}

</script>

<style scoped>
.menu-preview {
  width: 80vw;
  margin: 1em auto;
  display: flex;
  border: 1px solid red;
  flex-direction: column;
}

.content, .bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu-image img {
  width: 250px;
}

.top {
  color: #A0334B;
  text-transform: capitalize;
  padding: .4em;
}

</style>
