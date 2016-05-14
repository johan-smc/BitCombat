function llenar()
{
  var x=document.createElement("SCRIPT");
  var t=document.getElementById("in");
//  document.write(t.value);
  var y=document.createTextNode(t.value);
  x.appendChild(y);
  document.body.appendChild(x);
  var button='<button type=\"button\" class =\"btn btn-info\" aria-label=\"Right Align\" onclick=\"borrar()\">X</button>';
  var alerta='<div class=\"alert alert-info\" id=\"war\"> <i>'+t.value+''+button+'</I></div>';
  document.getElementById("ac").innerHTML =alerta;
}
//example
function myFunction() {
    var x = document.createElement("SCRIPT");
    var t = document.createTextNode("alert('Hello World!')");
    x.appendChild(t);
    document.body.appendChild(x);
    var v = getElementById("pre");
    v.innerHTML = "Hola";
}
function borrar()
{
  document.getElementById("ac").innerHTML="";
}
