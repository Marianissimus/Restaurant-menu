<template>
  <div class="menu">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="item in menuItems" :key="item.id">
        <MenuItemPreview :item="item" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import menu from '@/data/menu.json'
import MenuItemPreview from '@/components/MenuItemPreview'
const items = menu.menu

import { ref } from "vue"
// import {ref, onMounted, watch} from "vue";

const menuItems = ref(items);
// items.value.push(...menuItems)
// // const text = ref("");

</script>
