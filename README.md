# Album Rankings

Este es un proyecto de una aplicación web en React que muestra una lista de álbumes y permite agregar y eliminar comentarios para cada álbum.

Link de la pagina hosteada: https://minireto-bl5i42el1-benjagood.vercel.app/

## Diagrama: 

![Diagrama](https://i.imgur.com/v0P7cdW.png)

Explicación:

App Component: El componente principal de la aplicación que engloba todos los demás componentes. Se encarga de mostrar el encabezado y contiene el AlbumList Component.

AlbumList Component: El componente que muestra la lista de álbumes. Realiza llamadas a la API para obtener los datos de los álbumes y muestra una instancia del Album Component por cada álbum.

Album Component: El componente que representa un álbum individual. Muestra la información del álbum, como el nombre y el artista, y también muestra los comentarios asociados a ese álbum. Permite agregar nuevos comentarios y eliminar comentarios existentes.

API calls: Este componente se comunica con la API para realizar las llamadas necesarias para obtener la lista de álbumes, los comentarios de un álbum específico, agregar un nuevo comentario y eliminar comentarios existentes.

El flujo de datos es el siguiente:

El componente App renderiza el componente AlbumList.
El componente AlbumList realiza una llamada a la API para obtener la lista de álbumes.
Por cada álbum en la lista, el componente AlbumList renderiza una instancia del componente Album, pasándole los datos correspondientes.
El componente Album muestra la información del álbum y los comentarios asociados.
El usuario puede agregar un nuevo comentario a través del formulario en el componente Album.
El componente Album realiza una llamada a la API para agregar el comentario.
El componente Album actualiza la lista de comentarios después de agregar el nuevo comentario.
El usuario puede eliminar un comentario existente haciendo clic en el botón "Eliminar" en el componente Album.
El componente Album realiza una llamada a la API para eliminar el comentario.
El componente Album actualiza la lista de comentarios después de eliminar el comentario.




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
