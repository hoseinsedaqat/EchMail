<template>
  <nav>
    <div class="cursor-pointer" @click="inbox_store.delete_msg">
      <TrashIcon />
    </div>
    <div>
      <p>1- 50 of 200</p>
    </div>
  </nav>
  <list-model
    :large_id="'inbox-lg'"
    :data="inbox_store.inbox"
    :small_id="'inbox-sm'"
    :links="'/message/inbox/'"
    :add_sttared="inbox_store.add_starred"
    :is_sttared="true"
  ></list-model>
</template>

<script setup>
// import
import TrashIcon from "vue-material-design-icons/TrashCanOutline.vue";
import ListModel from "@/components/model/ListModel.vue";
import { inbox } from "@/store/module/inbox";
// data
const inbox_store = inbox();
</script>
