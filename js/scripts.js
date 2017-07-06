$(document).ready(function () {
  $("form#formletter").submit(function(event) {
    var firstNameInput = $("input#firstName").val();
    var lastNameInput = $("input#lastName").val();

    $(".letter .firstName").text(firstNameInput);
    $(".letter .lastName").text(lastNameInput);

    $(".letter").show();

    event.preventDefault();
  });
});
