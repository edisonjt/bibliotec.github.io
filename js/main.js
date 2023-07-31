// <!-- Abrir / cerrar menu --> 
$("#content-wrapper").toggleClass("toggled");
$("#menu-toggle").click(function (e) {
  e.preventDefault();
  $("#content-wrapper").toggleClass("toggled");
});

let products = [];
let total = 0;

function add(product, price) {
    console.log(product, price);
    products.push(product);
    total = total + price;
    document.getElementById("checkout").innerHTML = `Pagar $${total}`
}

function pay() {
  $("#info").html("\NOMBRES: "+products.join(", "));
  $("#total").html("\nTOTAL: "+total);
  $("#cantidad").html("\CANTIDAD: $"+products.length);

}


$(document).ready(function() {
  $('#rateMe1').mdbRate();
});


    
