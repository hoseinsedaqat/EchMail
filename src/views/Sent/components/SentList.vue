<template>
  <div>
    <nav class="p-2">
      <div class="cursor-pointer" @click="sents_store.delete_msg">
        <TrashIcon />
      </div>
    </nav>
    <list-model
      :large_id="'sent-lg'"
      :data="sents_store.sents"
      :small_id="'sent-sm'"
      :links="'/message/sent/'"
      :is_sttared="false"
    ></list-model>
    <!-- <article
      id="sent-lg"
      class="grid grid-cols-8 items-center p-3 cursor-pointer"
      v-for="(msg, idx) in sents_store.sents"
      :key="(msg, idx)"
    >
      <div class="flex items-center">
        <input type="checkbox" class="checkbox checkbox-xs" v-model="msg.check" />
        <StarIcon :color="'yellow'" class="mx-2" />
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
    </article> -->
    <!-- sm -->
    <!-- <article
      id="sent-sm"
      class="grid grid-cols-8 items-center p-3 cursor-pointer"
      v-for="(msg, idx) in sents_store.sents"
      :key="(msg, idx)"
    >
      <div class="flex items-center">
        <input type="checkbox" class="checkbox checkbox-xs" v-model="msg.check" />
        <StarIcon :color="'yellow'" class="mx-2" />
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
    </article> -->
  </div>
</template>

<script setup>
// import
// import StarIcon from "vue-material-design-icons/StarOutline.vue";
import TrashIcon from "vue-material-design-icons/TrashCanOutline.vue";
import ListModel from "@/components/model/ListModel.vue";
import { sents } from "@/store/module/sents";
// data
const sents_store = sents();
</script>
