    //<script src="/Users/CCB/desktop/eecs/workspace/brainstorm_js/scripts/bundle.js"></script>
var imported = document.createElement('script');
imported.src = '/Users/CCB/desktop/eecs/workspace/brainstorm_js/scripts/bundle.\
js';
document.head.appendChild(imported);

  //Script for list generation/manipulation-
  
  var word_list = ['A', 'a', 'aa', 'aal', 'aalii', 'aam', 'Aani', 'aardvark',
                   'aardwolf', 'Aaron', 'Aaronic', 'Aaronical', 'Aaronite',
                   'Aaronitic', 'Aaru', 'Ab', 'aba', 'Ababdeh', 'Ababua', 
                   'abac', 'abaca', 'abacate', 'abacay'];

$(document).ready(function() {

  //Bring "new_sentence" input box into focus when page is loaded
  $(window).on("load", function() {
    $("[autofocus]").focus();
  });

  //Eliminate default "Enter a new sentence to start." message in "new_sentence"
  //box when user clicks on it.
  $("#new_sentence").click(function() {
    $(this).text("");
  });
  
  // Populate background with words from word_list for testing
  for (word in word_list) {
    var new_word = '<li>' + word + '</li>';
    $('newsprint_background').append(new_word);
  }
});

    var sentence_list = [];
    var noun_list = [];
    //adds new sentence to sentence_list

    function add_sentence() {
      //extract sentence entered in input field and add to sentence_list
      var new_sentence = document.getElementById('new_sentence').value;
      sentence_list.push(new_sentence);
      //add to sentence_list element in html page
      $("#sentence_list").append("<li class=\'list-group-item\'>"  
                                        +  new_sentence + "</li>");
      add_nouns(new_sentence);
    }
    //adds new nouns from new_sentence to noun_list
    function add_nouns(added_sentence) {
      var pos = require('pos');
      var words = new pos.Lexer().lex(added_sentence);
      var tagger = new pos.Tagger();
      var taggedWords = tagger.tag(words);
      //go through all words in added_sentence 
      for (i in taggedWords) {
        var taggedWord = taggedWords[i];
        var word = taggedWord[0];
        var tag = taggedWord[1];
        //add each noun in added_sentence to noun_list if it is a singular noun,
        //plural noun, proper singular noun, or proper plural noun
        if (tag == 'NN' || tag == 'NNP' || tag == 'NNPS' || tag == 'NNS') {
          noun_list.push(word);
          $("#noun_list").append("<li onclick=\"document.getElementById(\'new_s\
entence\').value=\'" + grd +"\'\"+ class=\'list-group-item\' id=\"noun_item\">" 
          + word + "</li>");
        }
      }
    }