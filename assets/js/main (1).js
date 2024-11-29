use base1;

//insertar el primer documento en la coleccion libro

db.libro.insertOne({
   _id: 1,
    nombre: 'El aleph',
    autor: 'Borges',
    editoriales: ['Planeta','Siglo XXI'],
    precio: 20,
    cantidad: 50
});

//id 2

db.libro.insertOne({
   _id: 2,
    nombre: 'Martin Fierro',
    autor: 'Jose Hernandez',
    editoriales: ['Planeta'],
    precio: 50,
    cantidad: 12
});

db.libro.find();
db


//inserion variosdocumentos
///_id3

db.libro.insertMany([{
    _id:3,
    titulo: 'Aprenda PHP',
    autor: 'Mario Molina',
    editorial: ['Siglo XXI', 'Planetaa'],
    precio: 50,
    cantidad: 20
},
{
    _id: 4,
    titulo: 'java en 10 minutos',
    editorial: ['Siglo XXI'],
    precio: 45,
    cantidad: 1
}
                    
])
db.libro.find();

db.libro.find({_id : 1});//recupera el libro con _id = 1
db.libro.find({precio : 50 })
db.libro.find({precio : 50, cantidad : 20 }) 
 
//Recuperar todos los libros que tienen un precio mayor a 40:
db.libro.find({ precio: { $gt:40 }})
//Recuperar todos los libros que en le campo cantidad tiene 50 o más:
db.libro.find( { cantidad: { $gte : 50 }})
//Recuperar todos los libros que en le campo cantidad hay un valor distinto a 50:
db.libro.find( { cantidad: { $ne : 50 }})
//Recuperar todos los libros cuyo precio estén comprendidos entre 20 y 45:

db.libro.find( { precio: { $gte : 20 , $lte : 45} })
//Recuperar todos los libros de la editorial 'Planeta':
db.libro.find( { editorial: { $in : ['Planeta'] } })
//Recuperar todos los libros que no pertenezcan a la editorial 'Planeta':
db.libro.find( { editorial: { $nin : ['Planeta'] } })


//_id: 1, nombre: 'MULTIFUNCION HP DESKJET 2675', rubro: 'impresora',
// precio: 3000, stock: 20
//_id: 2, nombre: 'MULTIFUNCION EPSON EXPRESSION XP241', rubro: 'impresora',
// precio: 3700, stock: 5
//_id: 3, nombre: 'LED 19 PHILIPS', rubro: 'monitor', precio: 4500, stock: 2
//_id: 4, nombre: 'LED 22 PHILIPS', rubro: 'monitor', precio: 5700, stock: 4

use base1
db.libro.drop()
show coleccion














