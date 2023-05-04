<template>
  <div class="form-control w-full my-2">
    <label class="label">
      <span class="label-text">{{ props.title }}</span>
    </label>
    <input
      type="text"
      :placeholder="props.placeholder"
      class="input input-bordered w-full"
      :value="props.value"
    />
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  placeholder: String,
  title: String,
  value: String,
});
</script>
