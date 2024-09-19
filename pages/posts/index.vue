<script setup lang="ts">
import { onMounted } from 'vue'
import { usePostsStore } from '~/stores/posts'

const store = usePostsStore()

// Sayfa yüklendiğinde tüm postları çek
onMounted(async () => {
  await store.fetchPosts()
})
</script>

<template>
  <div class="container">
    <div class="row">
      <div v-for="post in store.posts" :key="post.id" class="col-md-4">
        <div class="card mb-4">
          <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
            <p class="card-text">{{ post.body.substring(0, 100) }}...</p>
            <nuxt-link :to="`/posts/${post.id}`" class="btn btn-primary">Daha fazlası</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

  

  
  <style scoped>
  .card {
    margin: 1rem;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
  </style>
  