class noteList {

  constructor(){
    this.allNotes = []
  }

  addNote(note) {
    this.allNotes.push(new Note(note).text);
    //push in the text of the object so array just contains the content of the note and note the note object
  };

  displayNotes() {
  //  return this.allNotes;
    for (let i = 0; i < this.allNotes.length; i ++) {
      return this.allNotes[i];
    }
  };

} 