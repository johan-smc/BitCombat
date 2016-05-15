var render = render || {};

//Construir al terminar de cargar la ventana
window.onload = function(){
  new render.MenuAspecto().iniciar();
}

//Constructor
render.MenuAspecto = (function() {
  var indxCubierta = 1, indxCubierta_Viso = 3;
  var indxArma = 1, indxArma_Viso = 3;
  var indxMotor = 1, indxMotor_Viso = 3;
  var ctx;

  //Agecutar al iniciar
  function iniciar(){
    //Eventos de boton

    //Cubierta
    document.getElementById('AnteriorCubierta').onmouseup = anteriorCubierta;
    document.getElementById('SiguienteCubierta').onmouseup = siguienteCubierta;
    //Motor
    document.getElementById('AnteriorMotor').onmouseup = anteriorMotor;
    document.getElementById('SiguienteMotor').onmouseup = siguienteMotor;
    //Arma
    document.getElementById('AnteriorArma').onmouseup = anteriorArma;
    document.getElementById('SiguienteArma').onmouseup = siguienteArma;

    actualizar();
  }

  //Re hacer canvas actualizado
  function actualizar(){
    var canvas = document.getElementById("Canvas");

    //Crear elementos de canvas
    var cabina = document.createElement("img");
    cabina.src = "Nave/Cabina.png";

    var cubierta_Base = document.createElement("img");
    cubierta_Base.src = "Nave/Cubierta/Base/Cubierta_Base_" + indxCubierta + ".png";
    var cubierta_Viso = document.createElement("img");
    cubierta_Viso.src = "Nave/Cubierta/Viso/Cubierta_Viso_" + indxCubierta_Viso + ".png";
    var cubierta_Borde = document.createElement("img");
    cubierta_Borde.src = "Nave/Cubierta/Cubierta_Borde.png"

    var motor_Base = document.createElement("img");
    motor_Base.src = "Nave/Motor/Base/Motor_Base_" + indxMotor + ".png";
    var motor_Viso = document.createElement("img");
    motor_Viso.src = "Nave/Motor/Viso/Motor_Viso_" + indxCubierta_Viso + ".png";
    var motor_Borde = document.createElement("img");
    motor_Borde.src = "Nave/Motor/Motor_Borde.png"
    var motor_TK = document.createElement("img");
    motor_TK.src = "Nave/Motor/Motor_TK.png"

    var arma_Base = document.createElement("img");
    arma_Base.src = "Nave/Arma/Base/Arma_Base_" + indxArma + ".png";
    var arma_Viso = document.createElement("img");
    arma_Viso.src = "Nave/Arma/Viso/Arma_Viso_" + indxArma_Viso + ".png";
    var arma_Borde = document.createElement("img");
    arma_Borde.src = "Nave/Arma/Arma_Borde.png";

    //Actulizar Context
      if (canvas.getContext)
      {
        ctx = canvas.getContext("2d");

        ctx.clearRect( 0, 0, canvas.width, canvas.height);
        ctx.drawImage(cabina, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(cubierta_Base, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(cubierta_Viso, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(cubierta_Borde, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(motor_Base, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(motor_Viso, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(motor_TK, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(motor_Borde, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(arma_Base, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(arma_Viso, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(arma_Borde, 0, 0, canvas.width, canvas.height);
      }
  }
  function siguienteCubierta(){
    indxCubierta++;
    if(indxCubierta > 5){
      indxCubierta = 1;
    }
    actualizar();
  }
  function anteriorCubierta(){
    indxCubierta--;
    if(indxCubierta < 1){
      indxCubierta = 5;
    }
    actualizar();
  }
  function siguienteMotor(){
    indxMotor++;
    if(indxMotor > 5){
      indxMotor = 1;
    }
    actualizar();
  }
  function anteriorMotor(){
    indxMotor--;
    if(indxMotor < 1){
      indxMotor = 5;
    }
    actualizar();
  }
  function siguienteArma(){
    indxArma++;
    if(indxArma > 5){
      indxArma = 1;
    }
    actualizar();
  }
  function anteriorArma(){
    indxArma--;
    if(indxArma < 1){
      indxArma = 5;
    }
    actualizar()
  }

  return {
    'iniciar': iniciar
  };
});
