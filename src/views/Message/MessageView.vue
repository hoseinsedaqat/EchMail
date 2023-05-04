<template>
  <section id="home">
    <nav>
      <div class="cursor-pointer">
        <ArrowLeftIcon @click="back" />
        <TrashIcon />
      </div>
      <div>
        <p>1- 50 of 153</p>
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
              src="@/assets/media/img/71232870.jpg"
              alt="Avatar"
              class="rounded-full w-12 cursor-pointer"
            />
          </div>
          <div class="mx-3">
            <p>hsedaqat1378@gmail.com</p>
            <p class="text-slate-400">to {{ message_data.to }}</p>
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
import TrashIcon from "vue-material-design-icons/TrashCanOutline.vue";
import ArrowLeftIcon from "vue-material-design-icons/ArrowLeft.vue";
import { layout } from "@/store/module/layout";
import { sents } from "@/store/module/sents";
import { useRoute, useRouter } from "vue-router";
import { onMounted, ref } from "vue";
const message_data = ref({});
const layout_store = layout();
const sents_store = sents();
const router = useRouter();
const route = useRoute();
const back = () => {
  router.push("/");
};
onMounted(() => {
  sents_store.sents.forEach((msg) => {
    if (msg.id === route.params.id) {
      message_data.value = msg;
    }
  });
  layout_store.inbox.forEach((msg) => {
    if (msg.id === route.params.id) {
      message_data.value = msg;
    }
  });
});
</script>
