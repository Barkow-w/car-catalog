<script setup lang="ts">
import {ref} from "vue";
import {getCars} from "@/api/axiosInstance";
import {useRoute, useRouter} from "vue-router";
import HeaderNav from "@/components/header-nav/HeaderNav.vue";

const route = useRoute()
const router = useRouter()
const postList = ref([])

const getCarPost = async () => {
  const cardId = route.params.id;
  const {data} = await getCars.get(`/car/${cardId}/posts`)
  postList.value = data.posts

  console.log(postList.value)
}

getCarPost()
</script>

<template>
  <div class="posts-list">
    <header-nav v-if="postList.length > 0"
                :auto-name="postList[0].author.main_auto_name"
                @back="router.back()"/>

    <div class="post-item" v-for="postItem in postList" :key="postItem.id">
      <img class="post-image" :src="postItem.img" alt="">
      <div class="post-content">
        <div class="post-avatar">
          <img class="icon" :src="postItem.author.avatar.url" alt="#">
          <div class="avatar-info">
            <div class="name">{{ postItem.author.username }}</div>
            <div class="car">{{ postItem.author.main_auto_name }}</div>
          </div>
        </div>
        <div class="post-user">
          <div class="post-user-text">
            <span class="post-user-name">{{ postItem.author.username }}</span>
            {{ postItem.text }}
          </div>
        </div>

        <div class="post-footer">
          <div class="post-like">Lick: {{ postItem.like_count }}</div>
          <div class="post-comment">Comment: {{postItem.comment_count}}</div>
          <div class="post-date">{{postItem.created_at}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.post-item {
  margin-top: 45px;
  border-radius: 6px;
  background-color: #FFFFFF;
}

.post-image {
  max-width: 600px;
  width: 100%;
}

.post-content {
  padding: 20px;
}

.post-avatar {
  display: flex;
}

.post-avatar {
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

.post-user-name {
  font-size: 18px;
  font-weight: 600;
}

.post-user-text {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  max-height: 100px;
  margin-top: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.post-footer {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.post-footer div {
  cursor: pointer;
}
</style>