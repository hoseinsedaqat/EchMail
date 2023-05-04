<template>
  <section id="n1">
    <!-- title and logo -->
    <aside id="left-aside-menu" class="flex items-center">
      <button class="btn btn-circle bg-white" @click="layout_store.aside_menu()">
        <MenuIcon />
      </button>
      <div class="logo">
        <router-link to="/">
          <img :src="gmail_logo" alt="logo" class="ml-5 w-40"
        /></router-link>
      </div>
    </aside>
    <!-- left side bar -->
    <aside class="left-aside-container" id="left-aside" v-if="layout_store.aside">
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
            <div v-if="side.details">{{ side.details }}</div>
          </router-link>
        </article>
      </section>
    </aside>
    <!-- sm -->
    <aside class="left-aside-container-sm" id="left-aside-sm" v-else>
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
    <article id="new-message" v-if="sents_store.msg_box" class="shadow-2xl">
      <!-- header -->
      <div class="nmh">
        <p>New Message</p>
        <p class="nmh-icon">
          <MinusIcon />
          <ArrowExpand />
          <Close @click="sents_store.close_msg_box()" />
        </p>
      </div>
      <!-- content -->
      <div class="nmc">
        <input type="email" placeholder="To" v-model="sents_store.to" />
        <input type="text" placeholder="Subject" v-model="sents_store.subject" />
        <textarea
          class="textarea"
          placeholder="Message"
          rows="7"
          v-model="sents_store.message"
        ></textarea>
      </div>
      <!-- footer -->
      <button class="btn btn-info btn-sm my-2 mx-2" @click="sents_store.sent_message()">
        Send Message
      </button>
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
import { layout } from "@/store/module/layout";
import { sents } from "@/store/module/sents";
// layout
const layout_store = layout();
// sents
const sents_store = sents();
</script>
