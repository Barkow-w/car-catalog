<script setup lang="ts">

import CarsView from "@/views/CarsView.vue";
import CarDetailView from "@/views/CarDetailView.vue";
import LayoutsDefault from "@/layouts/LayoutsDefault.vue";
</script>

<template>
  <div id="app">
    <layouts-default>
      <router-view/>
    </layouts-default>
  </div>
</template>

<style scoped>

</style>
