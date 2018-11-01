// import $ from 'jquery'; Before using jQuery, install it with `yarn add jquery`
import "./more-javascript/more.js";
import "./style/style.scss";
import "./style/vendor/style.css";
import $ from "jquery";

var selectedSeats = [];

$(".seats").click(function() {
  selectedSeats = [];
  $(".seats:checked").each(function() {
    var test = this.checked ? $(this).data("seat") : "";
    selectedSeats.push(test);
  });
  $(".form-seats").val(selectedSeats.join(", "));
  $(this).toggleClass("clicked");
});

/*
To use jQuery, first install it as a dependency: `yarn add jquery`.
Then include `import $ from 'jquery';` at the top every JavaScript file that uses jQuery.
$('h1').mouseover(() => {
  alert('h1 hovered!');
});
*/
