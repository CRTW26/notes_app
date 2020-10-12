assert = new Assert;

// New NoteList object Stores an array of Note models.

function NoteListHasNotes() {
  var note = new Note('Hello world')
  var note_list = new NoteList(note)
  assert.isTrue(note_list.displayNotes() === note)
}

NoteListHasNotes();