<template>
  <header id="mobile">
    <nav>
      <main>
        <div>
          <MenuIcon @click="openNav" />
        </div>
        <div class="md:w-full sm:w-60">
          <input type="text" placeholder="Search" class="w-full"/>
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
        <a @click="closeNav">&times;</a>
        <router-link to="/starred" @click="closeNav">Starred</router-link>
        <router-link to="/calendar">Calendar</router-link>
        <router-link to="/keep">Keeps</router-link>
        <router-link to="/contacts">Contacts</router-link>
        <router-link to="/sent">Sent</router-link>
        <router-link to="/">Inbox</router-link>
        <router-link to="/compose/create">Compose</router-link>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
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
import MenuIcon from "vue-material-design-icons/Menu.vue";
import user_img from "@/assets/media/img/71232870.jpg";
import { setting } from "@/store/module/setting";
import { onMounted } from "vue";

// data
const setting_store = setting();

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
