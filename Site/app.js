const app = require('./config/server');

app.listen(3000, () => {
    console.log('Aplicação rodando na porta 3000');
});

module.exports = app;