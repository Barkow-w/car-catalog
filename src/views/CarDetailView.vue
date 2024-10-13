<script setup lang="ts">

import {getCars} from "@/api/axiosInstance";
import {type Ref, ref} from "vue";
import {useRoute, useRouter} from 'vue-router';
import HeaderNav from "@/components/header-nav/HeaderNav.vue";
import type {postItemType} from "@/interface/post";

const route = useRoute()
const router = useRouter()
const carItem :Ref<postItemType> = ref({})


const fetchCarDetail = async () => {
  const cardId = route.params.id;

  try {
    const { data } = await getCars.get(`/car/${cardId}`);
    carItem.value = data;

    console.log(carItem.value);
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
  }
}

fetchCarDetail()
</script>

<template>
  <div class="container" v-if="carItem && carItem.car && carItem.user">
    <header-nav
                :auto-name="carItem.user.main_auto_name"
                @back="router.back()"/>
    <div class="content">
      <router-link :to="{name: 'CarPost', params: {id: carItem.car.brand_id}}">
        <img class="image" :src="carItem.car.images[0].url" alt="" v-if="carItem.car.images.length > 0">
      </router-link>
      <div class="info" v-if="carItem.user">
        <div class="avatar">
          <img class="icon" :src="carItem.user.avatar.url" alt="#">
          <div class="avatar-info">
            <div class="name">{{ carItem.user.username }}</div>
            <div class="car">{{carItem.user.main_auto_name}}</div>
          </div>
        </div>

        <div class="info-car">
          <div class="info-car-name">{{carItem.car.name}}</div>
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