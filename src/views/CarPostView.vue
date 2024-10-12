<script setup lang="ts">
import {ref} from "vue";
import {getCars} from "@/api/axiosInstance";
import {useRoute, useRouter} from "vue-router";
import HeaderNav from "@/components/header-nav/HeaderNav.vue";

const route = useRoute()
const router = useRouter()
const postList = ref([])
const commentsUser = ref({})

const getCarPost = async () => {
  const cardId = route.params.id;
  try {
    const {data} = await getCars.get(`/car/${cardId}/posts`);
    postList.value = data.posts;
    console.log(postList.value);

    const commentPromises = postList.value.map(async (post) => {
      const {data} = await getCars.get(`/post/${post.id}`);
      commentsUser.value[post.id] = data.comments;
    });

    await Promise.all(commentPromises);
    console.log(commentsUser.value);
  } catch (error) {
    console.error('Ошибка при получении постов:', error);
  }
}

getCarPost()
</script>

<template>
  <div class="posts-list">


    <header-nav v-if="postList.length > 0"
                :auto-name="postList[0].author.main_auto_name"
                @back="router.back()"/>

    <div class="post-item" v-for="postItem in postList" :key="postItem.id">
      <img class="post-image" :src="postItem.img" alt="" v-if="postItem.img">
      <div class="post-content">
        <div class="post-avatar" v-if="postItem.author.avatar">
          <img class="icon" :src="postItem.author.avatar.url" alt="#">
          <div class="avatar-info">
            <div class="name">{{ postItem.author.username }}</div>
            <div class="car">{{ postItem.author.main_auto_name }}</div>
          </div>
        </div>
        <div class="post-user">
          <div class="post-user-text" :class="{'post-animation' : postItem.postAnimation}" :key="postItem.id"
               @click="postItem.postAnimation = !postItem.postAnimation">
            <span class="post-user-name">{{ postItem.author.username }}</span>
            {{ postItem.text }}
          </div>
        </div>

        <div class="post-footer">
          <div class="post-like">Like: {{ postItem.like_count }}</div>
          <div class="post-comment">Comment: {{ postItem.comment_count }}</div>
          <div class="post-date">{{ postItem.created_at }}</div>
        </div>

        <div class="comments" v-if="commentsUser[postItem.id]">
          <div class="comments-item" v-for="comment in commentsUser[postItem.id]" :key="comment.id">
            <div class="user-avatar">
              <div class="user-info">
                <img class="user-icon" :src="comment.user.avatar.url" alt="#" v-if="comment.user.avatar">
                <div class="user-name">
                  <div class="user-avatar-name">
                    {{ comment.user.username}}
                  </div>
                  <div class="user-avatar-car">
                    {{comment.user.main_auto_name}}
                  </div>
                </div>
              </div>
              <div class="comment-date">
                {{comment.created_at}}
              </div>
            </div>
            <div class="user-comment">
              {{ comment.text }}
            </div>
          </div>
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
  cursor: pointer;
}

.post-animation {
  max-height: 400px;
  -webkit-line-clamp: inherit;
  transition: .15s ease-in-out all;
}

.post-footer {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.post-footer div {
  cursor: pointer;
}

.comments {

}

.comments-item {
  padding: 20px 0;
  border-top: 1px solid #d5d2d2;
}

.user-avatar {
  display: flex;
  justify-content: space-between;
}

.user-info {
  display: flex;
}

.user-icon {
  max-width: 45px;
  margin-right: 12px;
}

.user-avatar-name {
  font-size: 16px;
  font-weight: 600;
}

.user-comment {
  margin-top: 12px;
}
</style>