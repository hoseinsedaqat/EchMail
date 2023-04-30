<template>
  <section id="calendar">
    <nav>
      <div>
        <p class="mx-1">Start Date</p>
        <Datepicker v-model="start_date" />
      </div>
      <div>
        <p class="mx-1">End Date</p>
        <Datepicker v-model="end_date" />
      </div>
      <div>
        <p>Title</p>
        <input
          type="text"
          name="calendar_title"
          id="calendar_title"
          placeholder="Title"
          v-model="title"
        />
      </div>
      <div>
        <button @click="add_item" class="btn btn-accent btn-sm add_title_btn">
          Add Item
        </button>
      </div>
    </nav>
    <!-- calendar View -->
    <calendar-view
      :show-date="showDate"
      :items="items"
      :time-format-options="{ hour: 'numeric', minute: '2-digit' }"
      :show-times="true"
      class="theme-default holiday-us-traditional holiday-us-official"
    >
      <template #header="{ headerProps }">
        <calendar-view-header :header-props="headerProps" @input="setShowDate" />
      </template>
    </calendar-view>
  </section>
</template>

<script setup>
import "../../../node_modules/vue-simple-calendar/dist/css/holidays-us.css";
import "../../../node_modules/vue-simple-calendar/dist/css/default.css";
import { CalendarView, CalendarViewHeader } from "vue-simple-calendar";
import "../../../node_modules/vue-simple-calendar/dist/style.css";
import Datepicker from "vue3-datepicker";
import { ref } from "vue";
// data
const showDate = ref(new Date());
const start_date = ref(new Date());
const end_date = ref(new Date());
const title = ref("");
const items = ref([]);
// methods
const setShowDate = (date) => {
  showDate.value = date;
};

const add_item = () => {
  items.value.push({
    id: items.value.length,
    startDate: start_date.value,
    endDate: end_date.value,
    title: title.value,
  });
};
</script>
