$(document).ready(function(){
    $('#goRight').on('click', function(){
      $('#slideBox').animate({
        'marginLeft' : '0'
      });
      $('.topLayer').animate({
        'marginLeft' : '100%'
      });
    });
    $('#goLeft').on('click', function(){
      $('#slideBox').animate({
        'marginLeft' : '50%'
      });
      $('.topLayer').animate({
        'marginLeft': '0'
      });
    });
  });

  function Login(){ 
    var done=0; 
    var usuario=document.getElementById("user").value; 
    var password=document.getElementById("password").value; 
    if (usuario=="admin" && password=="admin") { 
      window.location="/html/inicio.html"; 
    } else {
      alert("Usuario y contraseña inválidos"); 

    }
    // if (usuario=="usuario" && password=="usuario") { 
    //   window.location="#"; 
    // } 
    // if (usuario=="" && password=="") { 
    // } 
} 