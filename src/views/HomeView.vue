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
            <form class="custom-form mt-lg-4 mt-2" @submit.prevent="submitForm" >
              <div class="input-group input-group-lg">
                <span class="input-group-text bi-envelope" id="basic-addon1"></span>

                <input v-model="email" type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" class="form-control" placeholder="Emailová adresa" required="">

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
     <SubscriptionFees/>
        </div>

        <div class="col-lg-5 col-12 mx-auto">
          <h4 class="mb-4 pb-lg-2">Pridajte sa k nám</h4>
          <form class="custom-form membership-form shadow-lg" @submit.prevent="submitFormBecomeMember">
            <div class="container">
              <h4 class="text-white mb-4">Stať sa členom</h4>

              <div class="form-floating">
                <input v-model="fullNameBecomeMember" type="text" name="full-name" id="full-name" class="form-control" placeholder="Meno priezvisko" required="">

                <label for="floatingInput">Meno priezvisko</label>
              </div>

              <div class="form-floating">
                <input v-model="emailBecomeMember" type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" class="form-control" placeholder="Emailová addresa" required="">

                <label for="floatingInput">Emailová addresa</label>
              </div>

              <div class="form-floating">
                <textarea v-model="textBecomeMember" class="form-control" id="message" name="message" placeholder="Komentare"></textarea>

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
          <h2 class="mb-lg-3">Tento mesiac Vás čaká</h2>
        </div>
        <div>
          <h3>Zvoľte si lokalitu:</h3>
        </div>
        <div class="location-buttons">
          <button v-for="location in uniqueLocations" :key="location"
                  @click="toggleFilter(location)"
                  class="btn btn-outline-dark me-3 mt-2 mb-4"
          >{{ location }}</button>
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
  import DataEmployees from '../employees.json';
  import SubscriptionFees from "@/components/SubscriptionFees.vue"
  import axios from 'axios';
  import EventCard from "@/components/EventCard.vue";

  export default {
  data() {
    const locationStore = useLocationStore();
  return {
    thisMonth: (new Date().getMonth()) % 12 + 1,
    locationStore,
    email: '',
    fullNameBecomeMember: '',
    emailBecomeMember: '',
    textBecomeMember: '',
    employees: DataEmployees.employees,
    events: DataEvents.events

};
},
  components: {EventCard, SubscriptionFees },
    computed: {
      uniqueLocations() {
        const uniqueLocationsSet = new Set();

        this.events.forEach(event => {
          uniqueLocationsSet.add(event.location);
        });

        return Array.from(uniqueLocationsSet);
      },
      filteredEvents() {
        this.locationStore.restoreState();
        const evts = this.locationStore.filteredEventsByLocation(this.events);

        return evts.filter(event => {
          const isChosenLocation = this.locationStore.chosenLocations.includes(event.location);
          const isNextMonth = parseInt(event.month) === this.thisMonth;
          return isChosenLocation && isNextMonth;
        });
      }
    },
 methods: {
   toggleFilter(location) {
     if (this.locationStore.chosenLocations.includes(location)) {
       if (this.locationStore.chosenLocations.length > 1)
       this.locationStore.removeChosenLocation(location);
     } else {
       this.locationStore.addChosenLocation(location);
     }
   },
   submitFormBecomeMember() {
     const formData = {
       fullNameBecomeMember: this.fullNameBecomeMember,
       emailBecomeMember: this.emailBecomeMember,
       textBecomeMember: this.textBecomeMember,
     };
     axios.post('https://jsonplaceholder.typicode.com/posts',formData)
         .then(response => {
           console.log(response.data)
         })
         .catch(error =>{
           console.error(error);
         });
     this.fullNameBecomeMember = '';
     this.emailBecomeMember = '';
     this.textBecomeMember = '';
   },
    submitForm() {
      const formData = {
        email: this.email,
      };
      axios.post('https://jsonplaceholder.typicode.com/posts',formData)
          .then(response => {
            console.log(response.data)
          })
          .catch(error =>{
        console.error(error);
      });
      this.email = '';
    }
  }
  };
</script>