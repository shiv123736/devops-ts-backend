// src/server.ts
import http from 'http';

const PORT: number = 3000;

const server = http.createServer((_req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Server is running with TypeScript!');
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});