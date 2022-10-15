// const addToCart=()=>{
//     alert("Added")
// }

const showCheckoutDileveryAddress = () => {
  document.getElementById("checkoutdileveryaddress").classList.add("d-block");
};
const hideCheckoutDileveryAddress = () => {
  document
    .getElementById("checkoutdileveryaddress")
    .classList.remove("d-block");
};
function resetForm() {
  document.getElementById("userInfoForm").reset();
}
function Creditcarddigitmore() {
    document.getElementById('cardno16').classList.add('d-block')
    document.getElementById('cardno15').classList.remove('d-block')  
}
function Creditcarddigitless() {
    document.getElementById('cardno16').classList.remove('d-block')
    document.getElementById('cardno15').classList.add('d-block')  
}
