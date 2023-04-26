<template>
  <div id="layout-app">
    <left-side-bar></left-side-bar>
    <inbox-layer></inbox-layer>
    <right-side-bar></right-side-bar>
  </div>
</template>

<script setup>
import LeftSideBar from "./components/LeftSideBar.vue";
import InboxLayer from "./components/InboxLayer.vue";
import RightSideBar from "./components/RightSideBar.vue";
</script>
