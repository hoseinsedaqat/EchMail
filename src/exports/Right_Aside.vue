<template>
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
</template>

<script setup>
// import
import { side_bar_features } from "@/utils/SideBarFeatures";
</script>
