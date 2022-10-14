const addToCart=()=>{
    alert("Added")
}

const showCheckoutDileveryAddress = () => {
    document.getElementById("checkoutdileveryaddress").classList.add('d-block')
}
const hideCheckoutDileveryAddress = () => {
    document.getElementById("checkoutdileveryaddress").classList.remove('d-block')
}
function resetForm() {
    document.getElementById("userInfoForm").reset();
}