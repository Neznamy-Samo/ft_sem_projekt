<template>
  <section class="events-section section-bg section-padding" id="section_4">
    <div class="container">
      <div class="row">

        <div class="col-lg-12 col-12">
          <h2 class="mb-lg-3">Nastávajúce udalosti</h2>
        </div>

        <IncomingEventsCard/>
      </div>
    </div>
  </section>
</template>
<script>
import IncomingEventsCard from "@/components/IncomingEventsCard.vue";
export default {
  components: {IncomingEventsCard}
}
</script>