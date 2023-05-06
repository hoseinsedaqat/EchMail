<template>
  <section id="keep">
    <div class="empty" v-if="keep_store.get_keeps_length === 0 ? true : false">
      <p class="text-2xl">
        <router-link to="/keep/create">
          <button class="btn bg-sky-600 text-white">+ Create Tasks</button>
        </router-link>
      </p>
    </div>
    <div class="show_keeps p-10" v-else>
      <div class="flex items-center justify-between">
        <h3 class="text-lg">Tasks</h3>
        <router-link to="/keep/create">
          <button class="btn bg-sky-600 btn-sm text-white">+ Create Tasks </button>
        </router-link>
      </div>
      <div
        v-for="(keep, idx) in keep_store.keeps"
        :key="(keep, idx)"
        class="flex flex-col my-2 border-2 shadow-sm p-5 rounded box-shadow"
      >
        <div class="flex items-center justify-between my-2">
          <p class="font-bold">{{ keep.note.substring(0, 6) + '...' }}</p>
          <p>{{ keep.time }}</p>
        </div>
        <p>
          {{ keep.note }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
// import 
import { keep } from "@/store/module/keep";
// data
const keep_store = keep();
</script>
