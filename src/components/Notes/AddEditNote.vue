<template>
  <div 
    class="card p-4  mb-5"
    :class="`has-background-${ bgColor }-dark`"
  >
    <label
    v-if="label"
      class="label has-text-white"
    >Label text</label>
    <div class="field">
      <div class="control">
        <textarea
          v-model="modelValue"
          @input="$emit('update:modelValue', modelValue)" 
          class="textarea"
          ref="textareaRef"
          :placeholder="placeholder"
          v-autofocus
          maxlength="100"
          >
        </textarea
        >
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons"></slot>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { vAutofocus } from '@/directives/vAutofocus'

const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  bgColor: {
    type: String,
    default: 'success'
  },
  placeholder: {
    type: String,
    default: 'Type something'
  },
  label: {
    type: String,
  }
})
const textareaRef = ref(null)
const emit = defineEmits(['update:modelValue'])
const focusTextarea = () => {
  textareaRef.value.focus()
}
defineExpose({
  focusTextarea
})
</script>