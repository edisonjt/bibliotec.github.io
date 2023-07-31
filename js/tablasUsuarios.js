var xmlhttp = new XMLHttpRequest();
let url = "../JSON/usuarios.json";

function traerDatos() {
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var datos = JSON.parse(this.responseText);
      var est = calificar();
      cargarDatos(datos, 2);
    }
  }
} traerDatos();

xmlhttp.open("GET", url, true);
xmlhttp.send();

function cargarDatos(d, num) {
  var table = document.getElementById('myTable')
  for (var x = 0; x < d.members.length; x++) {
    var user = "usuario" + (x+1) + ".png' ";
    text = "<tr>";
    text += "<td class='p-4'>" + d.members[x].name + "</td><td class='p-4'>" + d.members[x].usertype + "</td><td class='p-4'>" + d.members[x].telf + "</td><td class='p-4'>" + d.members[x].email + "</td><td class='p-4'>" + "<img src='../img/tablasUsuarios/" + user + "alt=''>" + "</td><td class='p-4'>" + d.members[x].cedula + "</td><td class='p-4'>";
    for (var es = 1; es <= num; es++) {
      text += "<i class='fa fa-star fa-1x mr-1 ml-1'></i>";
    }
    text += "</td><td class='sorting_1'><button class='btn btn-warning mx-2' id=" + x + " onclick='' type='button' data-toggle='modal' data-target='#calificacionModal' style='width: 60px;'><i class='fa fa-pen-to-square fa-2x mr-1 ml-1'></i></button><button class='btn btn-danger' onclick='' style='width: 60px;'><i class='fa fa-times fa-2x mr-2 ml-2'></i></button>";
    text += "</td></tr>";
    table.innerHTML += text;
  }
}

function calificar() {
  let estrellas = document.getElementById("calificacion").value;
  return estrellas;
}

// function actualizar(id) {
//   let col = 4;
//   var fil = id.id;
//   alert(fil);
// }

$(function () {
  $(document).on('click', 'button[type="button"]', function (event) {
    let id = this.id;
    var texte = "";
    var col = 6;
    var fil = parseInt(id);
    let celda = document.getElementById("myTable").rows[fil + 1].cells;
    //for (var es = 1; es <= calificar(); es++) {
      //texte += "<i class='fa fa-star fa-1x mr-1 ml-1'></i>";
      celda[col].innerHTML += "<i class='fa fa-star fa-1x mr-1 ml-1'></i>";
  //  }
    //celda[col].innerHTML = texte;
  });
});

// <!-- Abrir / cerrar menu --> 
$("#content-wrapper").toggleClass("toggled");
$("#menu-toggle").click(function (e) {
  e.preventDefault();
  $("#content-wrapper").toggleClass("toggled");
});



