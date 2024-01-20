<template>
  <section class="contact-section section-padding" id="section_5">
    <div class="container">
      <div class="row">

        <div class="col-lg-5 col-12">
          <form class="custom-form contact-form" @submit.prevent="submitFormContactUs" >
            <h2 class="mb-4 pb-2">Kontaktujte nás</h2>

            <div class="row">
              <div class="col-lg-6 col-md-6 col-12">
                <div class="form-floating">
                  <input v-model="fullName" type="text" name="full-name" id="full-name" class="form-control" placeholder="Meno priezvisko" required="">

                  <label for="floatingInput">Meno priezvisko</label>
                </div>
              </div>

              <div class="col-lg-6 col-md-6 col-12">
                <div class="form-floating">
                  <input v-model="email" type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" class="form-control" placeholder="Emailová addresa" required="">

                  <label for="floatingInput">Emailová addresa</label>
                </div>
              </div>

              <div class="col-lg-12 col-12">
                <div class="form-floating">
                  <textarea v-model="message" class="form-control" id="message" name="message" placeholder="komentáre"></textarea>

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
<script>


import axios from "axios";
export default {
  data() {
    return {
      fullName: '',
      email: '',
      message: '',
    };
  },
  methods: {
    submitFormContactUs() {
      const formData = {
        fullName: this.fullName,
        email: this.email,
        message: this.message,

      };
      axios.post('https://jsonplaceholder.typicode.com/posts', formData)
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      this.fullName = '';
      this.email = '';
      this.message = '';
    }
  }
};
</script>

