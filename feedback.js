// *!FEEDBACK MODAL /////////////////////////

let feedModal = document.getElementById("feed-modal");

//  select the open-btn button
let feedOpenBtn = document.querySelector(".feedback");

// const cartContainer = document.querySelector(".cart-container");

//  select the modal-background
let feedModalBackground = document.getElementById("feed-modal-background");

//  select the close-btn
let feedCloseBtn = document.getElementById("feed-close-btn");

//  shows the modal when the user clicks open-btn
feedOpenBtn.addEventListener("click", function () {
  feedModalBackground.style.display = "block";
});

//  hides the modal when the user clicks close-btn
feedCloseBtn.addEventListener("click", function () {
  feedModalBackground.style.display = "none";
});

// hides the modal when the user clicks outside the modal
window.addEventListener("click", function (event) {
  //  check if the event happened on the modal-background
  if (event.target === feedModalBackground) {
    //  hides the modal
    feedModalBackground.style.display = "none";
  }
});
