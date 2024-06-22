//Variables
//let palabraVeces = 'vez';
let numeroMaximoPosible = 20;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1; 
let numeroUsuario = 0;
let intentosUsuario = 1;
let maximoIntentos =6;
while (numeroUsuario != numeroSecreto){ 
    numeroUsuario = prompt (`Ingresa un nùmero del 1 al ${numeroMaximoPosible} por favor:`);
     //Este codigo realiza la comparacion
     if (numeroUsuario == numeroSecreto){
        //fue verdadera la condicion
        alert(`Acertaste, el número secreto es: ${numeroUsuario} lo hiciste en ${intentosUsuario} ${intentosUsuario == 1? 'vez' : 'veces'}`);
    } else {
        if (numeroUsuario > numeroSecreto){
            alert(`El numero secreto es menor`);  
        }else {
            alert(`El numero secreto es mayor`);         
        }
        //Incrementamos el contador cuando el usuario no acierta
        //intentosUsuario +=1;
        //intentosUsuario = intentosUsuario +1;
        intentosUsuario++;
        palabraVeces = 'veces'; 
        if (intentosUsuario > maximoIntentos){ 
            alert(`Llegaste el número máximo de ${ maximoIntentos } intentos, el número secreto es el: ${ numeroSecreto}`);
            break;
        }
        //La condicion no es verdadera  
    };
};
 
