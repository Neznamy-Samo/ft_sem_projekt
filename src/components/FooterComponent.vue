<template>
  <footer v-if="!isPageNotFoundShowed" class="site-footer">
    <div class="container">
      <div class="row">

        <div class="col-lg-6 col-12 me-auto mb-5 mb-lg-0">
          <a class="navbar-brand d-flex align-items-center">
            <i class="fa-solid fa-golf-ball-tee me-2 fs-10"></i>
            <span class="fs-10"></span>
            <span class="navbar-brand-text">Národný golfový klub</span>
          </a>
        </div>

        <div class="col-lg-3 col-12">
          <p class="d-flex border-bottom pb-3 mb-3 me-lg-3">
            <span>Pon-Pia</span>
            6:00  -  18:00
          </p>

          <p class="d-flex me-lg-3">
            <span>Sob-Ned</span>
            6:30  -  15:30
          </p>

          <br>

          <p class="copyright-text">Copyright © Tiya Golf Club</p>

        </div>
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#81B29A" fill-opacity="1" d="M0,224L34.3,192C68.6,160,137,96,206,90.7C274.3,85,343,139,411,144C480,149,549,107,617,122.7C685.7,139,754,213,823,240C891.4,267,960,245,1029,224C1097.1,203,1166,181,1234,160C1302.9,139,1371,117,1406,106.7L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
  </footer>

</template>
<script>
import { useComponentShowStore } from "@/stores/componentShowStore";

export default {
  data() {
    const componentShowStore = useComponentShowStore();
    return {
      componentShowStore
    };
  },
  computed: {
    isPageNotFoundShowed() {
      return this.componentShowStore.isShowedState;
    }
  }
};
</script>