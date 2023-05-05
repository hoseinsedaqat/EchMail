<template>
  <input type="checkbox" id="my-modal-3" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box relative">
      <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2"
        >✕</label
      >
      <h3 class="text-lg font-bold">Setting</h3>
      <!-- Inputs -->
      <div>
        <div class="form-control w-full my-2">
          <label class="label">
            <span class="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Change Your Name"
            class="input input-bordered w-full"
            v-model="name"
          />
        </div>
        <div class="form-control w-full my-2">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="Change Your Email"
            class="input input-bordered w-full"
            v-model="email"
          />
        </div>
        <button
          class="btn btn-primary w-full"
          @click="setting_store.setting_name_mail(name, email)"
        >
          Sent
        </button>
      </div>
      <div class="text-center mt-5 w-full">
        <label for="upload_img" class="btn btn-sm btn-success w-full"> Upload Img </label>
        <input
          type="file"
          name="upload_img"
          id="upload_img"
          @change="setting_store.onFileChange($event)"
          class="file-input my-3"
          style="display: none"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
// import TextInputApp from "../TextInput/TextInputApp.vue";
import { setting } from "@/store/module/setting";
import { ref, onMounted } from "vue";
const name = ref("");
const email = ref("");
const setting_store = setting();
onMounted(() => {
  name.value = setting_store.user_name;
  email.value = setting_store.user_mail;
});
</script>
