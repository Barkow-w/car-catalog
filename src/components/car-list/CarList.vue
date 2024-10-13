<script setup lang="ts">

import {type Ref, ref} from "vue";
import {fetchCarList} from "@/api/CarList";
import type {carItemsType} from "@/interface/post";


const carItems :Ref<carItemsType> = ref([]);

const carList = async () => {
  try {
    carItems.value = await fetchCarList();
    console.log(carItems.value);
  } catch (error) {
    console.error("Ошибка при выборке списка автомобилей:", error);
  }
}
carList()


</script>

<template>
  <div class="cars">
    <div class="name-list">
      <div class="name-block">
        <div class="name-item" v-for="item in carItems" :key="item.id">
          {{ item.brand_name }}
        </div>
      </div>
    </div>
    <div class="car-list">
      <div class="car-item" v-for="item in carItems" :key="item.id">
        <router-link :to="{ name: 'CarDetail', params: { id: item.id }}">
          <img class="car-image" :src="item.image" alt="#">
        </router-link>
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

.car-list {
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

.car-item {
  max-width: 500px;
  cursor: pointer;
}

.car-image {
  max-width: 292px;
}
</style>