<template>
  <section id="keep_create" class="p-10">
    <div class="text-center flex flex-col items-center justify-center my-2">
      <NotebookPlus :size="100" />
      <p>Create Tasks</p>
    </div>
    <article class="grid grid-cols-4 gap-4">
      <div class="form-control w-full my-2 col-span-4">
        <label class="label">
          <span class="label-text">What's in your mind ?</span>
        </label>
        <textarea name="keep_note" id="keep_note" cols="30" rows="10" v-model="keep_store.note"></textarea>
      </div>
    </article>
    <button class="btn btn-outline" @click="keep_store.add_keeps(keep_store.note)">
      Create Tasks
    </button>
  </section>
</template>

<script setup>
// import 
import NotebookPlus from "vue-material-design-icons/NotebookPlus.vue";
import { keep } from "@/store/module/keep";
// data
const keep_store = keep();
</script>