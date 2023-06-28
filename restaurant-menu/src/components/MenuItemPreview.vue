<template>
  <div>
    <div>{{ item }}</div>
    <div class="name">{{ item.name }}</div>
    <div class="description">{{ item.description }}</div>
    <div class="image">
      <img :src="require(`@/assets/menu/${item.image}_sm.jpg`)"
      />
    </div>
    <div class="price">{{ item.price }}</div>
    <div class="rating">{{ item.rating }}</div>
    <div class="type">{{ item.type }}</div>
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
