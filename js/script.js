

let registro = false;
let articulo = 0;
let cantidad = 0;
let total = 0;
let acumulado= 0;
let seguir = "si";

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

class Productos{
    constructor(nombre, precio, stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    agregarStock(nuevoStock){
        this.stock= this.stock + nuevoStock;
    }
    vender(venta){
        if(venta<=this.stock){
            this.stock = this.stock - venta;
            total= this.precio * venta;
            
        }else{
            console.log("la cantidad solicitada sobrepasa el stock actual, indique una cantidad menor");
        }
        return total;
    }
}

const listaProductos = [];

listaProductos.push(new Productos("camiseta titular Argentina 2021", 3000, 35));
listaProductos.push(new Productos("camiseta suplente Argentina 2021", 3000, 25));
listaProductos.push(new Productos("camiseta titular Psg", 4000, 20));
listaProductos.push(new Productos("remera blanca Paris", 1000, 10));
listaProductos.push(new Productos("camiseta suplente Psg", 3500, 15));
listaProductos.push(new Productos("buzo con capucha negro", 5000, 4));
listaProductos.push(new Productos("vaso aluminio 1lt", 1000, 20));
listaProductos.push(new Productos("taza Messi", 1500, 30));


console.log(listaProductos);
listaProductos[0].agregarStock(15);
console.log(listaProductos[0]);


do{
    articulo = prompt("ingrese el numero del articulo");
    if(articulo< listaProductos.length){
        cantidad = prompt("ingrese las unidades que solicita");
        listaProductos[articulo].vender(cantidad);
    } else{
        console.log("el articulo seleccionado no esta en la lista");
    }  
    acumulado= acumulado+total;
    alert("el total de su compra es: $"+ acumulado);
    seguir = prompt("desea seguir agregando productos al carrito? si/no");
}while(seguir==="si");

