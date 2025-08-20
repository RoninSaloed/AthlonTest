import PostService from '../api/post-service'
import { ref } from 'vue'

export const usePostForm = () => {
  const isLoading = ref(false)
  const error = ref<Error | null>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const response = ref<any>(null)

  const postForm = async () => {
    isLoading.value = true
    error.value = null

    try {
      const data = await PostService.postForm()
      response.value = data
      return data
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      error.value = err
      console.error(err)
    } finally {
      setTimeout(() => {
        isLoading.value = false
      }, 3000)
    }
  }

  return {
    postForm,
    isLoading,
    error,
    response,
  }
}
