assert = new Assert;



function noteHasText() {
var note = new Note('This is a note');
assert.isTrue(note.text === 'This is a note');
}

noteHasText();

function noteDisplayedOnPage() {
var note = new Note('This is a note');
assert.isTrue(note.displayText() === 'This is a note');
}

noteDisplayedOnPage();

