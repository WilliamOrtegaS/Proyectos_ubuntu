//Objetos 
//var array =['HTML', 15 , true]
//console.log(array[0]);
/*var objeto = {
    nombre:'HTML',
    duracion:15,
    estado: true,
    capitulos:{
        nombre: 'Introduccion',
        videos:20
    }
}
console.log(objeto.capitulos);
*/

var arrayobjetos =[
    {
        nombre:'HTML',
        estado:true
    },
    {
        nombre:'CSS',
        estado:true
    },
    {
        nombre:'JS',
        estado:false
    }
]
//console.log(arrayobjetos[0].nombre);
//console.log(arrayobjetos[1].nombre);
//console.log(arrayobjetos[2].nombre); 

for (let indice of arrayobjetos){
    console.log(indice.nombre);

}
document.write('hola mundo');

