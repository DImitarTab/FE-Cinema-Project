// import $ from 'jquery'; Before using jQuery, install it with `yarn add jquery`
import "./more-javascript/more.js";
import "./style/style.scss";
import "./style/vendor/style.css";
import $ from "jquery";

let selectedSeats = [];
const urlParams = new URLSearchParams(window.location.search);
const myTime = urlParams.get("time");

// $(".seats").click(function() {
//   selectedSeats = [];
//   $(".seats:checked").each(function() {
//     var test = this.checked ? $(this).data("seat") : "";
//     selectedSeats.push(test);
//   });
//   $(".form-seats").val(selectedSeats.join(", "));
//   $(this).toggleClass("clicked");
//   $(this)
//     .parent()
//     .toggleClass("selected");
// });

$(function() {
  let url = new URL(document.location);
  let params = url.searchParams;
  let paper = params.get("movie");
  $(".movie-select").val(paper);

  $(".seats").click(function() {
    selectedSeats = [];
    $(".seats:checked").each(function() {
      var test = this.checked ? $(this).data("seat") : "";
      selectedSeats.push(test);
    });
    $(".form-seats").val(selectedSeats.join(", "));
    $(this).toggleClass("clicked");
    $(this)
      .parent()
      .toggleClass("selected");
  });

  if (typeof window.history.pushState == "function") {
    window.history.pushState(
      {},
      "Hide",
      "http://localhost:8008/book-ticket.html"
    );
  }
});

window.onload = function() {
  SetDefaultValue();
};

function SetDefaultValue() {
  document.getElementById("time-of-screening").value = myTime;
}

/*
To use jQuery, first install it as a dependency: `yarn add jquery`.
Then include `import $ from 'jquery';` at the top every JavaScript file that uses jQuery.
$('h1').mouseover(() => {
  alert('h1 hovered!');
});
*/
