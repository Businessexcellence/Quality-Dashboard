const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3001;
const HOST = '0.0.0.0';

const server = http.createServer((req, res) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    
    // Determine which file to serve
    let filePath;
    if (req.url === '/test' || req.url === '/test.html') {
        filePath = path.join(__dirname, 'test.html');
    } else {
        filePath = path.join(__dirname, 'index.html');
    }
    
    fs.readFile(filePath, 'utf8', (err, content) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error loading file: ' + err.message);
            return;
        }
        
        res.writeHead(200, { 
            'Content-Type': 'text/html; charset=utf-8',
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0'
        });
        res.end(content);
    });
});

server.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);
    console.log(`Test page at http://${HOST}:${PORT}/test`);
    console.log(`Press Ctrl+C to stop`);
});
