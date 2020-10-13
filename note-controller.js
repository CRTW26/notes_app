// var element = document.getElementById('app');
// element.innerHTML = 'howdy';
// console.log(element)

class noteController {
  
  constructor(noteList) {
    this.notelist = noteList

    this.noteview(notelist).noteListFormatter;
  }

  getHtml() {
    var element = document.getElementById('app');
    console.log(this.formatNote(this.noteList));
    element.innerHTML = this.formatNote(this.noteList)
  }

}

