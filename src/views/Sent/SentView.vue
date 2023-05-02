<template>
  <section id="sent">
    <div class="empty" v-if="true">
      <p class="text-2xl">Nothing In sent</p>
    </div>
    <article
      class="grid grid-cols-8 gap-4 p-3 cursor-pointer"
      v-for="x in 3"
      :key="x"
      v-else
    >
      <div>
        <input type="checkbox" checked="checked" class="checkbox checkbox-xs" />
      </div>
      <div>
        <StarIcon :bg-color="'yellow'" />
      </div>
      <div class="col-span-2">
        <p>Hosein Sedaqat</p>
      </div>
      <div class="col-span-3">
        <router-link to="/message/4236589">
          <p>
            <span> hey man whats'app - </span>
            <span class="text-blue-400"> that awesome man ... </span>
          </p>
        </router-link>
      </div>
      <div>
        <p>nov 28 14:12</p>
      </div>
    </article>
  </section>
</template>

<script setup>
import StarIcon from "vue-material-design-icons/StarOutline.vue";
</script>