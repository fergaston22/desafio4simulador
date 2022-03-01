//CALCULA TU PRESUPUESTO

//Funcion - suma de los gastos
function suma (alojamiento, transporte, comida){

    let gastos = parseInt(alojamiento) + parseInt (transporte) + parseInt (comida);

    document.write("El destino que elegiste es " + destino + "<br>");

    document.write("La suma de tus gastos es de: " + gastos + "<br>" );

}

//resta - el presupuesto que tienen el viajero MENOS la suma de los gastos 
function resta (presupuesto, gastos){
    
    let balance = parseInt(presupuesto) - parseInt (gastos) ;
    document.write("El balance de tu viaje es: " + balance + "<br>");

    //if para saber si la plata que tiene le alcanza o no para realizar el viaje
    if(balance > 0){
        document.write("Tienes el dinero suficiente para viajar" + "<br>");
        alert("Arma las valijas y Buen Viaje");
    }
    else if(balance < 0 ){
        document.write("No tienes el dinero suficiente para realizar este viaje" + "<br>");
        alert("A seguir ahorrando...");
    }
    else {
        document.write("Estas medio ajustado para realizar este viaje"+ "<br>");
        alert("Vamos ajustados pero vamos?");
    }    

}

let destino = prompt (" A que destino te gustaria viajar?").toUpperCase();

let presupuesto = parseInt( prompt ("Cuanto dinero tienes en total?"));

let transporte = parseInt(prompt("Cuanto dinero esta destinado al transporte?")) ;

let comida = parseInt(prompt ("Cuanto dinero tenes destinado a la comida?")) ;

let alojamiento = parseInt(prompt ("Cuanto dinero tenes destinado al alojamiento?")) ;

let gastos = parseInt(alojamiento) + parseInt (transporte) + parseInt (comida);

suma(alojamiento, transporte, comida);

resta(presupuesto, gastos);