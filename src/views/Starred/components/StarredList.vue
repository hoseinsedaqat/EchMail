<template>
  <!-- we will bring it to components -->
  <div>
    <nav class="p-2">
      <div class="cursor-pointer" @click="inbox_store.delete_msg">
        <TrashIcon />
      </div>
    </nav>
    <list-model
      :large_id="'starred-lg'"
      :data="inbox_store.starred"
      :small_id="'starred-sm'"
      :links="'/message/sttared/'"
      :add_sttared="inbox_store.add_starred"
      :is_sttared="true"
    ></list-model>
  </div>
</template>

<script setup>
// import
import TrashIcon from "vue-material-design-icons/TrashCanOutline.vue";
import ListModel from "@/components/model/ListModel.vue";
import { inbox } from "@/store/module/inbox";
// data
const inbox_store = inbox();
</script>
