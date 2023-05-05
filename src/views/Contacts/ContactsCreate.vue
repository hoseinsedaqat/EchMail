<template>
  <section id="contacts_create" class="p-10">
    <div class="text-center flex flex-col items-center justify-center my-2">
      <AccountCircle :size="100" />
      <p>Create Contacts</p>
    </div>
    <article class="grid grid-cols-3 gap-4">
      <div class="form-control w-full my-2">
        <label class="label">
          <span class="label-text">First Name</span>
        </label>
        <input
          type="text"
          placeholder="First Name"
          class="input input-bordered w-full my-2"
          v-model="first_name"
        />
      </div>
      <div class="form-control w-full my-2">
        <label class="label">
          <span class="label-text">Last Name</span>
        </label>
        <input
          type="text"
          placeholder="Change Your Last Name"
          class="input input-bordered w-full my-2"
          v-model="last_name"
        />
      </div>
      <div class="form-control w-full my-2">
        <label class="label">
          <span class="label-text">Email</span>
        </label>
        <input
          type="text"
          placeholder="Change Your Email"
          class="input input-bordered w-full my-2"
          v-model="email"
        />
      </div>
    </article>
    <button class="btn btn-outline" @click="contacts_store.create_contacts(first_name,last_name,email)">
      Create Contacts
    </button>
  </section>
</template>

<script setup>
import AccountCircle from "vue-material-design-icons/AccountCircle.vue";
import { contacts } from "@/store/module/contacts";
import { ref } from "vue";
const first_name = ref("");
const last_name = ref("");
const email = ref("");
const contacts_store = contacts();
</script>
