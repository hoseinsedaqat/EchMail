<template>
  <section id="keep_create" class="p-10">
    <div class="text-center flex flex-col items-center justify-center my-2">
      <NotebookPlus :size="100" />
      <p>Create Tasks</p>
    </div>
    <article class="grid grid-cols-4 gap-4">
      <div class="lg:form-control md:form-control w-full my-2 col-span-4">
        <label class="label">
          <span class="label-text">What's in your mind ?</span>
        </label>
        <textarea
          name="keep_note"
          id="keep_note"
          class="form-control w-full"
          rows="10"
          v-model="keep_note"
        ></textarea>
      </div>
    </article>
    <button class="btn btn-outline" @click="create_note()">Create Tasks</button>
  </section>
</template>

<script setup>
// import
import NotebookPlus from "vue-material-design-icons/NotebookPlus.vue";
import { useToast } from "vue-toastification";
import { keep } from "@/store/module/keep";
import { useForm } from "vee-validate";
import * as yup from "yup";
// data
const keep_store = keep();
const toast = useToast();
// validate
const schema = yup.object({
  keep_note: yup.string().required(),
});

const { useFieldModel, validate } = useForm({
  validationSchema: schema,
});

const [keep_note] = useFieldModel(["keep_note"]);

function create_note() {
  validate().then((valid) => {
    if (valid.valid) {
      keep_store.add_keeps(keep_note.value);
      toast.success("note is add to your list 📒🍍");
      keep_note.value = "";
    } else {
      for (let error in valid.errors) {
        toast.error(valid.errors[error]);
      }
    }
  });
}
</script>
