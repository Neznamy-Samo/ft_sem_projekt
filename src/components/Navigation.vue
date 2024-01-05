<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <router-link to= "/" class="navbar-brand d-flex align-items-center">
        <img src="/public/images/logo.png" class="navbar-brand-image img-fluid" alt="Tiya Golf Club">
        <span class="navbar-brand-text">
                              Národný
                            <small>golfový klub</small>
                        </span>
      </router-link>

      <div class="d-lg-none ms-auto me-3">
        <a class="btn custom-btn custom-border-btn" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">Member Login</a>
      </div>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-lg-auto">
          <li class="nav-item">
            <a class="nav-link click-scroll" href="#section_1">Domov</a>
          </li>

          <li class="nav-item">
            <a class="nav-link click-scroll" href="#section_2">O nás</a>
          </li>

          <li class="nav-item">
            <a class="nav-link click-scroll" href="#section_3">Predplatné</a>
          </li>

          <li class="nav-item">
            <a class="nav-link click-scroll" href="#section_4">Podujatia</a>
          </li>

          <li class="nav-item">
            <a class="nav-link click-scroll" href="#section_5">Kontaktujte nás</a>
          </li>

          <li class="nav-item">
            <router-link to="/event-listing" class="nav-link click-scroll">Ponuky udalostí</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/event-detail" class="nav-link click-scroll">Najnovšia udalosť</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

