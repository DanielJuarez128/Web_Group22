// Escribir el siguiente comando en terminal:
mongo

// Creamos la base de datos:
use unishop_database

// Creamos las colecciones:
db.createCollection("Usuario")
db.createCollection("Articulo")
db.createCollection("Img_Art")
db.createCollection("Etiqueta")
db.createCollection("Disponibilidad")
db.createCollection("Ventas")
db.createCollection("Compras")
db.createCollection("Emprendimientos")
db.createCollection("Servicios")

// Verificamos la creacion de colecciones con el siguiente comando:
show collections
