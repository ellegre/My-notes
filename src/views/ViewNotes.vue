<template>
  <div class="notes">
    <AddEditNote
      ref="addEditNoteRef"
      placeholder="Add a new note"
      v-model="newNote"
    >     
      <template #buttons>
        <button
        :disable="!newNote"
        @click="addNote"
        class="button is-link has-background-success">Add New Note</button
        >         
      </template>
    </AddEditNote>

    <Note
      v-for="note in storeNotes.notes"
      :key="note.id"
      :note="note"
    />
  </div>
</template>
<script setup>
import { ref } from 'vue'
import Note from '@/components/Notes/TheNote.vue'
import { useStoreNotes } from '@/stores/storeNotes'
import { useWatchCharacters } from '@/use/useWatchcharacters.js'
import AddEditNote from '@/components/Notes/AddEditNote.vue'

const newNote = ref('')
const addEditNoteRef = ref(null)
const storeNotes = useStoreNotes()

const addNote = () => {
  storeNotes.addNote(newNote.value)
  newNote.value = ''
  addEditNoteRef.value.focusTextarea()
}

useWatchCharacters(newNote)

</script>