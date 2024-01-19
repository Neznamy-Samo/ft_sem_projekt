<template>
  <section class="events-section section-bg section-padding" id="section_4">
    <div class="container">
      <div class="row">

        <div class="col-lg-12 col-12">
          <h2 class="mb-lg-3">Nastávajúce udalosti</h2>
        </div>
        <div class="location-buttons">
          <button @click="toggleFilter('Bratislava')">Bratislava</button>
          <button @click="toggleFilter('Košice')">Košice</button>
          <!-- Add more buttons for other locations as needed -->
        </div>

        <div v-for="event in filteredEvents" :key="event.id" class="row custom-block custom-block-bg mb-5">
          <div class="col-lg-2 col-md-4 col-12 order-2 order-md-0 order-lg-0">
            <div class="custom-block-date-wrap d-flex d-lg-block d-md-block align-items-center mt-3 mt-lg-0 mt-md-0">
              <h6 class="custom-block-date mb-lg-1 mb-0 me-3 me-lg-0 me-md-0">{{ event.date }}.</h6>
              <strong class="text-white">{{event.month }}.{{ event.year }}</strong>
            </div>
          </div>

          <div class="col-lg-4 col-md-8 col-12 order-1 order-lg-0">
            <div class="custom-block-image-wrap">
              <img :src="'/images/' + event.image" class="member-block-image img-fluid" alt="">
            </div>
          </div>

          <div class="col-lg-6 col-12 order-3 order-lg-0">
            <div class="custom-block-info mt-2 mt-lg-0">
              <p class="mb-0">{{ event.description }}</p>
              <div class="d-flex flex-wrap border-top mt-4 pt-3">
                <div class="mb-4 mb-lg-0">
                  <div class="d-flex flex-wrap align-items-center mb-1">
                    <span class="custom-block-span">Lokácia:</span>
                    <p class="mb-0">{{ event.location }}</p>
                  </div>
                  <div class="d-flex flex-wrap align-items-center">
                    <span class="custom-block-span">Cena:</span>
                    <p class="mb-0">{{ event.ticket }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useLocationStore } from "@/stores/locationsStore";


export default {
  computed: {
    filteredEvents() {
      this.locationStore.restoreState();
      const events = this.locationStore.filteredEvents;

      // If chosenLocations is empty, filter only by the next month
      if (this.locationStore.chosenLocations.length === 0) {
        return events.filter(event => parseInt(event.month) === this.nextMonth);
      }

      // Otherwise, filter by both location and next month
      return events.filter(event => {
        const isChosenLocation = this.locationStore.chosenLocations.includes(event.location);
        const isNextMonth = parseInt(event.month) === this.nextMonth;
        return isChosenLocation && isNextMonth;
      });
    }
  },
  data() {
    const locationStore = useLocationStore();
    return {
      nextMonth: (new Date().getMonth() + 1) % 12 + 1,
      locationStore,
      // next month
    };
  },
  methods: {
    toggleFilter(location) {
      const locationStore = useLocationStore();
      if (locationStore.chosenLocations.includes(location)) {
        locationStore.removeChosenLocation(location);
      } else {
        locationStore.addChosenLocation(location);
      }
    }
  }
};
</script>