import { defineStore, acceptHMRUpdate } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return { 
      notes: [
        {
          id: 'id1',
          content: 'text1'
        },
        {
          id: 'id2',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolorum provident numquam? Enim quis veritatis nam ullam iusto accusantium, dolorem est dolores inventore totam tempora repellendus nihil corrupti dignissimos sit.'
        }
      ]
     }
  },
  actions: {
    addNote(newNoteContent) {
      const currentDate = new Date().getTime()
      const id = currentDate.toString()
      const note = {
        id,
        content: newNoteContent
      }
      this.notes.unshift(note)
    },
    deleteNote(idToDelete) {
      this.notes = this.notes.filter((note) => {
        return note.id !== idToDelete
      })
    },
    updateNote(id, content) {
      let index = this.notes.findIndex(note => note.id === id)
      this.notes[index].content = content
    }
  },
  getters: {
    getNoteContent: (state) => {
      return (id) => {
        return state.notes.filter(note => note.id === id )[0].content
      }
    },
    totalNotesCount: (state) => {
      return state.notes.length
    },
    totalCheracterCount: (state) => {
      let count = 0
      state.notes.forEach(note => {
        count += note.content.length
      })
      return count
    }
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStoreNotes, import.meta.hot))
}