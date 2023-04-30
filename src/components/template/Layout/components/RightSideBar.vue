<template>
  <!-- n3 -->
  <section id="n3" class="flex items-center flex-row justify-center mx-3">
    <article>
      <div class="mx-2">
        <CogOutline class="cursor-pointer" />
      </div>
      <div class="mx-2">
        <AppsIcon class="cursor-pointer" />
      </div>
      <div class="user-profile ml-2">
        <label for="my-modal-3">
          <img
            :src="user_img"
            alt="user-profile"
            class="rounded-full w-12 cursor-pointer"
          />
        </label>
      </div>
    </article>
    <aside>
      <div
        v-for="(features, idx) in side_bar_features"
        :key="(features, idx)"
        class="my-5 cursor-pointer"
      >
        <router-link :to="features.link" class="flex items-center">
          <img :src="features.img" :alt="features.img" class="w-10" />
          <p class="mx-3">{{ features.title }}</p>
        </router-link>
      </div>
    </aside>
  </section>
  <modal-app></modal-app>
</template>

<script setup>
import CogOutline from "vue-material-design-icons/CogOutline.vue";
import { side_bar_features } from "@/utils/SideBarFeatures";
import ModalApp from "@/components/Ui/Modal/ModalApp.vue";
import AppsIcon from "vue-material-design-icons/Apps.vue";
import user_img from "@/assets/media/img/71232870.jpg";
</script>
