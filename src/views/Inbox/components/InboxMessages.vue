<template>
  <nav>
    <div class="cursor-pointer" @click="inbox_store.delete_msg">
      <TrashIcon/>
    </div>
    <div>
      <p>1- 50 of 200</p>
    </div>
  </nav>
  <article
    class="grid grid-cols-8 items-center p-3 cursor-pointer"
    v-for="(msg, idx) in inbox_store.inbox"
    :key="(msg, idx)"
  >
    <div class="flex items-center">
      <input type="checkbox" class="checkbox checkbox-xs" v-model="msg.check" />
      <StarIcon class="mx-2" :class="msg.starred ? 'text-yellow-400': ''" @click="inbox_store.add_starred(msg.id)"/>
    </div>
    <div class="col-span-2">
      <p>{{ msg.to.substring(0, 15) + " ..." }}</p>
    </div>
    <div class="col-span-4">
      <router-link :to="'/message/inbox/' + `${msg.id}`">
        <p>
          <span> {{ msg.subject.substring(0, 25) + "..." }} - </span>
          <span class="text-blue-400"> {{ msg.message.substring(0, 15) + " ..." }} </span>
        </p>
      </router-link>
    </div>
    <div>
      <p class="text-sm">{{ msg.time }}</p>
    </div>
  </article>
</template>

<script setup>
// import
import TrashIcon from "vue-material-design-icons/TrashCanOutline.vue";
import StarIcon from "vue-material-design-icons/StarOutline.vue";
import { inbox } from "@/store/module/inbox";
// data
const inbox_store = inbox();
</script>
