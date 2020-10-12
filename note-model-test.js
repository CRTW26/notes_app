// create a note object with text
// pass in the text as parameter 

(function(exports) {
  function noteHasText() {
  var note = new Note('This is a note');
  assert.isTrue(note.body === 'This is a note');
};

var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Test failed:" + assertionToCheck);
    } else {
      console.log("Test passed!")
    }
  }
};

noteHasText();
})(this);

