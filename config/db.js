const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      dbName: 'goal',
      serverSelectionTimeoutMS: 5000,// Timeout di 5 secondi, per evitare che il server resti bloccato indefinitamente se non riesce a connettersi.
      // maxPoolSize e minPoolSize controllano il numero di connessioni mantenute aperte, riducendo l'overhead di apertura e chiusura delle connessioni per ogni query.
      maxPoolSize: 10, // Dimensione massima del pool di connessioni
      minPoolSize: 2, // Dimensione minima del pool di connessioni
      // autoIndex: false // Disabilita la creazione automatica degli indici in produzione
      // autoIndex: false è un'ottimizzazione importante per la produzione, in quanto la creazione degli indici può avere un impatto significativo sulle prestazioni. È consigliato creare gli indici manualmente.
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);//cosí include l'hostname della connesione
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`);
    process.exit(1);// Esci dal processo con un errore
  }
};

module.exports = connectDB;