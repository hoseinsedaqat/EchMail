<template>
  <section id="home">
    <nav>
      <div class="cursor-pointer">
        <ArrowLeftIcon @click="back" />
        <TrashIcon
          v-if="diffrent_trash"
          @click="sents_store.delete_msg_by_id(route.params.id)"
        />
        <TrashIcon
          v-if="!diffrent_trash"
          @click="inbox_store.delete_msg_by_id(route.params.id)"
        />
      </div>
      <div>
        <p>1- 50 of 200</p>
      </div>
    </nav>
    <article id="email-information" class="p-5">
      <main>
        <h2 class="text-lg">{{ message_data.subject }}</h2>
      </main>
      <main class="my-3 flex items-center justify-between">
        <div class="flex items-center justify-between">
          <div>
            <img
              :src="setting_store.img"
              alt="Avatar"
              class="rounded-full w-14 h-14 cursor-pointer"
            />
          </div>
          <div class="mx-3">
            <p>hsedaqat1378@gmail.com</p>
            <p class="text-slate-400">
              <span v-if="message_data.from">from</span>
              <span v-else>to</span>
              {{ message_data.to }}
            </p>
          </div>
        </div>
        <div>
          <p>{{ message_data.time }}</p>
        </div>
      </main>
    </article>
    <article id="email-message" class="py-0 px-5">
      <p class="text-justify break-words">
        {{ message_data.message }}
      </p>
    </article>
  </section>
</template>

<script setup>
// import
import TrashIcon from "vue-material-design-icons/TrashCanOutline.vue";
import ArrowLeftIcon from "vue-material-design-icons/ArrowLeft.vue";
import { checkTextLength } from "@/utils/checkTextLength";
import { setting } from "@/store/module/setting";
import { useRoute, useRouter } from "vue-router";
import { inbox } from "@/store/module/inbox";
import { sents } from "@/store/module/sents";
import { onMounted, ref } from "vue";

// data
const setting_store = setting();
const inbox_store = inbox();
const message_data = ref({});
const sents_store = sents();
const router = useRouter();
const route = useRoute();
const diffrent_trash = ref(false);

// methods
const back = () => {
  router.go(-1);
};

// mounted
onMounted(() => {
  if (window.location.pathname.includes("/sent")) {
    diffrent_trash.value = true;
  }
  sents_store.sents.forEach((msg) => {
    if (msg.id === route.params.id) {
      message_data.value = msg;
      msg.view = true;
      message_data.value.to = checkTextLength(message_data.value.to);
    }
  });
  inbox_store.inbox.forEach((msg) => {
    if (msg.id === route.params.id) {
      message_data.value = msg;
      msg.view = true;
      message_data.value.to = checkTextLength(message_data.value.to);
    }
  });
});
</script>
