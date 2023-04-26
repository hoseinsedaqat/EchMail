<template>
  <!-- n1 -->
  <section id="n1">
    <!-- title and logo -->
    <aside id="left-aside-menu" class="flex items-center">
      <button class="btn btn-circle bg-white">
        <MenuIcon />
      </button>
      <div class="logo">
        <img :src="gmail_logo" alt="logo" class="ml-5 w-40" />
      </div>
    </aside>
    <!-- left side bar -->
    <aside class="left-aside-container" id="left-aside">
      <section class="mt-7 mb-4" id="left-1">
        <button class="btn w-40 bg-info-content btn-circle">
          <PencilOutlineIcon /> <span>Compose</span>
        </button>
      </section>
      <section id="left-2">
        <article v-for="(side, idx) in side_bar_components" :key="(side, idx)">
          <div>
            <p>
              <component :is="side.components_icon"></component>
            </p>
            <p>{{ side.title }}</p>
          </div>
          <div v-if="side.details">{{ side.details }}</div>
        </article>
      </section>
    </aside>
  </section>
</template>

<script setup>
import PencilOutlineIcon from "vue-material-design-icons/PencilOutline.vue";
import { side_bar_components } from "@/utils/SideBarComponent";
import MenuIcon from "vue-material-design-icons/Menu.vue";
import gmail_logo from "@/assets/media/img/GmailLogo.png";
</script>
