class NoteView {

  constructor (allNotes){
    this.allNotes = allNotes
  }

  noteListFormatter() {
    var arr = [];
    for(let note = 0; note < this.allNotes.length; note++){
    arr.push("<li><div>" + this.allNotes[note] + "</div></li>")
    }
    return ("<ul>" + arr.join("") + "</ul>")
  }

}