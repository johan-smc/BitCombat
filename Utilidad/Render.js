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

    document.getElementById('AnteriorCubierta').onmouseup = anteriorCubierta;
    document.getElementById('SiguienteCubierta').onmouseup = siguienteCubierta;

    document.getElementById('AnteriorMotor').onmouseup = anteriorMotor;
    document.getElementById('SiguienteMotor').onmouseup = siguienteMotor;

    document.getElementById('AnteriorArma').onmouseup = anteriorArma;
    document.getElementById('SiguienteArma').onmouseup = siguienteArma;

    //Crear Imagenas estaticas
    var cabina = document.createElement("img");
    cabina.src = "Nave/Cabina.png";

    var cubierta_Viso = document.createElement("img");
    cubierta_Viso.src = "Nave/Cubierta/Viso/Cubierta_Viso_" + indxCubierta_Viso + ".png";
    var cubierta_Borde = document.createElement("img");
    cubierta_Borde.src = "Nave/Cubierta/Cubierta_Borde.png";

    var motor_Borde = document.createElement("img");
    motor_Borde.src = "Nave/Motor/Motor_Borde.png";
    var motor_Viso = document.createElement("img");
    motor_Viso.src = "Nave/Motor/Viso/Motor_Viso_" + indxCubierta_Viso + ".png";
    var motor_TK = document.createElement("img");
    motor_TK.src = "Nave/Motor/Motor_TK.png";

    var arma_Borde = document.createElement("img");
    arma_Borde.src = "Nave/Arma/Arma_Borde.png";
    var arma_Viso = document.createElement("img");
    arma_Viso.src = "Nave/Arma/Viso/Arma_Viso_" + indxArma_Viso + ".png";

    //Inciar canvas estaticos
    var c_Cabina = document.getElementById('Cabina');
    ctx = c_Cabina.getContext("2d");
    ctx.drawImage(cabina, 0, 0, c_Cabina.width, c_Cabina.height);

    var c_Cubierta_Borde = document.getElementById('Cubierta_Borde');
    ctx = c_Cubierta_Borde.getContext("2d");
    ctx.drawImage(cubierta_Viso, 0, 0, c_Cubierta_Borde.width, c_Cubierta_Borde.height);
    ctx.drawImage(cubierta_Borde, 0, 0, c_Cubierta_Borde.width, c_Cubierta_Borde.height);

    var c_Motor_Borde = document.getElementById('Motor_Borde');
    ctx = c_Motor_Borde.getContext("2d");
    ctx.drawImage(motor_TK, 0, 0, c_Motor_Borde.width, c_Motor_Borde.height);
    ctx.drawImage(motor_Viso, 0, 0, c_Motor_Borde.width, c_Motor_Borde.height);
    ctx.drawImage(motor_Borde, 0, 0, c_Motor_Borde.width, c_Motor_Borde.height);

    var c_Arma_Borde = document.getElementById('Arma_Borde');
    ctx = c_Arma_Borde.getContext("2d");
    ctx.drawImage(arma_Viso, 0, 0, c_Arma_Borde.width, c_Arma_Borde.height);
    ctx.drawImage(arma_Borde, 0, 0, c_Arma_Borde.width, c_Arma_Borde.height);

    actualizarCubierta();
    actualizarMotor();
    actualizarArma();
  }

  //Actualizar Canvas
  function actualizarCubierta(){
    var c_Cubierta = document.getElementById('Cubierta');

    var cubierta_Base = document.createElement("img");
    cubierta_Base.src = "Nave/Cubierta/Base/Cubierta_Base_" + indxCubierta + ".png";

      if (c_Cubierta.getContext)
      {
        ctx = c_Cubierta.getContext("2d");

        ctx.save();
        ctx.clearRect( 0, 0, c_Cubierta.width, c_Cubierta.height);
        ctx.drawImage(cubierta_Base, 0, 0, c_Cubierta.width, c_Cubierta.height);
        ctx.restore();
      }
  }
  function actualizarMotor(){
    var c_Motor = document.getElementById('Motor');

    var motor_Base = document.createElement("img");
    motor_Base.src = "Nave/Motor/Base/Motor_Base_" + indxMotor + ".png";

    if (c_Motor.getContext)
    {
      ctx = c_Motor.getContext("2d");

      ctx.save();
      ctx.clearRect( 0, 0, c_Motor.width, c_Motor.height);
      ctx.drawImage(motor_Base, 0, 0, c_Motor.width, c_Motor.height);
      ctx.restore();
    }
  }
  function actualizarArma(){
    var c_Arma = document.getElementById('Arma');

    var arma_Base = document.createElement("img");
    arma_Base.src = "Nave/Arma/Base/Arma_Base_" + indxArma + ".png";

    if (c_Arma.getContext)
    {
      ctx = c_Arma.getContext("2d");

      ctx.save();
      ctx.clearRect( 0, 0, c_Arma.width, c_Arma.height);
      ctx.drawImage(arma_Base, 0, 0, c_Arma.width, c_Arma.height);
      ctx.restore();
    }
  }
  function siguienteCubierta(){
    indxCubierta++;
    if(indxCubierta > 5){
      indxCubierta = 1;
    }
    actualizarCubierta();
  }
  function anteriorCubierta(){
    indxCubierta--;
    if(indxCubierta < 1){
      indxCubierta = 5;
    }
    actualizarCubierta();
  }
  function siguienteMotor(){
    indxMotor++;
    if(indxMotor > 5){
      indxMotor = 1;
    }
    actualizarMotor();
  }
  function anteriorMotor(){
    indxMotor--;
    if(indxMotor < 1){
      indxMotor = 5;
    }
    actualizarMotor();
  }
  function siguienteArma(){
    indxArma++;
    if(indxArma > 5){
      indxArma = 1;
    }
    actualizarArma();
  }
  function anteriorArma(){
    indxArma--;
    if(indxArma < 1){
      indxArma = 5;
    }
    actualizarArma();
  }

  return {
    'iniciar': iniciar
  };
});
