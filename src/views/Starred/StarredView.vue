<template>
  <section id="starred">
    <div class="empty" v-if="true">
      <p class="text-2xl">Nothing In starred</p>
    </div>
    <article
      class="grid grid-cols-8 items-center p-3 cursor-pointer"
      v-for="x in 3"
      :key="x"
      v-else
    >
      <div class="flex items-center">
        <input type="checkbox" class="checkbox checkbox-xs" />
        <StarIcon :bg-color="'yellow'" class="mx-2"/>
      </div>
      <div class="col-span-2">
        <p>Hosein Sedaqat</p>
      </div>
      <div class="col-span-4">
        <router-link to="/message/4236589">
          <p>
            <span> hey man whats'app - </span>
            <span class="text-blue-400"> that awesome man ... </span>
          </p>
        </router-link>
      </div>
      <div>
        <p class="text-sm">nov 28 14:12</p>
      </div>
    </article>
  </section>
</template>

<script setup>
import StarIcon from "vue-material-design-icons/StarOutline.vue";
</script>
