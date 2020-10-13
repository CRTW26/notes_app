assert = new Assert; 

function noteListFormatterTest() {
  let notelist = new noteList();
  notelist.addNote('hello');
  notelist.addNote('world');
  var note_view = new noteView(notelist);
  assert.isTrue(note_view.noteListFormatter() == "<ul><li><div>hello</div></li><li><div>world</div></li></ul>");
}
noteListFormatterTest();