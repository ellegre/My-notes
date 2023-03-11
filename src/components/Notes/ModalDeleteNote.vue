<template>
  <div class="modal is-active p-2">
    <div class="modal-background"></div>
    <div
      class="modal-card"
      ref="modalCardRef"
    >
      <header class="modal-card-head">
        <p class="modal-card-title">Delete note?</p>
        <button
          class="delete"
          aria-label="close"
          @click="closeModal"
        >
        </button>
      </header>
      <section class="modal-card-body">
        Are you sure you want to delete this note?
      </section>
      <footer class="modal-card-foot  is-justify-content-flex-end">
        <button
          @click="closeModal"
          class="button">
          Cancel
        </button
        >
        <button class="button is-danger">Delete</button>       
      </footer>
    </div>
  </div>
</template>
<script setup>
import { onClickOutside } from '@vueuse/core'
import { ref, onMounted } from 'vue'

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

// emits
const emit = defineEmits(['update:modelValue'])
// close modal
const closeModal = () => {
  emit('update:modelValue', false) 
}

// click outside
const modalCardRef = ref(null)
onClickOutside(modalCardRef, closeModal)

// keyboard control
onMounted(() => {
  document.addEventListener('keyup', e => {
    if (e.key === 'Escape') closeModal()
  })
})

</script>