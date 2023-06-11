const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const connection = mysql.createConnection({
  host: 'aws.connect.psdb.cloud',
  user: '0p346qcc5ihjtu04gwdf',
  password: 'pscale_pw_gtA8y4wtYLPit8xlK9pbykcwoAUJ4oKkjv60M7eGsqb',
  database: 'album',
  ssl: {
    rejectUnauthorized: true
  }
});

connection.connect((error) => {
  if (error) {
    console.error('Error al conectar a la base de datos:', error);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});

app.get('/api/albums', (req, res) => {
  const query = 'SELECT * FROM albums';

  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error al obtener los álbumes desde la base de datos:', error);
      res.status(500).send('Error al obtener los álbumes');
    } else {
      res.send(results);
    }
  });
});

app.get('/api/comments/:albumId', (req, res) => {
  const albumId = req.params.albumId;
  const query = 'SELECT * FROM comments WHERE album_id = ?';

  connection.query(query, [albumId], (error, results) => {
    if (error) {
      console.error('Error al obtener los comentarios desde la base de datos:', error);
      res.status(500).send('Error al obtener los comentarios');
    } else {
      res.send(results);
    }
  });
});

app.post('/api/comments', (req, res) => {
  const { albumId, commentText } = req.body;
  const query = 'INSERT INTO comments (album_id, comment_text) VALUES (?, ?)';

  connection.query(query, [albumId, commentText], (error, result) => {
    if (error) {
      console.error('Error al agregar el comentario a la base de datos:', error);
      res.status(500).send('Error al agregar el comentario');
    } else {
      res.send('Comentario agregado correctamente');
    }
  });
});

app.delete('/api/comments/:commentId', (req, res) => {
  const commentId = req.params.commentId;
  const query = 'DELETE FROM comments WHERE id = ?';

  connection.query(query, [commentId], (error, result) => {
    if (error) {
      console.error('Error al eliminar el comentario de la base de datos:', error);
      res.status(500).send('Error al eliminar el comentario');
    } else {
      res.send('Comentario eliminado correctamente');
    }
  });
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
