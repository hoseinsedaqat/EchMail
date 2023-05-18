<template>
  <!-- n3 -->
  <section id="n3" class="flex items-center flex-row justify-center mx-3">
    <right-features-apps></right-features-apps>
    <right-aside></right-aside>
  </section>
  <!-- setting-modal -->
  <modal-app></modal-app>
</template>

<script setup>
// import
import RightFeaturesApps from "@/exports/Right_FeaturesApps.vue";
import ModalApp from "@/components/Ui/Modal/ModalApp.vue";
import RightAside from "@/exports/Right_Aside.vue";
</script>
