$(function() {
  var isNumberKey = function(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    console.log(charCode);
    if (charCode != 46 && charCode != 45 && charCode > 31 &&
      (charCode < 48 || charCode > 57))
      return false;

    return true;
  };

  var isNumber = function(event) {

    if (event.which != 8 && isNaN(String.fromCharCode(event.which))) {
      event.preventDefault(); //stop character from entering input
    }
  };

  $("#field-maintainer_phone").keypress(isNumberKey);
  $("#field-weight").keypress(isNumber);

});
