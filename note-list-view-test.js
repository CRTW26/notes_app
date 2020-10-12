assert = new Assert;

//Note list view object instantiated with a note list model .

// function viewNoteList() {
//   var all_notes = ['Hello','World']
//   var note_list = new NoteList(all_notes);
//   assert.isTrue(note_list.allNotes == all_notes);
// }
// viewNoteList() 

function noteListFormatterTest() {
  var all_notes = ['Hello','World']
  var note_view = new NoteView(all_notes);
  assert.isTrue(note_view.noteListFormatter() == "<ul><li><div>Hello</div></li><li><div>World</div></li></ul>");
}
noteListFormatterTest() 