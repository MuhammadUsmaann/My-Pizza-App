const menuData = [
  {
    id: 1,
    title: " Pizza",
    img: "images/pro_img2.png",
    desc: "Our standard “Mexican” is loaded",
    price: 10,
  },
  {
    id: 2,
    title: "Mexican Pizza",
    img: "images/pro_img2.png",
    desc: "Our standard “Mexican” is loaded",
    price: 545,
  },
  {
    id: 3,
    title: "Mexican Pizza",
    img: "images/pro_img2.png",
    desc: "Our standard “Mexican” is loaded",
    price: 1390,
  },
  {
    id: 4,
    title: "Mexican Pizza",
    img: "images/pro_img2.png",
    desc: "Our standard “Mexican” is loaded",
    price: 150,
  },
  {
    id: 5,
    title: "Mexican Pizza",
    img: "images/pro_img2.png",
    desc: "Our standard “Mexican” is loaded",
    price: 5450,
  },
  {
    id: 6,
    title: "Mexican Pizza",
    img: "images/pro_img2.png",
    desc: "Our standard “Mexican” is loaded",
    price: 5050,
  },
];

const cardText = document.querySelector("#p_Card");

let html = "";

let cartData = [];

const AddToCart = (data) => {
  alert(JSON.stringify(data));
};

let output = "";
menuData.forEach(function (item) {
  output += `
  <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
  <ul>

      <li>
          <div class="card">
              <div class="C_img"> <img src=${item.img}
                      class="absoImg" alt=""> </div>
              <div class="C_desc">
                  <h3 class="title">${item.title}</h3>
                  <p class="desc">${item.desc}</p>
                  <div class="price_block">
                      <div class="price">$  ${item.price}</div>
                      <button onclick="{AddToCart(item)}" class="card_btn">Add to
                          cart</button>
                  </div>
              </div>
          </div>
      </li>
  </ul>
</div>
`;
});
document.getElementById("p_Card").innerHTML = output;
