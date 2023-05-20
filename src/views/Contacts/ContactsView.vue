<template>
  <section id="contacts">
    <!-- contacts empty -->
    <contacts-empty
      v-if="contacts_store.get_contacts_length === 0 ? true : false"
    ></contacts-empty>
    <!-- contacts list -->
    <contacts-list v-else></contacts-list>
  </section>
</template>

<script setup>
// import
import ContactsEmpty from "./components/ContactsEmpty.vue";
import ContactsList from "./components/ContactsList.vue";
import { contacts } from "@/store/module/contacts";
// data
const contacts_store = contacts();
</script>
