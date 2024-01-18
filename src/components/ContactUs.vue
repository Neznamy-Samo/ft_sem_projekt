<template>
  <section class="contact-section section-padding" id="section_5">
    <div class="container">
      <div class="row">

        <div class="col-lg-5 col-12">
          <form action="#" method="post" class="custom-form contact-form" role="form">
            <h2 class="mb-4 pb-2">Kontaktujte nás</h2>

            <div class="row">
              <div class="col-lg-6 col-md-6 col-12">
                <div class="form-floating">
                  <input type="text" name="full-name" id="full-name" class="form-control" placeholder="Meno priezvisko" required="">

                  <label for="floatingInput">Meno priezvisko</label>
                </div>
              </div>

              <div class="col-lg-6 col-md-6 col-12">
                <div class="form-floating">
                  <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" class="form-control" placeholder="Emailová addresa" required="">

                  <label for="floatingInput">Emailová addresa</label>
                </div>
              </div>

              <div class="col-lg-12 col-12">
                <div class="form-floating">
                  <textarea class="form-control" id="message" name="message" placeholder="komentáre"></textarea>

                  <label for="floatingTextarea">Komentár</label>
                </div>

                <button type="submit" class="form-control">Odoslať</button>
              </div>
            </div>
          </form>
        </div>

        <div class="col-lg-6 col-12">
          <div class="contact-info mt-5">
            <div class="contact-info-item">
              <div class="contact-info-body">
                <strong>Bratislava</strong>
                <p class="mt-2 mb-1">
                  <a href="tel: 99999945" class="contact-link">
                    (+421)99999945
                  </a>
                </p>
                <p class="mb-0">
                  <a href="mailto:info@narodnyklub.com" class="contact-link">
                    info@narodnyklub.com
                  </a>
                </p>
              </div>
            </div>

            <img src="/images/WorldMap.svg" class="img-fluid" alt="">
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

