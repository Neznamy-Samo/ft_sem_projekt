<template>
  <header>
    <Navigation/>
  </header>
  <RouterView :key="$route.fullPath"/>
</template>
<script>
import Navigation from "@/components/TheNavigation.vue";

export default {
  components: {Navigation}
}
</script>