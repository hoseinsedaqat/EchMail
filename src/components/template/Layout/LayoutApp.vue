<template>
  <mobile-header></mobile-header>
  <div id="layout-app">
    <left-side-bar></left-side-bar>
    <inbox-layer></inbox-layer>
    <right-side-bar></right-side-bar>
  </div>
</template>

<script setup>
// import
import RightSideBar from "./components/RightSideBar.vue";
import LeftSideBar from "./components/LeftSideBar.vue";
import InboxLayer from "./components/InboxLayer.vue";
import MobileHeader from '../mobile/MobileHeader.vue'
</script>
