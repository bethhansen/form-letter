$(document).ready(function() {
  $("form").submit(function(event) {
    alert("hi");

    var inputIds = ["dairy", "meat", "vegitables"];//this creates an array of user inputs
    var inputValues = [];//this turns the inputs into values

    inputIds.forEach(function(inputId){
      inputValue = $("input#" + inputId).val();
      alert(inputValue);
      inputValues.push(inputValue);
    });
    var sortedInputValues = inputValues.sort();
    alert(inputValues);
    var sortedInputValues = sortedInputValues.map(function(sortedUpper){
      return sortedUpper.toUpperCase();
    });
    alert(sortedInputValues);
    alert(sortedUpper);

//     var newList = sortedUpper;
//       $(".newList").append(newList + "\r\n");
// alert(whew);



// need to debug from here
    // var inputValues = sortedInputValues.map(function(sortedInputValue){
    //   return sortedInputValue.toUpperCase();
    // });
alert(now);
    // inputValueUpper.foreach(function(inputValueUpper){
    //   $("#newList ul").append(inputValueUpper);
    // });
    $(".letter").show();
    event.preventDefault();
  });
});
