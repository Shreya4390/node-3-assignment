import http from 'http';
import tax from './Component/tax';

tax();

const server = http.createServer((req, res) => {
    console.log('Server running on the port 3000')
    res.end('Server started successfully')
})