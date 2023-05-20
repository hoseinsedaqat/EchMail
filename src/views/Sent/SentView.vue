<template>
  <section id="sent">
    <!-- Sent Empty -->
    <sent-empty v-if="sents_store.get_sents_length === 0 ? true : false"></sent-empty>
    <!-- Sent List -->
    <sent-list v-else></sent-list>
  </section>
</template>

<script setup>
// import
import SentEmpty from "./components/SentEmpty.vue";
import SentList from "./components/SentList.vue";
import { sents } from "@/store/module/sents";
// data
const sents_store = sents();
</script>
