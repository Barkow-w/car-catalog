<script setup lang="ts">

import axios from "axios";
import {ref} from "vue";

const carItems = ref([]);

axios.get('https://am111.05.testing.place/api/v1/cars/list').then(({data}) => {
  carItems.value = data;
});

console.log(carItems)
</script>

<template>
  <div class="cars">
    <div class="name-list">
      <div class="name-block">
        <div class="name-item" v-for="item in carItems" :key="item.id">{{ item.brand_name }}</div>
      </div>
    </div>
    <div class="cars-list">
      <div class="cars-item" v-for="item in carItems" :key="item.id">
        <img class="car-image" :src="item.image" alt="#">
      </div>
    </div>
  </div>
</template>

<style scoped>

.name-list {
  overflow-y: hidden;
  overflow-x: scroll;
}

::-webkit-scrollbar {
  display: none;
}

.name-item {
  font-size: 18px;
  line-height: 18px;
  font-weight: 400;
  cursor: pointer;
}

.cars-list {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 20px;
}
.name-block {
  display: flex;
  gap: 12px;
  width: 685px;
  padding: 20px 0;
  border-bottom: 1px solid #c7c6c6;
}

.cars-item {
  max-width: 500px;
  cursor: pointer;
}

.car-image {
  max-width: 292px;
}
</style>