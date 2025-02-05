//importo la libreria express
const express = require('express');

//inizializzo express invocandolo come una funzione e salvo il risultato in una variabile
const app = express();

//setto la porta che il server utilizzerà per 'ascoltare' la mia richiesta
const port = 3000;

//configuro la rotta per la richiesta GET alla home
app.get('/', (req, res) => {
    //scrivo il messaggio di risposta
  res.send('Server del mio blog');
});

//creo l'array con 5 post specificando titolo, contenuto, percorso immagine e tag
const post = [
    {
      titolo: 'Ciambellone',
      contenuto: 'Ricetta ciambellone',
      immagine: '/images/ciambellone.jpeg',
      tag: ['cucina', 'ricette', 'ciambellone']
    },

    {
      titolo: 'Cracker barbabietola',
      contenuto: 'Ricetta cracker barbabietola',
      immagine: '/images/cracker_barbabietola.jpeg',
      tag: ['cucina', 'ricette', 'cracker', 'barbabietola', 'cracker barbabietola']
    },

    {
      titolo: 'Pane fritto dolce',
      contenuto: 'Ricetta pane fritto dolce',
      immagine: '/images/pane_fritto_dolce.jpg',
      tag: ['cucina', 'ricette', 'pane', 'pane fritto', 'frittura', 'pane fritto dolce']
    },

    {
      titolo: 'Pasta barbabietola',
      contenuto: 'Ricetta pasta barbabietola.',
      immagine: '/images/pasta_barbabietola.jpg',
      tag: ['cucina', 'ricette', 'pasta', 'barbabietola', 'pasta barbabietola']
    },

    {
      titolo: 'Torta paesana',
      contenuto: 'Ricetta torta paesana',
      immagine: '/images/torta_paesana.jpg',
      tag: ['cucina', 'torta', 'torta paesana', 'ricette']
    }
];

//creo la rotta /bacheca per restituire il json con la lista dei post
app.get('/bacheca', (req, res) => {
    res.json(post);
});

//configuro un middleware per gestire gli asset statici (le immagini) passando alla funzione il nome della cartella come parametro
app.use('/images', express.static('images'));

//avvio server in ascolto sulla porta precedentemente specificata
app.listen(port, () => {
    console.log(`Server in ascolto su http://localhost:3000`);
  });
