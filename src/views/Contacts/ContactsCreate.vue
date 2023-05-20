<template>
  <section id="contacts_create" class="p-10">
    <div class="text-center flex flex-col items-center justify-center my-2">
      <AccountCircle :size="100" />
      <p>Create Contacts</p>
    </div>
    <article class="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-4">
      <div class="lg:form-control md:form-control w-full my-2">
        <label class="label">
          <span class="label-text">First Name</span>
        </label>
        <input
          type="text"
          placeholder="First Name"
          class="input input-bordered w-full my-2"
          name="first_name"
          v-model="first_name"
        />
      </div>
      <div class="lg:form-control md:form-control w-full my-2">
        <label class="label">
          <span class="label-text">Last Name</span>
        </label>
        <input
          type="text"
          placeholder="Last Name"
          class="input input-bordered w-full my-2"
          name="last_name"
          v-model="last_name"
        />
      </div>
      <div class="lg:form-control md:form-control w-full my-2">
        <label class="label">
          <span class="label-text">Email</span>
        </label>
        <input
          type="text"
          placeholder="Email"
          class="input input-bordered w-full my-2"
          name="email"
          v-model="email"
        />
      </div>
    </article>
    <button class="btn btn-outline" @click="create_contacts()">Create Contacts</button>
  </section>
</template>

<script setup>
// import
import AccountCircle from "vue-material-design-icons/AccountCircle.vue";
import { contacts } from "@/store/module/contacts";
import { useToast } from "vue-toastification";
import { useForm } from "vee-validate";
import * as yup from "yup";
// data
const contacts_store = contacts();
const toast = useToast();
// validate
const schema = yup.object({
  first_name: yup.string().required().min(4),
  last_name: yup.string().required().min(4),
  email: yup.string().email().required(),
});

const { useFieldModel, validate } = useForm({
  validationSchema: schema,
});

const [first_name, last_name, email] = useFieldModel([
  "first_name",
  "last_name",
  "email",
]);
// methods
function create_contacts() {
  validate().then((valid) => {
    if (valid.valid) {
      contacts_store.create_contacts(first_name.value, last_name.value, email.value);
      toast.success("contact is create 👤😎");
      first_name.value = "";
      last_name.value = "";
      email.value = "";
    } else {
      for (let error in valid.errors) {
        toast.error(valid.errors[error]);
      }
    }
  });
}
</script>
