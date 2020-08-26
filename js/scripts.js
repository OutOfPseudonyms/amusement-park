$(document).ready(function () {
  const height = parseInt(prompt("How many centimeters tall are you?"));

  if (height < 91) {
    $('#too-short').show();
  } else if (height >= 91 && height < 121) {
    $('#small').addClass("text-success").show();
    $('#large').addClass("text-danger").show();
  } else if (height >= 121 && height < 152) {
    $('#small, #large').addClass("text-success").show();
  } else if (height >= 152) {
    $('#small').addClass("text-danger").show();
    $('#large').addClass("text-success").show();
  }
});