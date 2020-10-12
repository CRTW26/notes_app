class NoteList {

  constructor(){
    this.note_list = []
  }

  addNote(note) {
    this.note_list.push(note)
  }

  displayNotes() {
   return this.note_list 
  }

}