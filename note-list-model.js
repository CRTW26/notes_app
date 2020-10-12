class NoteList {

  constructor(){
    this.allNotes = []
  }

  addNote(note) {
    this.allNotes.push(note)
  }

  displayNotes() {
    return this.allNotes;
  }

} 