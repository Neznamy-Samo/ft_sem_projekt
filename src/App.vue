<template>
  <header>
    <Navigation/>
  </header>
  <RouterView :key="$route.fullPath"/>
  <ContactUs/>
  <FooterComponent/>
</template>
<script>
import Navigation from "@/components/TheNavigation.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import ContactUs from "@/components/ContactUs.vue";

export default {
  components: {ContactUs, FooterComponent, Navigation}
}
</script>