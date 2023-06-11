# Album Rankings

Este es un proyecto de una aplicación web en React que muestra una lista de álbumes y permite agregar y eliminar comentarios para cada álbum.

Link de la pagina hosteada: https://minireto-bl5i42el1-benjagood.vercel.app/

## Diagrama: 

![Diagrama]([https://ejemplo.com/imagen.png](https://imgur.com/v0P7cdW))




## Instalación

1. Clona este repositorio en tu máquina local.
2. Navega a la carpeta del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias:

bash
npm install

## Configuración
Antes de ejecutar la aplicación, asegúrate de configurar la conexión a la base de datos. En el archivo server.js, actualiza los valores de conexión a la base de datos con los correspondientes a tu entorno:

const connection = mysql.createConnection({
  host: 'aws.connect.psdb.cloud',
  user: 'h7vsiwptai9wv62i6pnw',
  password: 'pscale_pw_xCSHwrkPguos2gOek27yZSCb47M5hknnayrdENRTsPd',
  database: 'album',
  ssl: {
    rejectUnauthorized: true
  }
}); 

## Uso
Asegúrate de tener la base de datos configurada y en funcionamiento.

En la terminal, dentro de la carpeta del proyecto, ejecuta el siguiente comando para iniciar el servidor:
node server.js
En otra terminal, dentro de la carpeta del proyecto, ejecuta el siguiente comando para iniciar la aplicación de React:
npm start
Abre tu navegador web y visita http://localhost:3000 para ver la aplicación en funcionamiento.

## API
La aplicación se comunica con una API para obtener la lista de álbumes y administrar los comentarios. A continuación se muestran los puntos finales disponibles:

GET /api/albums: Obtiene todos los álbumes.
GET /api/comments/:albumId: Obtiene los comentarios de un álbum específico.
POST /api/comments: Agrega un nuevo comentario.
DELETE /api/comments/:commentId: Elimina un comentario existente.
