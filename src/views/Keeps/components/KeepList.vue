<template>
  <div class="show_keeps p-10">
    <div class="flex items-center justify-between">
      <h3 class="text-lg">Tasks</h3>
      <router-link to="/keep/create">
        <button class="btn bg-sky-600 btn-sm text-white">+ Create Tasks</button>
      </router-link>
    </div>
    <div
      v-for="(keep, idx) in keep_store.keeps"
      :key="(keep, idx)"
      class="flex flex-col my-2 border-2 shadow-sm p-5 rounded box-shadow"
    >
      <div class="flex items-center justify-between my-2">
        <p class="font-bold">
          {{ keep.note.length > 5 ? keep.note.substring(0, 6) + "..." : keep.note }}
        </p>
        <p>{{ keep.time }}</p>
      </div>
      <p class="break-words">
        {{ keep.note }}
      </p>
    </div>
  </div>
</template>

<script setup>
// import
import { keep } from "@/store/module/keep";
// data
const keep_store = keep();
</script>
