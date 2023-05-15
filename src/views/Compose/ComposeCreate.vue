<template>
  <section id="compose">
    <article id="new-message">
      <!-- content -->
      <div class="nmc grid grid-cols-1 mx-3">
        <input
          type="email"
          placeholder="example: hosein@gmail.com"
          class="my-2 border-gray-300"
          v-model="to"
          name="to"
        />
        <input type="text" placeholder="subject" v-model="subject" name="subject" class="my-2 border-gray-300"/>
        <textarea
          class="textarea my-2 border-gray-300"
          placeholder="Message"
          rows="7"
          name="message"
          v-model="message"
        ></textarea>
      </div>
      <!-- footer -->
      <button class="btn btn-info btn-sm my-2 mx-2" @click="sent_message()">
        Send Message
      </button>
    </article>
  </section>
</template>

<script setup>
// import
import { useToast } from "vue-toastification";
import { sents } from "@/store/module/sents";
import { useForm } from "vee-validate";
import * as yup from "yup";
// data
const sents_store = sents();
const toast = useToast();
// validate
const schema = yup.object({
  to: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});

const { useFieldModel, validate } = useForm({
  validationSchema: schema,
});

const [to, subject, message] = useFieldModel(["to", "subject", "message"]);

function sent_message() {
  validate().then((valid) => {
    if (valid.valid) {
      sents_store.sent_message(to.value, subject.value, message.value);
      toast.success("message is sent ✉✌");
      to.value = "";
      subject.value = "";
      message.value = "";
    } else {
      for (let error in valid.errors) {
        toast.error(valid.errors[error]);
      }
    }
  });
}
</script>
