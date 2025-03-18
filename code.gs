function autoNumberFigures() {
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  var paragraphs = body.getParagraphs();

  var count = 1;

  for (var i = 0; i < paragraphs.length; i++) {
    var paragraph = paragraphs[i];
    var text = paragraph.getText();

    if (text && text.trim() !== '') {
       var updatedText = text.replace(/\[그림 (\d+)\./g, function(match, p1) {
       return '[그림 ' + count++ + '.';
    });

    if (updatedText !== text) {
       paragraph.setText(updatedText);
    }
    }
  }
}