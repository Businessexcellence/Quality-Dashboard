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
    } else if (req.url === '/upload-test' || req.url === '/upload-test.html') {
        filePath = path.join(__dirname, 'upload-test.html');
    } else if (req.url === '/minimal-test' || req.url === '/minimal-test.html') {
        filePath = path.join(__dirname, 'minimal-test.html');
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
    console.log(`Main dashboard: http://${HOST}:${PORT}/`);
    console.log(`Minimal test: http://${HOST}:${PORT}/minimal-test`);
    console.log(`Upload test: http://${HOST}:${PORT}/upload-test`);
    console.log(`Press Ctrl+C to stop`);
});
