<template>
  <section id="starred">
    <div class="empty" v-if="inbox_store.get_starred_length === 0 ? true : false">
      <p class="text-2xl">Nothing In Starred</p>
    </div>
    <!-- we will bring it to components -->
    <div v-else>
      <nav class="p-2">
        <div class="cursor-pointer" @click="inbox_store.delete_msg">
          <TrashIcon />
        </div>
      </nav>
      <article
        id="starred-lg"
        class="grid grid-cols-8 items-center p-3 cursor-pointer"
        v-for="(msg, idx) in inbox_store.starred"
        :key="(msg, idx)"
      >
        <div class="flex items-center">
          <input type="checkbox" class="checkbox checkbox-xs" v-model="msg.check" />
          <StarIcon
            class="mx-2"
            :class="msg.starred ? 'text-yellow-400' : ''"
            @click="inbox_store.add_starred(msg.id)"
          />
        </div>
        <div class="col-span-2">
          <p>{{ msg.to.substring(0, 15) + " ..." }}</p>
        </div>
        <div class="col-span-4">
          <router-link :to="'/message/sttared/' + `${msg.id}`">
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
        id="starred-sm"
        class="grid grid-cols-8 items-center p-3 cursor-pointer"
        v-for="(msg, idx) in inbox_store.starred"
        :key="(msg, idx)"
      >
        <div class="flex items-center">
          <input type="checkbox" class="checkbox checkbox-xs" v-model="msg.check" />
          <StarIcon
            :size="17"
            class="mx-2"
            :class="msg.starred ? 'text-yellow-400' : ''"
            @click="inbox_store.add_starred(msg.id)"
          />
        </div>
        <div class="col-span-5">
          <p>{{ msg.to.substring(0, 15) + " ..." }}</p>
          <router-link :to="'/message/sttared/' + `${msg.id}`">
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
import TrashIcon from "vue-material-design-icons/TrashCanOutline.vue";
import StarIcon from "vue-material-design-icons/StarOutline.vue";
import { inbox } from "@/store/module/inbox";
// data
const inbox_store = inbox();
</script>
