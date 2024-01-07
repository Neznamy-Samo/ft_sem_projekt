<template>
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
</template>

<script>
import DataEmployees from '../employees.json';
export default {
  data(){
    return{
      employees: DataEmployees.employees
    }
  },
}
</script>