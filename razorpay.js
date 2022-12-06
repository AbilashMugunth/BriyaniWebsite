// *! Razorpay ////////////////////////////////////////////////////

let checkoutBtn = document.querySelector("#rzp-button1");
checkoutBtn.addEventListener("click", (e) => {
  console.dir(e.target.previousElementSibling.innerText);
  let totalValue = e.target.previousElementSibling.innerText;

  var options = {
    key: "rzp_test_yw82UVdqb63LLR",
    amount: totalValue * 100,
    currency: "INR",
    name: "B for Briyani",
    description: "Bill",
    image: "/images/catering.jpg",
    handler: function (response) {
      alert(response.razorpay_payment_id);
      alert(response.razorpay_order_id);
      alert(response.razorpay_signature);
    },
    prefill: {
      name: "Abilash",
      email: "abimugunthan2000@gmail.com",
      contact: "9943167123",
    },
    notes: {
      address: "Razorpay Corporate Office",
    },
    theme: {
      color: "#ea811d",
    },
  };

  var rzp1 = new Razorpay(options);

  rzp1.open(totalValue);
  e.preventDefault();
});
