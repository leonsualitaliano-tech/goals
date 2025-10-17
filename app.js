require('dotenv').config({path: './.config.env'}); //Questa riga carica le variabili d'ambiente da un file chiamato .config.env nella applicazione. Questo è importante per motivi di sicurezza, poiché ti permette di mantenere segrete informazioni sensibili (come le chiavi del database o le password) senza memorizzarle direttamente nel tuo codice sorgente
const express = require('express');//Qui importi il framework Express.js, un toolkit per Node.js che semplifica la creazione di applicazioni web e API.
const app = express();//Questa riga crea un'istanza dell'applicazione Express. L'oggetto app è il nucleo della tua applicazione, che usi per definire rotte, impostare middleware e avviare il server.
const cors = require('cors');//Questa riga importa il pacchetto cors, un middleware per Express che gestisce il Cross-Origin Resource Sharing
const connectDB = require('./config/db');

const PORT = process.env.PORT;//Questa riga recupera il numero di porta dalle tue variabili d'ambiente, caricate in precedenza da dotenv

connectDB();//Questa riga esegue la funzione importata per stabilire una connessione al database all'avvio dell'applicazione.

app.use(cors({//Questa riga applica il middleware CORS all'intera applicazione.
  origin: "http://localhost:5173",//Specifica che solo le richieste provenienti da http://localhost:5173 sono consentite.
  methods: ["GET", "POST", "PUT", "DELETE"],//Definisce quali metodi HTTP sono consentiti.
  credentials: true,// Indica che le richieste cross-origin possono includere cookie e credenziali. 
}));
const goalRouter = require('./routes/goals.js');//Importa un file di rotte (./routes/goals.js). Questo è un modo per organizzare il codice suddividendo le rotte in file separati. 
app.use(express.json());//Questo è un middleware integrato in Express che analizza le richieste in entrata con payload JSON. Il corpo analizzato della richiesta viene aggiunto all'oggetto req.body, rendendolo facile da usare nelle tue rotte.
app.use(express.urlencoded({ extended: false }));//Questo è un altro middleware integrato in Express che analizza le richieste in entrata con payload codificati in URL (spesso usati nei form HTML).


app.use('/api/goals', cors(), goalRouter);//Questa riga associa il goalRouter al percorso /api/goals. Tutte le richieste che iniziano con questo percorso verranno gestite dal goalRouter. Viene anche applicato un secondo middleware CORS, ma la configurazione globale precedente lo rende in gran parte ridondante. 

app.get('/', (req, res) => {
  res.send({message: 'App up and running'});//Questo definisce una rotta HTTP GET per il percorso principale (/). Quando un utente visita la home page, il server invia una risposta JSON con il messaggio "App up and running".
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);//Questa è l'ultima riga del codice, che avvia il server e lo mette in ascolto sulla porta specificata dalla variabile d'ambiente PORT. La funzione di callback stampa un messaggio nella console per confermare che l'applicazione è in esecuzione.
});