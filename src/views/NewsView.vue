<template>

  <section class="hero-section d-flex justify-content-center align-items-center" id="section_1">
    <div class="section-overlay"></div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3D405B" fill-opacity="1" d="M0,224L34.3,192C68.6,160,137,96,206,90.7C274.3,85,343,139,411,144C480,149,549,107,617,122.7C685.7,139,754,213,823,240C891.4,267,960,245,1029,224C1097.1,203,1166,181,1234,160C1302.9,139,1371,117,1406,106.7L1440,96L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>
  </section>

  <section class="events-section section-bg section-padding" id="section_13">
    <h2 class="text-center pt-5">Upravili sme členstvo a vďaka tomu ešte viac ušetríte!</h2>
    <div class="container pt-5">

      <div class="row">
        <SubscriptionFees/>
      </div>
    </div>
  </section>

  <section class="events-section events-detail-section section-padding" id="section_11">
    <div class="container">
      <div class="row">

        <div v-for="event in latestEvents" :key="event.id"  class="col-lg-6 col-md-8 col-12 mx-auto">
          <h2 class="mb-lg-5 mb-4 text-center">Pozri sa na našu najnovšiu udalosť!</h2>

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
  <section class="events-section section-bg section-padding" id="section_14">
    <h2 class="text-center pt-5">Náš golfový klub sa čoskoro bude znova rozrastať!</h2>
    <div class="container pt-5">
      <div class="row">

        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="custom-block-image-wrap">
            <img src="/images/golf_construction.jpg" class="img-fluid p-3" style="border-radius: 15%;" alt="">
          </div>
          <p>
            S veľkou radosťou oznamujeme, že náš prestížny golfový klub sa momentálne nachádza v období
            dynamického rozrastania. Sme nadšení, že náš klub bude čoskoro dostupný aj golfovým nadšencom
            v Prešove.
          </p>
          <p>
            Práve teraz prebieha intenzívna výstavba nových golfových ihrísk, moderných zázemí a
            komplexných služieb pre našich členov. Toto rozšírenie nám umožní poskytnúť ešte lepšie
            golfové zážitky a vytvoriť nové spoločenské centrum pre všetkých milovníkov golfu v Prešove
            a jeho okolí.
          </p>
          <p>
            Sledujte našu webovú stránku aby ste boli v obraze s najnovšími
            informáciami o stave výstavby a otváracích akciách. Tešíme sa na to, že vás privítame v
            rozšírenom a ešte pohodlnejšom prostredí našeho golfového klubu.
          </p>
        </div>
      </div>
    </div>
  </section>

</template>

<script>

import DataEvents from '../events.json';
import SubscriptionFees from "@/components/SubscriptionFees.vue";

export default {
  data() {
    return {
      events: [],
    };
  },
  components: {
    SubscriptionFees,
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
