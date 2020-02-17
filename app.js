const http = require('http');

const PORT = 3000;
const HOST = '127.0.0.1';

const helloWorldRequest = (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("Welcome to NodeJS");
    res.end();
};

const server = http.createServer(helloWorldRequest);

server.listen(PORT, HOST, () => {
    console.log(`Server runnting at port ${PORT}`)
});