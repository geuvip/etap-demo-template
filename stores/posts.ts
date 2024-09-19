// stores/posts.ts
import { defineStore } from 'pinia'
import axios from 'axios'

export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: [] as any[],
    post: null as any | null,
  }),
  actions: {
    async fetchPosts() {
      const config = useRuntimeConfig()
      const response = await axios.get(`${config.public.apiUrl}/posts`)
      this.posts = response.data
    },
    async fetchPost(id: number) {
      const config = useRuntimeConfig()
      const response = await axios.get(`${config.public.apiUrl}/posts/${id}`)
      this.post = response.data
    }
  }
})
