<template>
  <nav>
    <div>
      <p class="mx-1">Start Date</p>
      <Datepicker v-model="calendar_store.start_date" />
    </div>
    <div>
      <p class="mx-1">End Date</p>
      <Datepicker v-model="calendar_store.end_date" />
    </div>
    <div>
      <p>Title</p>
      <input
        type="text"
        name="calendar_title"
        id="calendar_title"
        placeholder="Title"
        v-model="calendar_store.title"
      />
    </div>
    <div>
      <button @click="calendar_store.add_item()" class="btn btn-accent btn-sm add_title_btn">
        Add Item
      </button>
    </div>
  </nav>
  <!-- calendar View -->
  <calendar-view
    :show-date="calendar_store.show_date"
    :items="calendar_store.items"
    :time-format-options="{ hour: 'numeric', minute: '2-digit' }"
    :show-times="true"
    class="theme-default holiday-us-traditional holiday-us-official"
  >
    <template #header="{ headerProps }">
      <calendar-view-header :header-props="headerProps" @input="calendar_store.set_show_date" />
    </template>
  </calendar-view>
</template>

<script setup>
import "../../../../node_modules/vue-simple-calendar/dist/css/holidays-us.css";
import "../../../../node_modules/vue-simple-calendar/dist/css/default.css";
import { CalendarView, CalendarViewHeader } from "vue-simple-calendar";
import "../../../../node_modules/vue-simple-calendar/dist/style.css";
import Datepicker from "vue3-datepicker";
import { calendar } from "@/store/module/calendar";
const calendar_store = calendar();
</script>
