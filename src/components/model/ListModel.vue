<template>
  <article
    :id="props.large_id"
    class="grid grid-cols-8 items-center p-3 cursor-pointer"
    v-for="(msg, idx) in props.data"
    :key="(msg, idx)"
  >
    <div class="flex items-center">
      <input type="checkbox" class="checkbox checkbox-xs" v-model="msg.check" />
      <StarIcon
        v-if="props.is_sttared"
        class="mx-2"
        :class="msg.starred ? 'text-yellow-400' : ''"
        @click="props.add_sttared(msg.id)"
      />
    </div>
    <div class="col-span-2">
      <p>{{ msg.to.substring(0, 15) + " ..." }}</p>
    </div>
    <div class="col-span-4">
      <router-link :to="props.links + `${msg.id}`">
        <p>
          <span> {{ msg.subject.substring(0, 25) + "..." }} - </span>
          <span class="text-blue-400"> {{ msg.message.substring(0, 15) + " ..." }} </span>
        </p>
      </router-link>
    </div>
    <div>
      <p class="text-sm time-text">{{ msg.time }}</p>
    </div>
  </article>
  <!-- sm -->
  <article
    :id="props.small_id"
    class="grid grid-cols-8 items-center p-3 cursor-pointer"
    v-for="(msg, idx) in props.data"
    :key="(msg, idx)"
  >
    <div class="flex items-center">
      <input type="checkbox" class="checkbox checkbox-xs" v-model="msg.check" />
      <StarIcon
        v-if="props.is_sttared"
        :size="17"
        :class="msg.starred ? 'text-yellow-400' : ''"
        @click="props.add_sttared(msg.id)"
      />
    </div>
    <div class="col-span-5">
      <p>{{ msg.to.substring(0, 15) + " ..." }}</p>
      <router-link :to="'/message/inbox/' + `${msg.id}`">
        <p>
          <span> {{ msg.subject.substring(0, 15) + "..." }} - </span>
          <span class="text-blue-400"> {{ msg.message.substring(0, 10) + " ..." }} </span>
        </p>
      </router-link>
    </div>
    <div class="col-span-2">
      <p class="text-sm time-text">{{ msg.time }}</p>
    </div>
  </article>
</template>

<script setup>
// import
import StarIcon from "vue-material-design-icons/StarOutline.vue";
import { defineProps } from "vue";
// props
const props = defineProps({
  large_id: String,
  data: Array,
  small_id: String,
  links: String,
  add_sttared: Function,
  is_sttared: Boolean,
});
</script>
