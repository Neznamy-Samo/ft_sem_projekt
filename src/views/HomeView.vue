<template>
  <section class="hero-section d-flex justify-content-center align-items-center" id="section_1">

    <div class="section-overlay"></div>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3D405B" fill-opacity="1" d="M0,224L34.3,192C68.6,160,137,96,206,90.7C274.3,85,343,139,411,144C480,149,549,107,617,122.7C685.7,139,754,213,823,240C891.4,267,960,245,1029,224C1097.1,203,1166,181,1234,160C1302.9,139,1371,117,1406,106.7L1440,96L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>

    <div class="container">
      <div class="row">

        <div class="col-lg-6 col-12 mb-5 mb-lg-0">
          <h2 class="text-white">Vitajte na našej stránke</h2>

          <h1 class="cd-headline rotate-1 text-white mb-4 pb-2">
            <span>Náš klub je pre všetkých</span>


          </h1>

          <div class="custom-btn-group">
            <a href="#section_2" class="btn custom-btn smoothscroll me-3">Ako to začalo</a>
          </div>
        </div>

        <div class="col-lg-6 col-12">
          <div class="ratio ratio-16x9">
            <!--<iframe width="560" height="315" src="https://www.youtube.com/embed/MGNgbNGOzh8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>-->
          </div>
        </div>
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,224L34.3,192C68.6,160,137,96,206,90.7C274.3,85,343,139,411,144C480,149,549,107,617,122.7C685.7,139,754,213,823,240C891.4,267,960,245,1029,224C1097.1,203,1166,181,1234,160C1302.9,139,1371,117,1406,106.7L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
  </section>
  <section class="about-section section-padding" id="section_2">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-12 text-center">
          <h2 class="mb-lg-5 mb-4">O našej firme</h2>
        </div>

        <div class="d-flex justify-content-center mb-lg-0">
          <p class="text-center">Národný golfový klub bol založený 16. mája 1999. 18. júna 1999 bolo slávnostne otvorené zázemie klubu vo forme provizórneho objektu. V
            prvom roku existencie sa klub v športovej činnosti zameral na výchovu juniorov, ktorí reprezentovali náš klub už na Juniorských majstrovstvách Slovenska v Košiciach v auguste roku 1999. 31. októbra 1999 bola prvá sezóna slávnostne ukončená záverečným jesenným turnajom.</p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 col-12 text-center">
          <h2 class="mb-lg-5 mb-4">Náš tím</h2>
        </div>

        <div class="mb-4 mb-lg-0">

          <div v-for="employee in employees" :key="employee.id" class="member-block col-12 col-sm-6 col-md-4 col-lg-3 d-inline-block p-3">
            <div class="member-block-image-wrap">
              <img :src="'/images/members/' + employee.image" class="member-block-image img-fluid" alt="">
            </div>
            <div class="member-block-info d-flex align-items-center">
              <h4>{{employee.name}}</h4>
              <p class="ms-auto">{{employee.title}}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
  <section class="section-bg-image">
    <svg viewBox="0 0 1265 144" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="rgba(255, 255, 255, 1)" d="M 0 40 C 164 40 164 20 328 20 L 328 20 L 328 0 L 0 0 Z" stroke-width="0"></path> <path fill="rgba(255, 255, 255, 1)" d="M 327 20 C 445.5 20 445.5 89 564 89 L 564 89 L 564 0 L 327 0 Z" stroke-width="0"></path> <path fill="rgba(255, 255, 255, 1)" d="M 563 89 C 724.5 89 724.5 48 886 48 L 886 48 L 886 0 L 563 0 Z" stroke-width="0"></path><path fill="rgba(255, 255, 255, 1)" d="M 885 48 C 1006.5 48 1006.5 67 1128 67 L 1128 67 L 1128 0 L 885 0 Z" stroke-width="0"></path><path fill="rgba(255, 255, 255, 1)" d="M 1127 67 C 1196 67 1196 0 1265 0 L 1265 0 L 1265 0 L 1127 0 Z" stroke-width="0"></path></svg>

    <div class="container">
      <div class="row">

        <div class="col-lg-6 col-12">
          <div class="section-bg-image-block">
            <h2 class="mb-lg-3">Odoberaj naše novinky</h2>

            <p>Nenechaj si újsť najnovšie novinky zadaj svoj email s nami budeš vždy napred!
            </p>
            <form action="#" method="get" class="custom-form mt-lg-4 mt-2" role="form">
              <div class="input-group input-group-lg">
                <span class="input-group-text bi-envelope" id="basic-addon1"></span>

                <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" class="form-control" placeholder="Emailová adresa" required="">

                <button type="submit" class="form-control">Odoberať</button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>

    <svg viewBox="0 0 1265 144" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="rgba(255, 255, 255, 1)" d="M 0 40 C 164 40 164 20 328 20 L 328 20 L 328 0 L 0 0 Z" stroke-width="0"></path> <path fill="rgba(255, 255, 255, 1)" d="M 327 20 C 445.5 20 445.5 89 564 89 L 564 89 L 564 0 L 327 0 Z" stroke-width="0"></path> <path fill="rgba(255, 255, 255, 1)" d="M 563 89 C 724.5 89 724.5 48 886 48 L 886 48 L 886 0 L 563 0 Z" stroke-width="0"></path><path fill="rgba(255, 255, 255, 1)" d="M 885 48 C 1006.5 48 1006.5 67 1128 67 L 1128 67 L 1128 0 L 885 0 Z" stroke-width="0"></path><path fill="rgba(255, 255, 255, 1)" d="M 1127 67 C 1196 67 1196 0 1265 0 L 1265 0 L 1265 0 L 1127 0 Z" stroke-width="0"></path></svg>
  </section>

  <section class="membership-section section-padding" id="section_3">
    <div class="container">
      <div class="row">

        <div class="col-lg-12 col-12 text-center mx-auto mb-lg-5 mb-4">
          <h2><span>Predplatné do národného golfového klubu</span></h2>
        </div>

        <div class="col-lg-6 col-12 mb-3 mb-lg-0">
          <h4 class="mb-4 pb-lg-2">Predplatné</h4>

          <div class="table-responsive">
            <table class="table text-center">
              <thead>
              <tr>
                <th style="width: 34%; background-color: #3D405B; color: white;">Typy predplatného</th>

                <th style="width: 22%; background-color: #3D405B; color: white;">TIER 1</th>

                <th style="width: 22%; background-color: #3D405B; color: white;">TIER 2</th>

                <th style="width: 22%; background-color: #3D405B; color: white;">TIER 3</th>
              </tr>
              </thead>

              <tbody>
              <tr>
                <th scope="row" class="text-start">Poistenie</th>

                <td>
                  <i class="bi-check-circle-fill"></i>
                </td>

                <td>
                  <i class="bi-check-circle-fill"></i>
                </td>

                <td>
                  <i class="bi-check-circle-fill"></i>
                </td>
              </tr>

              <tr>
                <th scope="row" class="text-start" style="background-color: #3D405B; color: white;">Stravovanie</th>

                <td style="background-color: #3D405B; color: white;">
                  <i class="bi-check-circle-fill"></i>
                </td>

                <td style="background-color: #3D405B; color: white;">
                  <i class="bi-check-circle-fill"></i>
                </td>

                <td style="background-color: #3D405B; color: white;">
                  <i class="bi-check-circle-fill"></i>
                </td>
              </tr>

              <tr>
                <th scope="row" class="text-start">Ubytovanie</th>

                <td>
                  <i class="bi-x-circle-fill"></i>
                </td>

                <td>
                  <i class="bi-check-circle-fill"></i>
                </td>

                <td>
                  <i class="bi-check-circle-fill"></i>
                </td>
              </tr>

              <tr>
                <th scope="row" class="text-start" style="background-color: #3D405B; color: white;">Víkendové turnaje</th>

                <td style="background-color: #3D405B; color: white;">
                  <i class="bi-x-circle-fill"></i>
                </td>

                <td style="background-color: #3D405B; color: white;">
                  <i class="bi-check-circle-fill"></i>
                </td>

                <td style="background-color: #3D405B; color: white;">
                  <i class="bi-check-circle-fill"></i>
                </td>
              </tr>

              <tr>
                <th scope="row" class="text-start">Golfová škola</th>

                <td>
                  <i class="bi-x-circle-fill"></i>
                </td>

                <td>
                  <i class="bi-x-circle-fill"></i>
                </td>

                <td>
                  <i class="bi-check-circle-fill"></i>
                </td>
              </tr>

              <tr>
                <th scope="row" class="text-start" style="background-color: #3D405B; color: white;">Neobmedzený prístup</th>

                <td style="background-color: #3D405B; color: white;">
                  <i class="bi-x-circle-fill"></i>
                </td>

                <td style="background-color: #3D405B; color: white;">
                  <i class="bi-x-circle-fill"></i>
                </td>

                <td style="background-color: #3D405B; color: white;">
                  <i class="bi-check-circle-fill"></i>
                </td>
              </tr>

              </tbody>
            </table>
          </div>
        </div>

        <div class="col-lg-5 col-12 mx-auto">
          <h4 class="mb-4 pb-lg-2">Pridajte sa k nám</h4>
          <form action="#" method="post" class="custom-form membership-form shadow-lg" role="form">
            <div class="container">
              <h4 class="text-white mb-4">Stať sa členom</h4>

              <div class="form-floating">
                <input type="text" name="full-name" id="full-name" class="form-control" placeholder="Meno priezvisko" required="">

                <label for="floatingInput">Meno priezvisko</label>
              </div>

              <div class="form-floating">
                <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" class="form-control" placeholder="Emailová addresa" required="">

                <label for="floatingInput">Emailová addresa</label>
              </div>

              <div class="form-floating">
                <textarea class="form-control" id="message" name="message" placeholder="Komentare"></textarea>

                <label for="floatingTextarea"> Komentár</label>
              </div>

              <button type="submit" class="form-control">Odoslať</button>
            </div>
          </form>
        </div>

      </div>
    </div>
  </section>
  <section class="events-section section-bg section-padding" id="section_4">
    <div class="container">
      <div class="row">

        <div class="col-lg-12 col-12">
          <h2 class="mb-lg-3">Nastávajúce udalosti</h2>
        </div>

        <div class="row custom-block mb-3 custom-block-bg">
          <div class="col-lg-2 col-md-4 col-12 order-2 order-md-0 order-lg-0">
            <div class="custom-block-date-wrap d-flex d-lg-block d-md-block align-items-center mt-3 mt-lg-0 mt-md-0">
              <h6 class="custom-block-date mb-lg-1 mb-0 me-3 me-lg-0 me-md-0">31</h6>
              <strong class="text-white">Marec 2024</strong>
            </div>
          </div>

          <div class="col-lg-4 col-md-8 col-12 order-1 order-lg-0">
            <div class="custom-block-image-wrap">
              <a href="event-detail.html">
                <img src="/images/professional-golf-player.jpg" class="custom-block-image img-fluid" alt="">
              </a>
            </div>
          </div>

          <div class="col-lg-6 col-12 order-3 order-lg-0">
            <div class="custom-block-info mt-2 mt-lg-0">
              <a href="event-detail.html" class="events-title mb-3">Liga o pohár</a>

              <p class="mb-0">Na lige sa zúčastnia sa 4 tímy. A to minuloroční Trnavčania ktorí sa stali víťazmi prvého kvalifikačného kola ligy, na 2. mieste sa vtedy umiestnil tím Golf Clubu Penati a na 3. mieste skončil tím Golf
                Clubu Welten Tento rok sa to môže zmeniť a preto neváhajte a navštívte nás.</p>
              <div class="d-flex flex-wrap border-top mt-4 pt-3">

                <div class="mb-4 mb-lg-0">
                  <div class="d-flex flex-wrap align-items-center mb-1">
                    <span class="custom-block-span">Lokalita:</span>

                    <p class="mb-0">Tály</p>
                  </div>

                  <div class="d-flex flex-wrap align-items-center">
                    <span class="custom-block-span">Ticket:</span>

                    <p class="mb-0">$100</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row custom-block custom-block-bg">
          <div class="col-lg-2 col-md-4 col-12 order-2 order-md-0 order-lg-0">
            <div class="custom-block-date-wrap d-flex d-lg-block d-md-block align-items-center mt-3 mt-lg-0 mt-md-0">
              <h6 class="custom-block-date mb-lg-1 mb-0 me-3 me-lg-0 me-md-0">28</h6>

              <strong class="text-white">Marec 2024</strong>
            </div>
          </div>

          <div class="col-lg-4 col-md-8 col-12 order-1 order-lg-0">
            <div class="custom-block-image-wrap">
              <a href="event-detail.html">
                <img src="/images/girl-taking-selfie-with-friends-golf-field.jpg" class="custom-block-image img-fluid" alt="">
              </a>
            </div>
          </div>

          <div class="col-lg-6 col-12 order-3 order-lg-0">
            <div class="custom-block-info mt-2 mt-lg-0">
              <a href="event-detail.html" class="events-title mb-3">
                Skús a vyhraj</a>

              <p class="mb-0">Chceš sa naučiť hrať golf? Myslíš si že na to máš? Tak sa zapoj do súťaže o najlepšieho nováčika vyhraj skvelé ceny.</p>

              <div class="d-flex flex-wrap border-top mt-4 pt-3">

                <div class="mb-4 mb-lg-0">
                  <div class="d-flex flex-wrap align-items-center mb-1">
                    <span class="custom-block-span">Lokácia:</span>

                    <p class="mb-0">Bratislava</p>
                  </div>

                  <div class="d-flex flex-wrap align-items-center">
                    <span class="custom-block-span">Ticket:</span>

                    <p class="mb-0">$30</p>
                  </div>
                </div>


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
import FooterComponent from "@/components/FooterComponent.vue";
import DataEmployees from '../employees.json';
import ContactUs from "@/components/ContactUs.vue";
export default {
  data(){
    return{
      employees: DataEmployees.employees
    }
  },
  components: {ContactUs, FooterComponent}
}
</script>

<style>

</style>