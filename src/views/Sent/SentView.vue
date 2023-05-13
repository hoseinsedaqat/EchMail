<template>
  <section id="sent">
    <div class="empty" v-if="sents_store.get_sents_length === 0 ? true : false">
      <p class="text-2xl">Nothing In Sent</p>
    </div>
    <div v-else>
      <nav class="p-2">
        <div class="cursor-pointer" @click="sents_store.delete_msg">
          <TrashIcon />
        </div>
      </nav>
      <article
        id="sent-lg"
        class="grid grid-cols-8 items-center p-3 cursor-pointer"
        v-for="(msg, idx) in sents_store.sents"
        :key="(msg, idx)"
      >
        <div class="flex items-center">
          <input type="checkbox" class="checkbox checkbox-xs" v-model="msg.check" />
          <!-- <StarIcon :color="'yellow'" class="mx-2" /> -->
        </div>
        <div class="col-span-2">
          <p>{{ msg.to.substring(0, 15) + " ..." }}</p>
        </div>
        <div class="col-span-4">
          <router-link :to="'/message/sent/' + `${msg.id}`">
            <p>
              <span> {{ msg.subject.substring(0, 25) + "..." }} - </span>
              <span class="text-blue-400">
                {{ msg.message.substring(0, 15) + " ..." }}
              </span>
            </p>
          </router-link>
        </div>
        <div>
          <p class="text-sm">{{ msg.time }}</p>
        </div>
      </article>
      <!-- sm -->
      <article
        id="sent-sm"
        class="grid grid-cols-8 items-center p-3 cursor-pointer"
        v-for="(msg, idx) in sents_store.sents"
        :key="(msg, idx)"
      >
        <div class="flex items-center">
          <input type="checkbox" class="checkbox checkbox-xs" v-model="msg.check" />
          <!-- <StarIcon :color="'yellow'" class="mx-2" /> -->
        </div>
        <div class="col-span-5">
          <p>{{ msg.to.substring(0, 15) + " ..." }}</p>
          <router-link :to="'/message/sent/' + `${msg.id}`">
            <p>
              <span> {{ msg.subject.substring(0, 15) + "..." }} - </span>
              <span class="text-blue-400">
                {{ msg.message.substring(0, 10) + " ..." }}
              </span>
            </p>
          </router-link>
        </div>
        <div class="col-span-2">
          <p class="text-sm time-text">{{ msg.time }}</p>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
// import
// import StarIcon from "vue-material-design-icons/StarOutline.vue";
import TrashIcon from "vue-material-design-icons/TrashCanOutline.vue";
import { sents } from "@/store/module/sents";
// data
const sents_store = sents();
</script>
