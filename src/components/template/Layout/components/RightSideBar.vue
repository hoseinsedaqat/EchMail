<template>
  <!-- n3 -->
  <section id="n3" class="flex items-center flex-row justify-center mx-3">
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
            <p class="w-12 m-3 text-center">
              <img :src="GoogleCalendar" alt="GoogleCalendar" class="w-full" />
              <span class="text-sm w-full">Calendar</span>
            </p>
            <p class="w-12 m-3 text-center">
              <img :src="GoogleContacts" alt="GoogleContacts" class="w-full" />
              <span class="text-sm w-full">Contacts</span>
            </p>
            <p class="w-12 m-3 text-center">
              <img :src="GoogleKeep" alt="GoogleKeep" class="w-full" />
              <span class="text-sm w-full">Keep</span>
            </p>
            <p class="w-12 m-3 text-center">
              <img :src="GoogleTasks" alt="GoogleTasks" class="w-full" />
              <span class="text-sm w-full">Tasks</span>
            </p>
            <p class="w-12 m-3 text-center">
              <img :src="GoogleEarth" alt="GoogleEarth" class="w-full" />
              <span class="text-sm w-full">Earth</span>
            </p>
            <p class="w-12 m-3 text-center">
              <img :src="GoogleMeet" alt="GoogleMeet" class="w-full" />
              <span class="text-sm w-full">Meet</span>
            </p>
            <p class="w-12 m-3 text-center">
              <img :src="GooglePhotos" alt="GooglePhotos" class="w-full" />
              <span class="text-sm w-full">Photos</span>
            </p>
            <p class="w-12 m-3 text-center">
              <img :src="GoogleGmail" alt="GoogleGmail" class="w-full" />
              <span class="text-sm w-full">Gmail</span>
            </p>
            <p class="w-12 m-3 text-center">
              <img :src="GoogleHome" alt="GoogleHome" class="w-full" />
              <span class="text-sm w-full">Home</span>
            </p>
            <p class="w-12 m-3 text-center">
              <img :src="GoogleWellBeing" alt="GoogleWellBeing" class="w-full" />
              <span class="text-sm w-full">WellBeing</span>
            </p>
            <p class="w-12 m-3 text-center">
              <img :src="GoogleDocs" alt="GoogleDocs" class="w-full" />
              <span class="text-sm w-full">Docs</span>
            </p>
            <p class="w-12 m-3 text-center">
              <img :src="GoogleSheets" alt="GoogleSheets" class="w-full" />
              <span class="text-sm w-full">Sheets</span>
            </p>
          </div>
        </ul>
      </div>
      <div class="user-profile ml-2 dropdown dropdown-end">
        <label tabindex="0">
          <img
            :src="setting_store.img"
            alt="user-profile"
            class="rounded-full w-12 h-12 cursor-pointer"
          />
        </label>
        <ul
          tabindex="0"
          class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-96"
        >
          <div class="text-center">
            <p class="my-2">Name: {{ setting_store.user_name }}</p>
            <p class="my-2">Account: {{ setting_store.user_mail }}</p>
            <button class="btn btn-info btn-sm my-2">Sign out</button>
          </div>
        </ul>
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
  <!-- fix img in all pages sents and data message is diffrent -->
</template>

<script setup>
import GoogleWellBeing from "@/assets/media/img/GoogleWellBeing.webp";
import GoogleCalendar from "@/assets/media/img/GoogleCalendar.png";
import GoogleContacts from "@/assets/media/img/GoogleContacts.png";
import CogOutline from "vue-material-design-icons/CogOutline.vue";
import GooglePhotos from "@/assets/media/img/GooglePhotos.webp";
import GoogleSheets from "@/assets/media/img/GoogleSheets.webp";
import GoogleGmail from "@/assets/media/img/GoogleGmail.webp";
import GoogleTasks from "@/assets/media/img/GoogleTasks.png";
import ModalApp from "@/components/Ui/Modal/ModalApp.vue";
import GoogleEarth from "@/assets/media/img/GoogleEarth.png";
import { side_bar_features } from "@/utils/SideBarFeatures";
import GoogleMeet from "@/assets/media/img/GoogleMeet.webp";
import GoogleHome from "@/assets/media/img/GoogleHome.webp";
import GoogleDocs from "@/assets/media/img/GoogleDocs.webp";
import GoogleKeep from "@/assets/media/img/GoogleKeep.png";
import AppsIcon from "vue-material-design-icons/Apps.vue";
import user_img from "@/assets/media/img/71232870.jpg";
import { setting } from "@/store/module/setting";
import { onMounted } from "vue";
const setting_store = setting();

onMounted(() => {
  setting_store.img = user_img;
});
</script>
