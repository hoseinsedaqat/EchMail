<template>
  <section id="keep">
    <!-- Keep Empty -->
    <keep-empty v-if="keep_store.get_keeps_length === 0 ? true : false"></keep-empty>
    <!-- Keep List -->
    <keep-list v-else></keep-list>
  </section>
</template>

<script setup>
// import
import KeepEmpty from "./components/KeepEmpty.vue";
import KeepList from "./components/KeepList.vue";
import { keep } from "@/store/module/keep";
// data
const keep_store = keep();
</script>
