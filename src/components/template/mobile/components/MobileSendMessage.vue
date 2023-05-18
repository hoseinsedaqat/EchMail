<template>
  <button id="mobile-compose">
    <router-link to="/compose/create">
      <img
        :src="Create_Compose"
        alt="Create_Compose"
    /></router-link>
  </button>
</template>

<script setup>
import Create_Compose from '@/assets/media/img/Create_Compose.png'
</script>
