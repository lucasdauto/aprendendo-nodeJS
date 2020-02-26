const LivroDao = require('../infra/livro-dao');
const db =  require('../../config/database');

module.exports = (app) =>{
    
    app.get('/', (req, resp) =>{
        resp.send(
            `<!DOCTYPE html>
            <html lang="pt-br">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Casa do codigo</title>
            </head>
            <body>
                <h1>Casa do Código</h1>
            </body>
            </html>`
        );
    });

    app.get('/livros', function(req, resp) {
        const livroDao = new LivroDao(db)

        livroDao.lista()
                .then(livros =>resp.marko(
                    require('../views/livros/lista/lista.marko'),
                    {
                        livros: livros
                    }
            
                ))
                .catch(erro => console.log(erro))
    });

    app.get('/livros/form',(req,resp) =>{
        resp.marko(require('../views/livros/form/form.marko'),{ livro: {}});
    });

    app.post('/livros', (req,resp) =>{
        console.log(req.body);
        const livroDao = new LivroDao(db)
        livroDao.adiciona(req.body)
                .then(resp.redirect('/livros'))
                .catch(erro => console.log(erro))
    });

    app.delete('/livros/:id',function(req,resp){
        const id = req.params.id;

        const livroDao =  new LivroDao(db);

        livroDao.remove(id)
                .then(()=> resp.status(200).end())
                .catch(erro => console.log(erro))
    });

    app.get('/livros/form/:id',(req,resp)=>{
        const id = req.params.id;
        const livroDao =  new LivroDao(db);

        livroDao.buscaPorId(id)
                .then(livro => resp.marko(require('../views/livros/form/form.marko'),
                { livro: livro }
                )
            )
            .catch(erro => console.log(erro));
    });

    app.put('/livros', (req,resp) =>{
        console.log(req.body);
        const livroDao = new LivroDao(db)
        livroDao.atualiza(req.body)
                .then(resp.redirect('/livros'))
                .catch(erro => console.log(erro))
    });
}