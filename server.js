const http = require('http');
const html = `
<!DOCTYPE>
    <html lang="ru">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Основы Node.js</title>
        <link rel ="stylesheet" href="app.css"
    </head>
    <body>
        <h1>Основы Node.js</h1>
        <button>Нажми на меня</button>

        <script src="app.js"></script>
    </body>
    </html>
    `;
const css = `
body{
    margin: 0;
    padding: 0;
    text-align: center;
}
h1{
    background-color: #43853d;
    color: white;
    padding: .5em;
    font-famyly: 'Consolas'
}`;
const js = `
    const button = document.querySelector('button');
    button.addEventListener('click', event => alert('Node.js в действии'));
`;

http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(html);
        case '/app.css':
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(css);
        case '/app.js':
            res.writeHead(200, { 'Content-Type': 'text/javascript' });
            res.end(js);
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Не найдено');

    }
}).listen(3000, () => console.log('Сервер работает'));

