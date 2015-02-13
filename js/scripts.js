var wordOrder = function(input) {
  var listOfWords = input.toLowerCase().split(" ");
  var answer = {};

  listOfWords.forEach(function(word) {
    // if (/[.!@#$%^&*(),?]/.test(word)) {
      word = word.replace(/[.!@#$%^&*(),?]/g,"");
    // }

    if (answer[word] === undefined) {
      answer[word] = 1;
    } else {
      answer[word] += 1;
    }
  });

  return (Object.keys(answer).sort(function(a, b) {return answer[b]-answer[a]})).join(" ");
};

$(document).ready(function() {
  $("form#word-order").submit(function(event) {
    var input = $("input#input").val();
    var answer = wordOrder(input);

    $(".word-answer").text(answer);
    $("#result").show();

    event.preventDefault();
  });
});
