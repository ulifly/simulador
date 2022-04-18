
// cambiar los document write por id para agreagar formato, revisar linea 87
alert("iniciando prueba de diagnostico");
let encnedido = confirm("su equipo enciende? (revisa que encienda alguna luz de encendido o escuches los ventiladores)");
let resultado = "";


// esta es la funcion inicla prueba de encendido
function prueba_de_encendido(encendido){
    if (encendido==true) {
        let os_test = confirm("tu equipo accede al sistema operativo?");
        no_os(os_test);
    } else {
        let conectado = confirm("tu equipo este conectado correctamente?(revisa el cable de corriente, si es un portatil que el cargador encienda la luz)")
        no_enciende(conectado);
    }
}

prueba_de_encendido(encnedido);


// funcion de resolucion si no enciende 

function no_enciende(conectado){
    if (conectado == true) {
        resultado = ("reemplza el cargador(si es portatil) o la funete de poder de tu equipo");
        return resultado;
    } else {
        resultado = ("conecta correctamete tu eqipo y deberia funcionar, <br> si ya enciende y no funciona correctamente reinicia el sistema de diagnostico");
        return resultado;
    } 
}

//funcion de resolucion entra al sistema operativo
function no_os(os_test) {
    if (os_test == true) {
        let so_overheat = confirm ("tu equipo se reinicia mientras estas en el sistema operativo?");
        calentemiento(so_overheat);
    } else {
        alert("intenta reinstalando el sitema operativo");
        let os_install = confirm("es posible reinstalar el sistema operativo?");
        if (os_install == true) {           
            resultado = ("tu equipo tenia un fallo en el sistema operativo,<br> recuerda que despues de reinstalar el sistema operativo debes instalar los drivers<br> y los programas que necesites");
            return resultado;
        } else {
            alert("reemplaza la unidad de almacenamiento e instala el sistema operativo");
            let hd_test = confirm("el problema se resolvio?"); 
            hd_prueba(hd_test);
        }
    }
}


//funcion de resolucion si tenia fallo en la unidad de almacenamiento 
function hd_prueba(hd_test) {
    if (hd_test == true) {
        resultado = ("tu equipo tenia un fallo en la unidad de almacenamiento,<br> recuerda que despues de reinstalar el sistema operativo debes instalar los drivers<br> y los programas que necesites");
        return resultado;
    } else {
        resultado = ("tu equipo probablemente tenga un fallo en alguno de sus componentes de hardware, contacta a tu tecnico");
        return resultado;
    }
}


// funcion diagnsotico envia a html el diagnostico( cambiar por algo mas visual )
 function diagnostico(resultado) {
     document.write(resultado);
 }


//funcion de daignostico posible sobrecalentamiento
function calentemiento(so_overheat) {
    if (so_overheat == true)  {
        resultado = ("es probable que tu equipo se esta sobrecalentando, o tenga un fallo de hardware, contacta a tu tecnico");
        return resultado;
    } else {
        let so_roto = confirm("tu equipo se traba?");
        diagnostico_mem(so_roto);
    }
}
//funcion de simulador de daignostico de memoria
function diagnostico_mem (so_roto) {
    if (so_roto == true) {
        alert("se realizara una prueba de memoria, si el equipo deja de responder o se reinicia, es probable que la memoria este dananda, contacte a soporte tecnico");
        let bloques_memoria = parseFloat(prompt("cuantos bloques de memoria desea probar (valor entre 1,024 y 16,384  )"));
        //aqui seria bueno poner una validacion apra repetir si se introcuce dato invalido
        if (bloques_memoria >= 1024 && bloques_memoria <= 16348) {
            mem_test(bloques_memoria);
        } else {
            alert("introduzca un valor valido");
        }              
    } else {
        resultado = ("su equipo deberia funcionar correctamente, si no es asi consulte al servicio tecnico");
        return resultado;
    }

}

// funcion de prueba de memoria (simulado obviamente);
function mem_test (bloques_memoria) {
    for (let i = 0; i < bloques_memoria; i+=1){
        document.write("probando bloque de memoria " + i + "<br>");      
    }
    document.write("prueba de memoria exitosa");
}



 //se llama a la funcion para desplegar el resultado
 diagnostico(resultado);