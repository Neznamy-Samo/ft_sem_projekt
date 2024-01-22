<template>
  <nav v-if="!isPageNotFoundShowed" id="navigation">
    <div class="container d-inline-flex justify-content-between align-items-center">
      <router-link to= "/" class="navbar-brand" style="color:white">
        <i class="fa-solid fa-golf-ball-tee me-2 fs-10"></i>
        <span class="fs-10">
          <small>Národný golfový klub</small>
        </span>
      </router-link>




      <div class="">
        <ul v-if="displayMenu" class="d-inline-flex  my-auto list list-unstyled" :class="{responsive: isResponsive}">
          <li class="me-3">
            <router-link class="nav-link" to="/">Domov</router-link>
          </li>

          <li class="me-3">
            <router-link class="nav-link" to="/#section_2">O nás</router-link>
          </li>

          <li class="me-3">
            <router-link class="nav-link" to="/#section_3" >Predplatné</router-link>
          </li>

          <li class="me-3">
            <router-link class="nav-link" to="/#section_4" >Podujatia</router-link>
          </li>

          <li class="me-3">
            <router-link to="/event-listing" class="nav-link">Ponuky udalostí</router-link>
          </li>

          <li class="me-3">
            <router-link to="/news" class="nav-link">Novinky</router-link>
          </li>
        </ul>
        <button v-if="displayHamburger" class="hamburger btn btn-lg" @click="toggleMenu">
          <i class="fa fa-bars"></i>
        </button>
      </div>
    </div>
  </nav>
</template>
<script>
import {useComponentShowStore} from "@/stores/componentShowStore";

export default {
  data() {
    const componentShowStore = useComponentShowStore();
    return {
      isResponsive: false,
      displayHamburger: false,
      displayMenu: true,
      componentShowStore
    };
  },
  computed: {
    isPageNotFoundShowed(){
      return this.componentShowStore.isShowedState
    }
  },
  methods: {
    toggleMenu() {
      this.isResponsive = !this.isResponsive;
      this.displayMenu = !this.displayMenu;
    },
    checkWindowSize() {
      this.displayHamburger = window.innerWidth <= 1225;
      this.displayMenu = window.innerWidth >= 1225;
    },

  },
  mounted() {
    this.checkWindowSize();
    window.addEventListener("resize", this.checkWindowSize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkWindowSize);
  },
};
</script>
<style scoped>

.hamburger {
  display: none;
}
@media screen and (max-width: 1225px) {
  .hamburger {
    display: block;
  }
  .responsive{
    display: flex;
    flex-direction: column;
    position: absolute;
    width:100%;
    top:70px;
    left: 0px;
    padding-top:20px;
    padding-bottom:20px;
    padding-left: 70px;
    gap: 15px;
    background-color: #3D405B;
  }
  .main-menu.responsive li{
    display: flex;
    margin-left:0px;
    justify-content: center;
  }
}
</style>