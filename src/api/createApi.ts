import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { useErrorStore } from '@/stores/error.ts'

export function createApi(baseURL: string): AxiosInstance {
  const api = axios.create({
    baseURL,
    timeout: 5000,
  })

  api.interceptors.response.use(
    (res) => res,
    (error) => {
      const errorStore = useErrorStore()
      const status = error.response?.status

      if (status === 404) {
        // TODO redirect a la pagina 404
        errorStore.alert(error.response)
      } else if (status >= 500) {
        errorStore.alert('Error del servidor')
      } else {
        errorStore.alert(error.response)
      }

      return Promise.reject(error)
    }
  )
}
