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



  <!--<section class="events-section section-padding" id="section_7">
    <div class="container">
      <div class="row">

        <div class="col-lg-12 col-12">
          <h2 class="mb-lg-5 mb-4">Prebiehajúce udalosti</h2>
        </div>

        <div class="col-lg-6 col-12 mb-5 mb-lg-0">
          <div class="custom-block-image-wrap">
            <a href="event-detail.html">
              <img src="/images/anna-rosar-ew-olGvgCCs-unsplash.jpg" class="custom-block-image img-fluid" alt="">
            </a>

            <div class="custom-block-date-wrap">
              <strong class="text-white">1 Feb 2023</strong>
            </div>


          </div>

          <div class="custom-block-info">
            <a href="event-detail.html" class="events-title mb-2">Súťaž jednotlivca</a>
            <p class="mb-0">Príď sa ukázať a vyhraj cenu jednotlivca</p>
            <div class="border-top mt-4 pt-3">
              <div class="d-flex flex-wrap align-items-center mb-1">
                <span class="custom-block-span">Location:</span>

                <p class="mb-0">Valáliky</p>
              </div>

              <div class="d-flex flex-wrap align-items-center">
                <span class="custom-block-span">Cena:</span>

                <p class="mb-0">$50</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6 col-12">
          <div class="custom-block-image-wrap">
            <a href="event-detail.html">
              <img src="/images/frederik-rosar-NDSZcCfnsbY-unsplash.jpg" class="custom-block-image img-fluid" alt="">
            </a>

            <div class="custom-block-date-wrap">
              <strong class="text-white">1 Feb 2023</strong>
            </div>


          </div>

          <div class="custom-block-info">
            <a href="event-detail.html" class="events-title mb-2">Skupinová súťaž</a>

            <p class="mb-0">Poď a ukáž sa so svojím tímom</p>


            <div class="border-top mt-4 pt-3">
              <div class="d-flex flex-wrap align-items-center mb-1">
                <span class="custom-block-span">Lokácia:</span>

                <p class="mb-0">Košice</p>
              </div>

              <div class="d-flex flex-wrap align-items-center">
                <span class="custom-block-span">Cena:</span>

                <p class="mb-0">$200</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>-->
  <IncomingEvents/>

</template>
<script>


import IncomingEvents from "@/components/IncomingEvents.vue";

export default {
  components: {IncomingEvents}
}
</script>