<template>
  <section id="error-down">
    <main class="flex flex-col items-center justify-center my-7">
      <div>
        <img :src="Gmail_Down" alt="Gmail_Down" class="w-full h-72" />
      </div>
      <div class="my-4">
        <router-link to="/" class="font-bold"> Go to Inbox 📧🤞 </router-link>
      </div>
    </main>
  </section>
</template>

<script setup>
import Gmail_Down from "@/assets/media/img/Gmail_Down.png";
</script>
