<template>
  <section id="contacts">
    <div class="empty" v-if="contacts_store.get_contacts_length === 0 ? true : false">
      <p class="text-2xl">
        <router-link to="/contact/create">
          <button class="btn bg-sky-600 text-white">+ Contacts Create </button>
        </router-link>
      </p>
    </div>
    <div class="show_contacts p-10" v-else>
      <div class="flex items-center justify-between">
        <h3 class="text-lg">Contacts</h3>
        <router-link to="/contact/create">
        <button class="btn bg-sky-600 btn-sm text-white">+ Contact Create</button>
        </router-link>
      </div>
      <div id="contacts_view" v-for="(contact,idx) in contacts_store.contacts" :key="(contact,idx)" class="flex items-center justify-between my-2 border-2 shadow-sm p-5 rounded box-shadow">
        <div>
          <AccountCircle :size="40" />
        </div>
        <div>
            <p>{{ contact.first_name + ' ' + contact.last_name }}</p>
            <p class="text-primary-focus">{{ contact.email }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// import
import AccountCircle from "vue-material-design-icons/AccountCircle.vue";
import { contacts } from "@/store/module/contacts";
// data
const contacts_store = contacts();
</script>
