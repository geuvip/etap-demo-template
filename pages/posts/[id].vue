<script setup lang="ts">

import { useHead } from '@unhead/vue'
import { usePostsStore } from '~/stores/posts'

const route = useRoute()
const store = usePostsStore()

// Sayfa yüklendiğinde veriyi çek
onMounted(async () => {
  const { id } = route.params
  await store.fetchPost(Number(id))
})

// SEO ayarları
useHead({
  title: store.post ? store.post.title : 'Yükleniyor...',
  meta: [
    {
      name: 'description',
      content: store.post ? store.post.body : 'Post detayları yükleniyor...'
    }
  ]
})
</script>

<template>
  <div class="container">
    <div v-if="store.post" class="card">
      <div class="card-body">
        <h1 class="card-title">{{ store.post.title }}</h1>
        <p class="card-text">{{ store.post.body }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  max-width: 800px;
  margin: 0 auto;
}

.card {
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
}

.card-title {
  font-size: 24px;
  font-weight: bold;
}

.card-text {
  font-size: 18px;
  line-height: 1.5;
}
</style>
