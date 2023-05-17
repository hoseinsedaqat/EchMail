<template>
  <section id="n1">
    <left-title></left-title>
    <left-aside-lg v-if="layout_store.aside"></left-aside-lg>
    <left-aside-sm v-else></left-aside-sm>
    <left-new-message></left-new-message>
  </section>
</template>

<script setup>
// import
import LeftNewMessage from "@/exports/Left_NewMessage.vue";
import LeftAsideLg from "@/exports/Left_AsideLg.vue";
import LeftAsideSm from "@/exports/Left_AsideSm.vue";
import LeftTitle from "@/exports/Left_Title.vue";
import { layout } from "@/store/module/layout";
// data
const layout_store = layout();
</script>
