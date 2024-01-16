<template>
  <section class="events-section events-detail-section section-padding" id="section_11">
    <div class="container">
      <div class="row">

        <div class="col-lg-6 col-md-8 col-12 mx-auto">
          <h2 class="mb-lg-5 mb-4 text-center">Liga o pohár</h2>

          <div class="custom-block-image-wrap">
            <img src="/images/professional-golf-player.jpg" class="custom-block-image img-fluid" alt="">
          </div>

          <div class="custom-block-info">
            <p>Na lige sa zúčastnia sa 4 tímy. A to minuloroční Trnavčania ktorí sa stali víťazmi prvého kvalifikačného kola ligy, na 2. mieste sa vtedy umiestnil tím Golf Clubu Penati a na 3.
              mieste skončil tím Golf Clubu Welten. Zápasy sľubujú napínavé súboje plné vášní a taktického umenia. Sledujte ako sa tímy snažia prekonať svojích súperov a vybojovať si predné miesto!</p>
            <div class="events-detail-info row my-5">
              <div class="col-lg-12 col-12">
                <h4 class="mb-3">Detaily</h4>
              </div>

              <div class="col-lg-4 col-12">
                <span class="custom-block-span">Dátum:</span>

                <p class="mb-0">31 Mar 2024</p>
              </div>

              <div class="col-lg-4 col-12 my-3 my-lg-0">
                <span class="custom-block-span">Lokácia:</span>

                <p class="mb-0">Tály</p>
              </div>

              <div class="col-lg-4 col-12">
                <span class="custom-block-span">Cena:</span>

                <p class="mb-0">$100</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <ContactUs/>
  <FooterComponent/>
</template>
<script>
import ContactUs from "@/components/ContactUs.vue";
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  components: { FooterComponent,ContactUs}
}
</script>