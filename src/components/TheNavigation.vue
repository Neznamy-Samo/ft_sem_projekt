<template>
  <nav id="navigation">
    <div class="container d-inline-flex justify-content-between align-items-center">
      <router-link to= "/" class="navbar-brand" style="color:white">
       <i class="fa-solid fa-golf-ball-tee me-2 fs-10"></i>
        <span class="fs-10">

                            <small>Národný
                              golfový
                              klub</small>
                        </span>
      </router-link>




      <div class="">
        <ul v-if="displayMenu" class="d-inline-flex  my-auto list list-unstyled" :class="{responsive: isResponsive}">
          <li class="me-3">
            <a class="nav-link" href="#section_1">Domov</a>
          </li>

          <li class="me-3">
            <a class="nav-link" href="#section_2">O nás</a>
          </li>

          <li class="me-3">
            <a class="nav-link" href="#section_3" >Predplatné</a>
          </li>

          <li class="me-3">
            <a class="nav-link" href="#section_4" >Podujatia</a>
          </li>

          <li class="me-3">
            <a class="nav-link" href="#section_5">Kontaktujte nás</a>
          </li>

          <li class="me-3">
            <a class="nav-link">Ponuky udalostí</a>
          </li>

          <li class="me-3">
            <router-link to="/event-detail" class="nav-link">Najnovšia udalosť</router-link>
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
export default {
  data() {
    return {
      isResponsive: false,
      displayHamburger: false,
      displayMenu: true,
    };
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
<style>

/* Optionally hide the hamburger initially on larger screens */
.hamburger {
  display: none;
}

.active{
  color: black;
}

/* Show the hamburger when the screen is small enough */
@media screen and (max-width: 1225px) {
  .hamburger {
    display: block;
  }
  .responsive{
    display: flex;
    flex-direction: column;
    position: absolute;
    width:100%;
    top:100px;
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
