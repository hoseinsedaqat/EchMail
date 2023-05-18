<template>
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
        <p class="my-2">
          Name:
          {{
            setting_store.user_name.length > 20
              ? setting_store.user_name.substring(0, 20) + "..."
              : setting_store.user_name
          }}
        </p>
        <p class="my-2">
          Account:
          {{
            setting_store.user_mail.length > 25
              ? setting_store.user_mail.substring(0, 25) + "..."
              : setting_store.user_mail
          }}
        </p>
        <button class="btn btn-info btn-sm my-2">Sign out</button>
      </div>
    </ul>
  </div>
</template>

<script setup>
// impport
import user_img from "@/assets/media/img/71232870.jpg";
import { setting } from "@/store/module/setting";
import { onMounted } from "vue";
// data
const setting_store = setting();
// mounted
onMounted(() => {
  setting_store.img = user_img;
});
</script>
