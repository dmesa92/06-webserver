const http = require("http"),
    port = 3000;

http.createServer((req, res) => {

    res.writeHead(200, { "Content-Type": 'application/json' });
    let salida = {
        nombre: 'Daniel',
        apellidos: 'Mesa Olmo',
        edad: 27,
        url: req.url
    }
    res.write(JSON.stringify(salida));
    // res.write("Hola Mundo");
    res.end();
}).listen(port);

console.log(`Escuchando el puerto ${port}`);