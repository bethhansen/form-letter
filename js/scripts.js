$(document).ready(function() {
  $("form").submit(function(event) {
    alert("hi");
    var inputIds = ["firstName","lastName"];
    inputIds.forEach(function(inputId){
      inputValue = $("input#" + inputId).val();
      $(".letter ." + inputId).text(inputValue);
    });

    var iceCreams = ["vanilla", "chocolate", "mintchip", "cookiedough"];
    iceCreams.forEach(function(iceCream) {
        $(".flavors").append(iceCream + "\r\n");
    });
    var numbers = [1, 2, 3, 4, 5, 6];
    var numbersPlusOne = numbers.map(function(number){
        return number + 1;
    });
    alert(numbers);
    alert(numbersPlusOne);

    var words = ["happy","sad","frustrated","excited"];
    var wordsUpper = words.map(function(word){
      return word.toUpperCase();
    });
    alert(words);
    alert(wordsUpper);



    $(".letter").show();

    event.preventDefault();
  });
});
