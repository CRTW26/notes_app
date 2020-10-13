assert = new Assert;

// New NoteList object Stores an array of Note models.

function addNoteTest() {
  let notelist = new noteList();
  notelist.addNote('hello');
  assert.isTrue(notelist.allNotes[0] === 'hello');
}

addNoteTest();

function displayAllNotes() {
  let notelist = new noteList();
  notelist.addNote('hello');
  notelist.addNote('world');
  let expected = ['hello', 'world']; 
  console.log(notelist.displayNotes());
  console.log(expected);
  assert.isTrue(notelist.displayNotes() == 'hello');
  // doesn't work with array? ['hello', 'world']
}

displayAllNotes();