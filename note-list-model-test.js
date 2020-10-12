assert = new Assert;

// New NoteList object Stores an array of Note models.


function addNoteTest() {
  var note_list = new NoteList()
  var note1 = new Note("hello")
  note_list.addNote(note1)
  assert.isTrue(note_list.allNotes.includes(note1))
}

addNoteTest()

function displaysAllNotes() {
  var note_list = new NoteList()
  var note1 = new Note("hello")
  var note2 = new Note("world")
  note_list.addNote(note1)
  note_list.addNote(note2)
  const test = note_list.displayNotes()
  assert.isTrue(test.includes(note1 && note2))
  //assert.isTrue(note_list.allNotes.includes(note1 && note2)) 
  
}

displaysAllNotes()