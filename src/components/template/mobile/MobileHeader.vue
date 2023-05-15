<template>
  <header id="mobile">
    <nav>
      <main>
        <div>
          <MenuIcon @click="openNav" />
        </div>
        <div class="md:w-full sm:w-60">
          <input type="text" placeholder="Search" class="w-full" />
        </div>
        <div>
          <img
            :src="setting_store.img"
            alt="user_profile_img"
            class="rounded-full w-12 h-12 cursor-pointer"
          />
        </div>
      </main>

      <!-- menu content -->
      <div id="mySidenav" class="sidenav">
        <div class="flex items-center justify-between">
          <router-link to="/"> <h3 class="text-red-700 text-lg">Gmail</h3></router-link>
          <a @click="closeNav" class="text-2xl">
            <Close />
          </a>
        </div>
        <article v-for="(side, idx) in side_bar_components_mobile" :key="(side, idx)">
          <router-link :to="side.link" @click="closeNav">
            <div class="flex items-center">
              <p>
                <component :is="side.components_icon"></component>
              </p>
              <p class="mx-4">{{ side.title }}</p>
              <div class="badge badge-error text-white rounded-full" v-if="side.details">
                {{ inbox_store.inbox.length }}
              </div>
            </div>
          </router-link>
        </article>
        <div class="mx-4">
          <p class="my-2 flex items-center">
            <img
              :src="setting_store.img"
              alt="user_img"
              class="rounded-full w-8 h-8 cursor-pointer mr-2"
            />
            {{
              setting_store.user_mail.length > 20
                ? setting_store.user_mail.substring(0, 20) + "..."
                : setting_store.user_mail
            }}
          </p>
        </div>
      </div>
    </nav>
  </header>
  <button id="mobile-compose">
    <router-link to="/compose/create">
      <img
        src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png"
        alt=""
    /></router-link>
  </button>
</template>

<script setup>
// import
import { side_bar_components_mobile } from "@/utils/SideBarComponent";
import MenuIcon from "vue-material-design-icons/Menu.vue";
import Close from "vue-material-design-icons/Close.vue";
import user_img from "@/assets/media/img/71232870.jpg";
import { setting } from "@/store/module/setting";
import { inbox } from "@/store/module/inbox";
import { onMounted } from "vue";

// data
const setting_store = setting();
const inbox_store = inbox();

// methods
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
// mounted
onMounted(() => {
  setting_store.img = user_img;
});
</script>
