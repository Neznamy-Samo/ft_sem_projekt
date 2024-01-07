<template>

  <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-0">
    <div class="member-block">
      <div class="member-block-image-wrap">
        <img src="/images/members/samuel_kascak.jpg" class="member-block-image img-fluid" alt="">
      </div>
      <div class="member-block-info d-flex align-items-center">
        <h4>Samuel Kaščák</h4>
        <p class="ms-auto">Zakladateľ</p>
      </div>
    </div>
  </div>

  <div class="col-lg-3 col-md-6 col-12">
    <div v-for="employee in employees" :key="employee.id" class="member-block">
      <div class="member-block-image-wrap">
        <img :src="'/images/members/' + employee.image" class="member-block-image img-fluid" alt="">
      </div>
      <div class="member-block-info d-flex align-items-center">
        <h4>{{employee.name}}</h4>
        <p class="ms-auto">{{employee.title}}</p>
      </div>
    </div>
  </div>

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