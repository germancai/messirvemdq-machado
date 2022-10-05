function compra(articulo,cantidad){
    switch(articulo){
        case "001":
            return 3000*cantidad;
            break;
        case "002":
            return 3000*cantidad;
            break;
        case "003":
            return 4000*cantidad;
            break;
        case "004":
            return 1000*cantidad;
            break;
        case "005":
            return 3500*cantidad;
            break;
        case "006":
            return 5000*cantidad;
            break;
        case "007":
            return 1000*cantidad;
            break;
         case "008":
             return 2000*cantidad;
             break;
         case "009":
             return 1500*cantidad;
             break;
        default:
            return 0;
            break;
                                                                        
    }
}

let registro = false;

do {
const nombre = prompt("ingrese su nombre");
const apellido = prompt("ingrese su apellido");
const usuario = prompt("ingrese su usuario");
const clave = prompt("ingrese su contraseña");

if ((nombre !=="")&& (apellido !="") && (usuario !="") && (clave !="")){
    alert("Bienvenido "+ nombre+ " "+ apellido+" su usuario es: "+ usuario);
    registro = true;
} else{
    alert("vuelva a ingresar los datos por favor");
}

}while(registro===false);

let articulo = 0;
let cantidad = 0;
let total = 0;
let acumulado= 0;
let seguir = "si";

//do{
alert("Estos son los articulos disponibles: 001=camiseta Argentina titular 002=camiseta Argentina suplente 003=camiseta PSG 004=remera Paris blanca 005=camiseta suplente PSG 006= buzo con capucha negro 007=vaso aluminio 008=funko 009=taza");
articulo = prompt("ingrese el numero del articulo");
cantidad = prompt("ingrese las unidades que solicita");
total= compra(articulo,cantidad);
acumulado= acumulado+total;
alert("el total de su compra es: $"+ acumulado);
seguir = prompt("desea seguir agregando productos al carrito? si/no");
//}while(seguir===si);
//no me funciona el do while.
