<template>
  <section id="setting">
    <div class="mx-2">
      <div class="my-2 text-center w-full flex items-center justify-center">
        <img
          :src="setting_store.img"
          alt="user-profile"
          class="rounded-full w-32 h-32 cursor-pointer"
        />
      </div>
      <div class="w-full my-2">
        <label class="label">
          <span class="label-text">Name</span>
        </label>
        <input
          type="text"
          placeholder="Change Your Name"
          class="input input-bordered w-full"
          name="name"
          v-model="name"
        />
      </div>
      <div class="w-full my-2">
        <label class="label">
          <span class="label-text">Email</span>
        </label>
        <input
          type="text"
          placeholder="Change Your Email"
          class="input input-bordered w-full"
          name="email"
          v-model="email"
        />
      </div>
      <button class="btn btn-primary w-full" @click="update_user_data">Sent</button>
    </div>
    <div class="text-center mt-5 mx-2">
      <label for="upload_img" class="btn btn-sm btn-success w-full">
        <CloudUpload class="mx-2" /> Upload Img
      </label>
      <input
        type="file"
        name="upload_img"
        id="upload_img"
        @change="setting_store.onFileChange($event)"
        class="file-input my-3"
        style="display: none"
      />
    </div>
  </section>
</template>

<script setup>
// import
import { setting } from "@/store/module/setting";
import CloudUpload from "vue-material-design-icons/CloudUpload.vue";
import { useToast } from "vue-toastification";
import { useForm } from "vee-validate";
import { onMounted } from "vue";
import * as yup from "yup";
// data
const setting_store = setting();
const toast = useToast();
// validate
const schema = yup.object({
  email: yup.string().email().required(),
  name: yup.string().required(),
});

const { useFieldModel, validate } = useForm({
  validationSchema: schema,
});

const [email, name] = useFieldModel(["email", "name"]);
// methods
function update_user_data() {
  validate().then((valid) => {
    if (valid.valid) {
      setting_store.setting_name_mail(name.value, email.value);
      toast.info("profile updated 😎👻");
    } else {
      for (let error in valid.errors) {
        toast.error(valid.errors[error]);
      }
    }
  });
}
// mounted
onMounted(() => {
  name.value = setting_store.user_name;
  email.value = setting_store.user_mail;
});
</script>
