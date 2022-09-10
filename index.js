var buttonRate = document.querySelectorAll(".btn");

var submit = document.querySelector(".btn-submit");

var ratingPage = document.querySelector(".rating");

var thankYouPage = document.querySelector(".thank-you");

var rating = document.querySelector(".rating-no");

for (let i = 0; i < buttonRate.length; i++) {
  buttonRate[i].addEventListener("click", function () {
    console.log("i got clicked");
    rating.innerHTML = buttonRate[i].innerHTML;
  });
}

submit.addEventListener("click", function () {
  ratingPage.classList.add("hidden");
  thankYouPage.classList.remove("hidden");
});
