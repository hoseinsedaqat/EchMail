<template>
  <nav>
    <div class="cursor-pointer" @click="layout_store.delete_msg">
      <TrashIcon />
    </div>
    <div>
      <p>1- 50 of 153</p>
    </div>
  </nav>
</template>

<script setup>
import TrashIcon from "vue-material-design-icons/TrashCanOutline.vue";
import { layout } from "@/store/module/layout";
const layout_store = layout()
</script>
