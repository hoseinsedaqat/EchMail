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
  </div>
</template>

<script setup>
// import
import TrashIcon from "vue-material-design-icons/TrashCanOutline.vue";
import ListModel from "@/components/model/ListModel.vue";
import { sents } from "@/store/module/sents";
// data
const sents_store = sents();
</script>
