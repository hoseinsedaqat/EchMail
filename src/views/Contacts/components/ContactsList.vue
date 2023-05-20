<template>
  <div class="show_contacts p-10">
    <div class="flex items-center justify-between">
      <h3 class="text-lg">Contacts</h3>
      <router-link to="/contact/create">
        <button class="btn bg-sky-600 btn-sm text-white">+ Contact Create</button>
      </router-link>
    </div>
    <div
      id="contacts_view"
      v-for="(contact, idx) in contacts_store.contacts"
      :key="(contact, idx)"
      class="flex items-center justify-between my-2 border-2 shadow-sm p-5 rounded box-shadow"
    >
      <div>
        <AccountCircle :size="40" />
      </div>
      <div>
        <p>{{ contact.first_name + " " + contact.last_name }}</p>
        <p class="text-primary-focus">{{ contact.email }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// import
import AccountCircle from "vue-material-design-icons/AccountCircle.vue";
import { contacts } from "@/store/module/contacts";
// data
const contacts_store = contacts();
</script>
