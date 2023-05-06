<template>
  <section id="inbox">
    <inbox-empty v-if="inbox_store.get_inbox_length === 0 ? true : false"></inbox-empty>
    <inbox-messages v-else></inbox-messages>
  </section>
</template>

<script setup>
// import
import InboxMessages from "./components/InboxMessages.vue";
import InboxEmpty from "./components/InboxEmpty.vue";
import { inbox } from "@/store/module/inbox";
// data
const inbox_store = inbox();
</script>
