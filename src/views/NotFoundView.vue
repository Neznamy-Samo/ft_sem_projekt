<template>

  <div class="cant-find-page p-5 m-5 text-center">
    <h1>Error 404 <br>Page Not Found</h1>
    <p>Return home and try again</p>
    <router-link to="/">Return home</router-link><!--vrati nas na home -->
  </div>

</template>

<script>
import { useComponentShowStore } from "@/stores/componentShowStore";
export default {
  data () {
    const componentShowStore = useComponentShowStore();

    return {
      componentShowStore
    }
  },
  created() {
    this.componentShowStore.setNotFoundView(true);
  },
  beforeUnmount() {
    this.componentShowStore.setNotFoundView(false);
  }

}
</script>