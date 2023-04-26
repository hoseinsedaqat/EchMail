<template>
  <section id="n2">
    <div class="form-control">
      <label class="input-group">
        <span>
          <MagnifyIcon />
        </span>
        <input type="text" placeholder="Search mail" class="layout-input bg-white" />
        <span>
          <TuneIcon />
        </span>
      </label>
    </div>
    <div class="bg-gray-50 my-3 rounded-md">
      <router-view></router-view>
    </div>
  </section>
</template>

<script setup>
import MagnifyIcon from "vue-material-design-icons/Magnify.vue";
import TuneIcon from "vue-material-design-icons/Tune.vue";
</script>
