// create a note object with text
// pass in the text as parameter 

(function() {
  function noteHasText() {
    var note = new Note('This is a note');

    if (note.body !== 'This is a note') {
      throw new Error('Test failed')
    } else {
      console.log('Test passed')
    }
  };

  noteHasText();

})(this);