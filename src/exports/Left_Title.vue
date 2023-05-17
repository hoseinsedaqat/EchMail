<template>
  <!-- title and logo -->
  <aside id="left-aside-menu" class="flex items-center">
    <button class="btn btn-circle bg-white" @click="layout_store.aside_menu()">
      <MenuIcon />
    </button>
    <div class="logo">
      <router-link to="/">
        <img :src="gmail_logo" alt="logo" class="ml-5 w-40"
      /></router-link>
    </div>
  </aside>
</template>

<script setup>
// import
import MenuIcon from "vue-material-design-icons/Menu.vue";
import gmail_logo from "@/assets/media/img/GmailLogo.png";
import { layout } from "@/store/module/layout";
// data
const layout_store = layout();
</script>
