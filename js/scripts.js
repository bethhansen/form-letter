$(document).ready(function() {
  $("form").submit(function(event) {


    alert("hi");
    var inputIds = ["firstName","lastName"];
    inputIds.forEach(function(inputId){
      alert (inputId);
      inputValue = $("input#" + inputId).val();
      alert (inputValue);
      $(".letter ." + inputId).text(inputValue);
    });

    var iceCreams = ["vanilla", "chocolate", "mintchip", "cookiedough"];
    iceCreams.forEach(function(iceCream) {
        $(".flavors").append(iceCream + "\r\n");
    });


    $(".letter").show();

    event.preventDefault();
  });
});
