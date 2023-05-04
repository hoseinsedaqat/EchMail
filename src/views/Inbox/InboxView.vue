<template>
  <section id="inbox">
    <inbox-empty v-if="layout_store.get_inbox_length === 0 ? true : false"></inbox-empty>
    <inbox-messages v-else></inbox-messages>
  </section>
</template>

<script setup>
import InboxMessages from "./components/InboxMessages.vue";
import InboxEmpty from "./components/InboxEmpty.vue";
import { layout } from "@/store/module/layout";
const layout_store = layout();
</script>
