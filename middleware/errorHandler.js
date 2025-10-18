module.exports = (err, req, res, next) => {
  // Logga l'errore per il debug interno, senza esporlo al client
  console.error(err.stack);

  // Gestione degli errori di validazione di Mongoose
  if (err.name === 'ValidationError') {
    const errors = {};
    Object.keys(err.errors).forEach(key => {
      errors[key] = err.errors[key].message;
    });
    return res.status(400).json({ message: 'Errore di validazione', errors });
  }

  // Gestione degli errori di tipo CastError (ID non valido)
  if (err.name === 'CastError' && err.kind === 'ObjectId') {
    return res.status(400).json({ message: 'ID non valido' });
  }

  // Errore generico del server
  res.status(500).json({ message: 'Qualcosa è andato storto nel server.' });
};