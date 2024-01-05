<template>
  <header>
    <Navigation/>
  </header>
  <RouterView :key="$route.fullPath"/>
</template>
<script>
import Navigation from "@/components/Navigation.vue";
export default {
  components: {Navigation}
}
</script>