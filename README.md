# Marketplace universitario "Unishop"

- [Equipo y sección](#sec-02---grupo-n°-22)
    - [Integrantes](#integrantes)
- [Backend](#carpeta-server)
    - [Documentación de la API](#documendación-de-la-api)
        - [Modelo de usuario](#modelo-de-usuario)
        - [Modelo de articulos](#modelo-de-articulos)
        - [Modelo de imagenes](#modelo-de-imagenes)
        - [Modelo de etiquetas](#modelo-de-etiquetas)
        - [Modelo de compras](#modelo-de-compras)

## Sec 02 - Grupo N° 22

### Integrantes

| Nombre        | Carnet        |
| ------------- | ------------- |
| María Fernanda Figueroa Gestoni | 00109822 |
| Jonathan Rodrigo Rivera Jiménez | 00014620 |
| Daniel Isaías Juárez Gutiérrez  | 00012922 |

## Backend:

### Documendación de la API

En la carpeta 'Server' podra encontras las codificaciones del Backend de nuestro sitio web.

La ruta para peticiones a la API esta determinada por los enrutadores con prefijo `…/api/v1…`, segun sea el modelo de datos que desea consultar.

---
#### Modelo de usuario:

Nuestra API registra los siguientes datos del usuario:
- **Username:** es el nombre con el que se registra el usuario.
- **Correo:** el correo institucional del usuario
- **Contraseña:** la clave de acceso del usuario, encriptada.
- **Token:** su principal funcion es verificar la identidad del usuario en determinadas acciones. Se generan al iniciar sección.
- **Roles:** 
- **Foto de perfil:** la imagen con que se puede reconocer a un usuario.
- **Descripcion:** Una pequeña información del usuario, asi como sus formas de contacto.
- **Reputación:** es el metodo en que se determina que tan confiable es cierto usuario, en base a la opinion de los demás.

Las rutas de los controladores del modelo de usuarios son:
|  | Metodo HTTP | Ruta | Variables |
| ------------- | ------------- | ------------- | ------------- |
| Registro de usuarios | POST | `…/auth/register` | **Body:** Nombre de usuario, correo y contraseña |
| Login | POST | `…/auth/login` | **Body:** Correo y contraseña |
| Obtener la información del usuario loggeado | GET | `…/auth/aboutMe` | Sin parámetros |
| Obtener la información de un usuario | GET | `…/auth/:id` | **Params:** MongoID del usuario |
| Obtener un listado de todos los usuarios registrados | GET | `…/auth/` | **Query:** pagination (booleano), limit y offset |
| Actualizar la informacion de un usuario | PATCH | `…/auth/`| **Body:** nombre de usuario, foto de perfil y descripción |
| Cambiar de contraseña | PATCH | `…/auth/password/` | **Body:** nueva contraseña |
| Modificar la reputación | PATCH | `…/auth/reputation/:id` | **Params:** MongoID del usuario a evaluar; **Body:** modificador (booleano) y recomendación (booleano) |

---
#### Modelo de articulos:

Nuestra API registra los siguientes datos de los productos:
- **Nombre:** el nombre del articulo en venta
- **Descripción:** una breve descripción del producto
- **Lista de deseos:** los articulos que el vendedor acepta a cambio.
- **Precio:** el precio del producto en efectivo. Es opcional.
- **Etiquetas:** el listado de etiquetas con las que se puede buscar e identifica el producto.
- **Estado:** la disponibilidad del producto. Puede ser "Disponible", "Reservado" o "Agotado".
- **Usuario:** el usuario que publico el producto en venta.
- **Ofertas:** el listado de usuarios interesados en el producto.

Las rutas de los controladores del modelo de articulos son:
|  | Metodo HTTP | ruta | variables |
| ------------- | ------------- | ------------- | ------------- |
| Crear o guardar una publicación | POST | `…/articule/` para crear o `…/articule/:id` para modificar | **Params:** MongoID del producto; **Body:** nombre, descripcion, lista_deseos, precio y etiqueta |
| Obtener todos los articulos | GET | `…/articule/` | **Query:** pagination (booleano), limit y offset |
| Obtener la información de un articulo | GET | `…/articule/:id` | **Params:** MongoID del producto |
| Obtener articulos por etiquetas | GET | `…/articule/etiqueta/:id` | **Params:** MongoID de la etiqueta; **Query:** pagination (booleano), limit y offset |
| Obtener articulos publicados por un usuario | GET | `…/articule/user/:id` | **Params:** MongoID del usuario; **Query:** pagination (booleano), limit y offset |
| Obtener el listado de articulos que le interesan al usuario loggueado | GET | `…/articule/offer/` | **Query:** pagination (booleano), limit y offset |
| Obtener los articulos que pertenecen al usuario loggueado | GET | `…/articule/own` | **Query:** pagination (booleano), limit y offset |
| Cambiar la visibilidad de una publicación | PATCH | `…/articule/` | **Params:** MongoID del producto |
| Cambiar la disponibilidad de un articulo | PATCH | `…/articule/` | **Params:** MongoID del producto; **Body:** estado del producto |
| Realizar una oferta | PATCH | `…/articule/offer/:id` | **Params:** MongoID del producto |
| Eliminar una publicación | DELETE | `…/articule/:id` | **Params:** MongoID del producto |

---
#### Modelo de imagenes:

Nuestra API registra los siguientes datos acerca de las imagenes:
- **Articulo:** Producto del cual proviene la imagen.
- **Imagen:** URL de la foto.

Las rutas de los controladores del modelo de imagenes son:
|  | Metodo HTTP | Ruta | Variables |
| ------------- | ------------- | ------------- | ------------- |
| Publicar o editar una imagen | POST | `…/imagen/` para crear o `…/imagen/:id` para modificar | **Params:** MongoID de la imagen |
| Obtener todas las imagenes de un producto | GET | `…/imagen/art/:id` | **Params:** MongoID del producto; **Query:** pagination (booleano), limit y offset |
| Eliminar una imagen | DELETE | `…/imagen/:id` |  **Params:** MongoID de la imagen |
| Eliminar todas las imagenes de un producto | DELETE | `…/imagen/art/:id` | **Params:** MongoID del producto |

---
#### Modelo de etiquetas:

Nuestra API registra los siguientes datos acerca de las etiquetas de los productos:
- **Nombre:** la categoria que se va a etiquetar

Las rutas de los controladores del modelo de etiquetas son:
|  | Metodo HTTP | Ruta | Variables |
| ------------- | ------------- | ------------- | ------------- |
| Crear una etiqueta | POST | `…/etiqueta/` | Sin parámetros |
| Obtener una etiqueta | GET | `…/etiqueta/:id` | **Params:** MongoID de la etiqueta |
| Obtener todas las etiquetas | GET | `…/etiqueta/` | Sin parámetros |
| Borrar una etiqueta | DELETE | `…/etiqueta/:id` | **Params:** MongoID de la etiqueta |

---
#### Modelo de compras:

Nuestra API registra los siguientes datos acerca de una compra:
- **Articulo:** el producto que fue comprado.
- **Comprador:** el usuario que compro el producto.
- **Opinion:** Guarda la calificación y un comentario del comprador.

Las rutas de los controladores del modelo de compras son:
|  | Metodo HTTP | Ruta | Variables |
| ------------- | ------------- | ------------- | ------------- |
| Registar o editar una compra | POST | `…/compras/` para crear o `…/compras/:id` para modificar | **Params:** MongoID del registro de compra |
| Obtener el registro de una compra | GET | `…/compras/:id` | **Params:** MongoID del registro de compra |
| Obtener registros de las compras de un usuario | GET | `…/compras/user/:id` | **Params:** MongoID del usuario; **Query:** pagination (booleano), limit y offset |
| Eliminar un registro | DELETE | `…/compras/:id` | **Params:** MongoID del registro de compra |
