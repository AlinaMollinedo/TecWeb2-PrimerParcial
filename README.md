# Tecnoloías Web 2  PrimerParcial

# Alina Mollinedo Dávila

Modo de uso:

1. Abrir el repositorio en VSCode.
2. Abrir la terminal y moverse a la carpeta apisample con el comando 'cd apisample'.
3. Inicializar el servidor usando el comando 'node server.js'.
4. Probar las siguientes solicitudes en Postman:
- GET http://localhost:3000/api/usuarios : Listar a todos los usuarios.
- GET http://localhost:3000/api/usuarios/{id} : Listar al usuario con el ID ingresado.
- POST http://localhost:3000/api/usuarios : Crear un nuevo usuario. Utilizar la siguiente estructura en Body:
    {
        "id": id,
        "nombre": "Nombre",
        "edad": Edad,
        "ocupacion": "Ocupacion"
    }
- PUT http://localhost:3000/api/usuarios/{id} : Modificar el usuario con el ID ingresado. Utilizar la estructura anterior en Body.
- DELETE http://localhost:3000/api/usuarios/{id} : Eliminar el usuario con el ID ingresado.
- GET http://localhost:3000/api/productos : Listar a todos los productos.
- GET http://localhost:3000/api/productos/{id} : Listar al producto con el ID ingresado.
- POST http://localhost:3000/api/productos : Crear un nuevo producto. Utilizar la siguiente estructura en Body:
    {
        "id": id,
        "nombre": "Nombre",
        "precio": Precio,
        "categoria": "Categoria"
    }
- PUT http://localhost:3000/api/productos/{id} : Modificar el producto con el ID ingresado. Utilizar la estructura anterior en Body.
- DELETE http://localhost:3000/api/productos/{id} : Eliminar el producto con el ID ingresado.
- GET http://localhost:3000/api/contadores : Listar la cantidad de documentos en cada colección.
- GET http://localhost:3000/api/operaciones : Listar la cantidad de operaciones realizadas por el Back.