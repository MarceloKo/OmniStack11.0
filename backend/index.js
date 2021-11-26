const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (request, response) => {
    const body = request.body;

    console.log(body)

    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Marcelo Alcantara'
    });
});

app.listen(3333);
