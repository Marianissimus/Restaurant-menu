<template>
  <div class="menu">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="item in items" :key="item.id">
        <MenuItemPreview :currentItem="item" />
      </li>
    </ul>
  </div>
</template>

<script>
import menu from '@/data/menu.json'
import MenuItemPreview from '@/components/MenuItemPreview'
import { ref } from "vue"

export default {
  components: {
    MenuItemPreview
  },
  setup() {
    const items = menu.menu
    const menuItems = ref(items);
    return {
      items: menuItems
    }
  }
}
</script>
