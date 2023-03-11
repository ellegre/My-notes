<template>
  <div class="edit-note">
    <AddEditNote
      v-model="noteContent"
      bgColor="link"
      placeholder="Edit note"
      label="Edit Note"
      ref="addEditNoteRef"      
    >     
        <template #buttons>
          <button
          @click="handleSaveClicked"
            class="button is-link has-background-link mr-2"
            :disabled="!noteContent"
          >
          Save Note         
          </button>
          <button
          @click="$router.back()"
            class="button is-link is-light"
          >
            Cancel        
          </button>           
        </template>
      </AddEditNote>
  </div>
</template>
<script setup>
  import AddEditNote from '@/components/Notes/AddEditNote.vue'
  import { ref } from 'vue'
  import { useStoreNotes } from '@/stores/storeNotes.js'
  import { useRoute, useRouter } from 'vue-router'
  const noteContent = ref('')
  
  const route = useRoute()
  const router = useRouter()
  const handleSaveClicked = () => {
    storeNotes.updateNote(route.params.id, noteContent.value)
    router.push('/')
  }
  const storeNotes = useStoreNotes()
  noteContent.value = storeNotes.getNoteContent(route.params.id)
  
 </script>
