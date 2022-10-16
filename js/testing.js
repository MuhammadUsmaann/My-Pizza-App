// const addToCart=()=>{
//     alert("Added")
// }

const showCheckoutDileveryAddress = () => {
  document.getElementById("checkoutdileveryaddress").classList.add("d-block");
  document.getElementById("copycheck").classList.add("d-flex");
};
const hideCheckoutDileveryAddress = () => {
  document
    .getElementById("checkoutdileveryaddress")
    .classList.remove("d-block");
  document.getElementById("copycheck").classList.remove("d-flex");
};

const showOnlinePayment = () => {
  document.getElementById("onlinepaymentsystem").classList.add("d-block");
};
const hideOnlinePayment = () => {
  document.getElementById("onlinepaymentsystem").classList.remove("d-block");
};

function resetForm() {
  document.getElementById("userInfoForm").reset();
}
function Creditcarddigitmore() {
  document.getElementById("cardno16").classList.add("d-block");
  document.getElementById("cardno15").classList.remove("d-block");
}
function Creditcarddigitless() {
  document.getElementById("cardno16").classList.remove("d-block");
  document.getElementById("cardno15").classList.add("d-block");
}

// function validateForm() {
//   var radios = document.getElementsByName("registergender");
//   var formValid = false;

//   var i = 0;
//   while (!formValid && i < radios.length) {
//       if (radios[i].checked) formValid = true;
//       i++;
//   }

//   if (!formValid) alert("Please select gender!");
//   return formValid;
// }

$("input[type=submit]").click(function () {
  alert("sfsdfsd");
  var atLeastOneChecked = false;
  $("input[type=radio]").each(function () {
    // If radio button not checked
    // display alert message
    if ($(this).attr("checked") != "checked") {
      // Alert message by displaying
      // error message
      $("#msg").html(
        "<span class='alert alert-danger' id='error'>" +
          "Please Choose atleast one</span>"
      );
    }
  });
});

function copyDileveryAddress() {
  var checkbox = document.getElementById("copydileveryaddres");
  if (checkbox.checked == true) {
    var street = document.getElementById("streetaddress").value;
    var apartement = document.getElementById("apartementaddress").value;

    if (street && apartement != "") {
      var billingstreet = (document.getElementById(
        "billingstreetaddress"
      ).value = street);
      var billingapartement = (document.getElementById(
        "billingapartementaddress"
      ).value = apartement);
    }
    else{
      alert('Please fill the Dilevery Address first')
      $("#copydileveryaddres").prop("checked", false);
    }
  } else {
    var billingstreet = (document.getElementById("billingstreetaddress").value =
      "");
    var billingapartement = (document.getElementById(
      "billingapartementaddress"
    ).value = "");
  }
}
