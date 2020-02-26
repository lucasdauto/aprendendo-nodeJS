const app = require('./src/config/custom-express');

app.listen(3000,function(){
    console.log(`servidor rodando na porta 3000`);
})

// const http = require('http');

// const servidor = http.createServer(function (req, resp) {
//     let html = '';
//     if (req.url == '/') {
//         html = `
        // <!DOCTYPE html>
        // <html lang="pt-br">
        // <head>
        //     <meta charset="UTF-8">
        //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
        //     <title>Casa do codigo</title>
        // </head>
        // <body>
        //     <h1>Casa do Codigo</h1>
        // </body>
        // </html>
//         `;
//     }else if (req.url == '/livros') {
//         html = `
//         <!DOCTYPE html>
//         <html lang="en">
//         <head>
//             <meta charset="UTF-8">
//             <meta name="viewport" content="width=device-width, initial-scale=1.0">
//             <title>Primeira pagina node</title>
//         </head>
//         <body>
//             <h1>Listagem de livros</h1>
//         </body>
//         </html>
//         `;
//     }

//     resp.end(html)
// });
// servidor.listen(3000);

