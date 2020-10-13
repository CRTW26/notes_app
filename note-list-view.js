class noteView {

  constructor (notelist){
    this.notelist = notelist;
  }

  noteListFormatter() {
    let arr = [];
    console.log(this.notelist.allNotes.length);
    for(let note = 0; note < this.notelist.allNotes.length; note++){
    arr.push("<li><div>" + this.notelist.allNotes[note] + "</div></li>")
    }
    return ("<ul>" + arr.join("") + "</ul>")
  }

}