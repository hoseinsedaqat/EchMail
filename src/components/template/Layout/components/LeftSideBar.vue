<template>
  <section id="n1">
    <!-- title and logo -->
    <aside id="left-aside-menu" class="flex items-center">
      <button class="btn btn-circle bg-white" @click="aside_fun()">
        <MenuIcon />
      </button>
      <div class="logo">
        <router-link to="/">
          <img :src="gmail_logo" alt="logo" class="ml-5 w-40"
        /></router-link>
      </div>
    </aside>
    <!-- left side bar -->
    <aside class="left-aside-container" id="left-aside" v-if="aside">
      <section class="mt-7 mb-4" id="left-1">
        <button class="btn w-40 bg-info-content btn-circle" @click="open_msg()">
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
    <!-- sm -->
    <aside class="left-aside-container-sm" id="left-aside-sm" v-else>
      <section class="mt-7 mb-4" id="left-1">
        <button class="btn w-20 bg-info-content btn-circle" @click="open_msg()">
          <PencilOutlineIcon />
        </button>
      </section>
      <section id="left-2">
        <article v-for="(side, idx) in side_bar_components_sm" :key="(side, idx)">
          <div class="tooltip tooltip-right" :data-tip="side.title">
            <p>
              <component :is="side.components_icon"></component>
            </p>
          </div>
        </article>
      </section>
    </aside>
    <article id="new-message" v-if="close_nav">
      <!-- header -->
      <div class="nmh">
        <p>New Message</p>
        <p class="nmh-icon">
          <MinusIcon />
          <ArrowExpand />
          <Close @click="close_msg()" />
        </p>
      </div>
      <!-- content -->
      <div class="nmc">
        <input type="email" placeholder="To" />
        <input type="text" placeholder="Subject" />
        <textarea class="textarea" placeholder="Message" rows="7"></textarea>
      </div>
      <!-- footer -->
      <button class="btn btn-info btn-sm my-2 mx-2">Send Message</button>
    </article>
  </section>
</template>

<script setup>
import PencilOutlineIcon from "vue-material-design-icons/PencilOutline.vue";
import ArrowExpand from "vue-material-design-icons/ArrowExpand.vue";
import { side_bar_components_sm } from "@/utils/SideBarComponent";
import { side_bar_components } from "@/utils/SideBarComponent";
import MinusIcon from "vue-material-design-icons/Minus.vue";
import MenuIcon from "vue-material-design-icons/Menu.vue";
import gmail_logo from "@/assets/media/img/GmailLogo.png";
import Close from "vue-material-design-icons/Close.vue";
import { ref } from "vue";
// data
const close_nav = ref(false);
const aside = ref(true);
function open_msg() {
  close_nav.value = true;
}
function close_msg() {
  close_nav.value = false;
}
function aside_fun() {
  if (aside.value) {
    aside.value = false;
    document.getElementById("n1").style.width = "10%";
    document.getElementById("n2").style.width = "75%";
  } else {
    aside.value = true;
    document.getElementById("n1").style.width = "15%";
    document.getElementById("n2").style.width = "70%";
  }
}
</script>
