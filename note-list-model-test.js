assert = new Assert;

// New NoteList object Stores an array of Note models.

// function NoteListHasNotes() {
//   var note = new Note('Hello world')
//   var note_list = new NoteList(note)
//   assert.isTrue(note_list.note_list.includes(note))
// }

// NoteListHasNotes();

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
  var notes = [note1, note2]
  note_list.addNote(note1)
  note_list.addNote(note2)
  console.log(notes)
  assert.isTrue(note_list.displayNotes() == [note1, note2])
  //assert.isTrue(note_list.allNotes.includes(note1 && note2)) 
  
}

displaysAllNotes()