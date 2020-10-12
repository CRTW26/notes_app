// var element = document.getElementById('app');
// element.innerHTML = 'howdy';
// console.log(element)

class Controller {
  
  constructor(noteList, note) {
    this.noteList = noteList
    this.note = note
  }

  // console logs ul elements but not the note itself
  addNote() {
    this.noteList.addNote(this.note);
  }

  formatNote(noteList) {
    let noteview = new NoteView(noteList)
    return noteview.noteListFormatter();
  }

  getHtml() {
    var element = document.getElementById('app');
    console.log(this.formatNote(this.noteList));
    element.innerHTML = this.formatNote(this.noteList)
  }

}


