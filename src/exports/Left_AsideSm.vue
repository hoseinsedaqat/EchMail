<template>
  <aside class="left-aside-container-sm" id="left-aside-sm">
    <section class="mt-7 mb-4" id="left-1">
      <button
        class="btn w-20 bg-info-content btn-circle"
        @click="sents_store.open_msg_box()"
      >
        <PencilOutlineIcon />
      </button>
    </section>
    <section id="left-2">
      <article v-for="(side, idx) in side_bar_components_sm" :key="(side, idx)">
        <div class="tooltip tooltip-right" :data-tip="side.title">
          <router-link :to="side.link">
            <p>
              <component :is="side.components_icon"></component>
            </p>
          </router-link>
        </div>
      </article>
    </section>
  </aside>
</template>

<script setup>
// import
import PencilOutlineIcon from "vue-material-design-icons/PencilOutline.vue";
import { side_bar_components_sm } from "@/utils/SideBarComponent";
import { sents } from "@/store/module/sents";
// data
const sents_store = sents();
</script>
