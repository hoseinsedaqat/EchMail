<template>
  <section id="starred">
    <!-- Starred Empty -->
    <starred-empty
      v-if="inbox_store.get_starred_length === 0 ? true : false"
    ></starred-empty>
    <!-- Starred List -->
    <starred-list v-else></starred-list>
  </section>
</template>

<script setup>
// import
import StarredEmpty from "./components/StarredEmpty.vue";
import StarredList from "./components/StarredList.vue";
import { inbox } from "@/store/module/inbox";
// data
const inbox_store = inbox();
</script>
