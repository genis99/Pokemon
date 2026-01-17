import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useErrorStore = defineStore('error', () => {
  const show = ref(false)
  const message = ref('')

  function alert(newMessage: string) {
    message.value = newMessage
    show.value = true
  }

  function removeAlert() {
    show.value = false
  }

  return { alert, removeAlert }
})
