<script setup lang="ts">

import {getCars} from "@/api/axiosInstance";
import {ref} from "vue";
import {useRoute, useRouter} from 'vue-router';
import HeaderNav from "@/components/header-nav/HeaderNav.vue";

const route = useRoute()
const router = useRouter()
const carList = ref({})


const fetchCarDetail = async () => {
  const cardId = route.params.id;

  try {
    const { data } = await getCars.get(`/car/${cardId}`);
    carList.value = data;

    console.log(carList.value);
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
  }
}

fetchCarDetail()
</script>

<template>
  <div class="container" v-if="carList.car && carList.user">
    <header-nav
                :auto-name="carList.user.main_auto_name"
                @back="router.back()"/>
    <div class="content">
      <router-link :to="{name: 'CarPost', params: {id: carList.car.brand_id}}">
        <img class="image" :src="carList.car.images[0].url" alt="" v-if="carList.car.images.length > 0">
      </router-link>
      <div class="info" v-if="carList.user">
        <div class="avatar">
          <img class="icon" :src="carList.user.avatar.url" alt="#">
          <div class="avatar-info">
            <div class="name">{{ carList.user.username }}</div>
            <div class="car">{{carList.user.main_auto_name}}</div>
          </div>
        </div>

        <div class="info-car">
          <div class="info-car-name">{{carList.car.name}}</div>
        </div>
      </div>


    </div>
  </div>
</template>

<style scoped>

.content {
  margin-top: 69px;
  border-radius: 6px;
  background-color: #FFFFFF;
}

.image {
  max-width: 600px;
  width: 100%;
  cursor: pointer;
}

.info {
  padding: 20px;
}

.avatar {
  display: flex;
  align-items: center;
  gap: 25px;
  margin-top: 20px;
}
.icon {
  max-width: 60px;
}

.name {
  font-size: 18px;
  font-weight: 700;
}

.car {
  font-size: 16px;
  color: #6c6b6b;
}

.info-car-name {
  margin-top: 12px;
  max-width: 150px;
}
</style>