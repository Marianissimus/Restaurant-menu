<template>
  <div>

    {{ item }}
<!--     <div class="description">{{ item.description }}</div>
    <div class="price">{{ item.price }}</div>
    <div class="rating">{{ item.rating }}</div> -->
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
const item = defineProps(['item'])

</script>
