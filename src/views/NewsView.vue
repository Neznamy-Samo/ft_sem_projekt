<template>
  <section class="events-section events-detail-section section-padding" id="section_11">
    <div class="container">
      <div class="row">

        <div v-for="event in latestEvents" :key="event.id"  class="col-lg-6 col-md-8 col-12 mx-auto">
          <h2 class="mb-lg-5 mb-4 text-center">{{ event.name }}</h2>

          <div class="custom-block-image-wrap">
            <img :src="'/images/' + event.image" class="custom-block-image img-fluid" alt="">
          </div>

          <div class="custom-block-info text-center">
            <p>{{ event.description}}</p>
            <div class="events-detail-info row my-5">
              <div class="col-lg-12 col-12">
                <h4 class="mb-3">Detaily</h4>
              </div>

              <div class="col-lg-4 col-12 ">
                <span class="custom-block-span ">Dátum:</span>

                <p class="mb-0">{{ event.date }}.{{ event.month}}.{{ event.year }}</p>
              </div>

              <div class="col-lg-4 col-12 my-3 my-lg-0">
                <span class="custom-block-span m-lg-1">Lokácia:</span>

                <p class="mb-0">{{event.location}}</p>
              </div>

              <div class="col-lg-4 col-12">
                <span class="custom-block-span m-lg-1">Cena:</span>

                <p class="mb-0">{{event.ticket}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>
<script>

import DataEvents from '../events.json'

export default {
  data() {
    return {
      events: [],
    };
  },
  methods: {
    fetchData() {
      this.events = DataEvents.events;
    },
  },
  computed: {
    latestEvents() {
      const maxId = Math.max(...this.events.map((event) => event.id));
      return this.events.filter((event) => event.id === maxId);
    },
  },

  created() {
    this.fetchData();
  },
};
</script>