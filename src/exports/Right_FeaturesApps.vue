<template>
  <article>
    <div class="mx-2 dropdown dropdown-end">
      <label for="my-modal-3">
        <CogOutline class="cursor-pointer" />
      </label>
    </div>
    <div class="mx-2 dropdown dropdown-end">
      <label tabindex="0">
        <AppsIcon class="cursor-pointer" />
      </label>
      <ul
        tabindex="0"
        class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-72"
      >
        <div class="grid grid-cols-3">
          <p
            class="w-12 m-3 text-center"
            v-for="(apps, idx) in otherApps"
            :key="(apps, idx)"
          >
            <router-link :to="apps.link">
              <img :src="apps.img" :alt="apps.title" class="w-full" />
              <span class="text-sm w-full"> {{ apps.title }} </span>
            </router-link>
          </p>
        </div>
      </ul>
    </div>
    <right-user-profile></right-user-profile>
  </article>
</template>

<script setup>
// import
import CogOutline from "vue-material-design-icons/CogOutline.vue";
import RightUserProfile from "@/exports/Right_UserProfile.vue";
import AppsIcon from "vue-material-design-icons/Apps.vue";
import { otherApps } from "@/data/otherApps";
</script>
