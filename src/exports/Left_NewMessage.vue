<template>
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
      <input
        type="email"
        placeholder="example: hosein@gmail.com"
        v-model="to"
        name="to"
      />
      <input type="text" placeholder="subject" v-model="subject" name="subject" />
      <textarea
        class="textarea"
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
</template>

<script setup>
// import
import ArrowExpand from "vue-material-design-icons/ArrowExpand.vue";
import MinusIcon from "vue-material-design-icons/Minus.vue";
import Close from "vue-material-design-icons/Close.vue";
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
// methods
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
