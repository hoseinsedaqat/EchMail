<template>
  <aside class="left-aside-container" id="left-aside">
    <section class="mt-7 mb-4" id="left-1">
      <button
        class="btn w-40 bg-info-content btn-circle"
        @click="sents_store.open_msg_box()"
      >
        <PencilOutlineIcon /> <span>Compose</span>
      </button>
    </section>
    <section id="left-2">
      <article v-for="(side, idx) in side_bar_components" :key="(side, idx)">
        <router-link :to="side.link">
          <div>
            <p>
              <component :is="side.components_icon"></component>
            </p>
            <p>{{ side.title }}</p>
          </div>
          <div class="badge badge-error text-white rounded-full" v-if="side.details">
            {{ inbox_store.inbox.length }}
          </div>
        </router-link>
      </article>
    </section>
  </aside>
</template>

<script setup>
// import
import PencilOutlineIcon from "vue-material-design-icons/PencilOutline.vue";
import { side_bar_components } from "@/utils/SideBarComponent";
import { inbox } from "@/store/module/inbox";
import { sents } from "@/store/module/sents";
// data
const inbox_store = inbox();
const sents_store = sents();
</script>
