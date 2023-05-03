<template>
  <article class="grid grid-cols-8 items-center p-3 cursor-pointer" v-for="(msg,idx) in layout_store.inbox" :key="(msg,idx)">
    <div class="flex items-center">
      <input type="checkbox" class="checkbox checkbox-xs" v-model="msg.check"/>
      <StarIcon :bg-color="'yellow'" class="mx-2"/>
    </div>
    <div class="col-span-2">
      <p>{{ msg.to.substring(0,15) + ' ...' }}</p>
    </div>
   <div class="col-span-4">
        <router-link :to="'/message/'+`${msg.id}`">
          <p>
            <span> {{msg.subject.substring(0,25) + '...'}} - </span>
            <span class="text-blue-400"> {{ msg.message.substring(0,15) + ' ...' }} </span>
          </p>
        </router-link>
      </div>
    <div>
      <p class="text-sm">{{ msg.time }}</p>
    </div>
  </article>
</template>

<script setup>
import StarIcon from "vue-material-design-icons/StarOutline.vue";
import { layout } from "@/store/module/layout";
const layout_store = layout()
</script>
