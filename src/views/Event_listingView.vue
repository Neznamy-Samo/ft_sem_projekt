<template>

  <section class="hero-section hero-50 d-flex justify-content-center align-items-center" id="section_6">
    <div class="section-overlay"></div>
    <svg viewBox="0 0 1962 178" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="#3D405B" d="M 0 114 C 118.5 114 118.5 167 237 167 L 237 167 L 237 0 L 0 0 Z" stroke-width="0"></path> <path fill="#3D405B" d="M 236 167 C 373 167 373 128 510 128 L 510 128 L 510 0 L 236 0 Z" stroke-width="0"></path> <path fill="#3D405B" d="M 509 128 C 607 128 607 153 705 153 L 705 153 L 705 0 L 509 0 Z" stroke-width="0"></path><path fill="#3D405B" d="M 704 153 C 812 153 812 113 920 113 L 920 113 L 920 0 L 704 0 Z" stroke-width="0"></path><path fill="#3D405B" d="M 919 113 C 1048.5 113 1048.5 148 1178 148 L 1178 148 L 1178 0 L 919 0 Z" stroke-width="0"></path><path fill="#3D405B" d="M 1177 148 C 1359.5 148 1359.5 129 1542 129 L 1542 129 L 1542 0 L 1177 0 Z" stroke-width="0"></path><path fill="#3D405B" d="M 1541 129 C 1751.5 129 1751.5 138 1962 138 L 1962 138 L 1962 0 L 1541 0 Z" stroke-width="0"></path></svg>

    <div class="container">
      <div class="row">
      </div>
    </div>
    <svg viewBox="0 0 1962 178" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="#ffffff" d="M 0 114 C 118.5 114 118.5 167 237 167 L 237 167 L 237 0 L 0 0 Z" stroke-width="0"></path> <path fill="#ffffff" d="M 236 167 C 373 167 373 128 510 128 L 510 128 L 510 0 L 236 0 Z" stroke-width="0"></path> <path fill="#ffffff" d="M 509 128 C 607 128 607 153 705 153 L 705 153 L 705 0 L 509 0 Z" stroke-width="0"></path><path fill="#ffffff" d="M 704 153 C 812 153 812 113 920 113 L 920 113 L 920 0 L 704 0 Z" stroke-width="0"></path><path fill="#ffffff" d="M 919 113 C 1048.5 113 1048.5 148 1178 148 L 1178 148 L 1178 0 L 919 0 Z" stroke-width="0"></path><path fill="#ffffff" d="M 1177 148 C 1359.5 148 1359.5 129 1542 129 L 1542 129 L 1542 0 L 1177 0 Z" stroke-width="0"></path><path fill="#ffffff" d="M 1541 129 C 1751.5 129 1751.5 138 1962 138 L 1962 138 L 1962 0 L 1541 0 Z" stroke-width="0"></path></svg>
  </section>

  <section class="events-section section-bg section-padding">
    <div class="container p-5">
      <div class="row">

        <div class="col-lg-12 col-12">
          <h2 class="mb-lg-3">Ponuky udalostí</h2>
        </div>

        <div>
          <h3>Lokalita:</h3>
        </div>
        <div class="location-buttons">
          <button v-for="location in uniqueLocations" :key="location"
                  @click="toggleFilterLocation(location)"
                  class="btn btn-outline-dark me-3 mt-2 mb-4"
          >{{ location }}</button>
        </div>

        <div>
          <h3>Mesiac:</h3>
        </div>
        <div class="location-buttons">
          <button v-for="i in remainingMonths" :key="i"
                  @click="toggleFilterMonth(i)"
                  class="btn btn-outline-dark me-3 mt-2 mb-4"
          >{{ i }}</button>
        </div>

        <div v-for="event in filteredEvents" :key="event.id" class="row custom-block custom-block-bg mb-5">
          <EventCard :event="event" />
        </div>

      </div>
    </div>
  </section>

</template>

<script>
import { useLocationStore } from "@/stores/locationsStore";
import DataEvents from '../events.json';
import EventCard from "@/components/EventCard.vue";
export default {
  data() {
    const locationStore = useLocationStore();
    return {
      thisMonth: (new Date().getMonth()) % 12 + 1,
      locationStore,
      events: DataEvents.events
    };
  },
  components: {EventCard},
  computed: {
    uniqueLocations() {
      const uniqueLocationsSet = new Set();

      this.events.forEach(event => {
        uniqueLocationsSet.add(event.location);
      });

      return Array.from(uniqueLocationsSet);
    },
    remainingMonths() {
      const remainingMonthsArray = [];

      for (let i = this.thisMonth; i <= 12; i++) {
        remainingMonthsArray.push(i);
      }

      return remainingMonthsArray;
    },

    filteredEvents() {
      this.locationStore.restoreState();
      const evts = this.locationStore.filteredEventsByMonth(this.locationStore.filteredEventsByLocation(this.events));

      return evts;
    }
  },
  methods: {
    toggleFilterLocation(location) {
      if (this.locationStore.chosenLocations.includes(location)) {
        if (this.locationStore.chosenLocations.length > 1)
          this.locationStore.removeChosenLocation(location);
      } else {
        this.locationStore.addChosenLocation(location);
      }
    },
    toggleFilterMonth(month) {
      if (this.locationStore.chosenMonths.includes(month)) {
        if (this.locationStore.chosenMonths.length > 1)
          this.locationStore.removeChosenMonth(month);
      } else {
        this.locationStore.addChosenMonth(month);
      }
    },
  }
}
</script>