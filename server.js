const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

// MIME types for common file extensions
const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    '.xls': 'application/vnd.ms-excel',
    '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
};

const server = http.createServer((req, res) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    
    // Try to serve static files from public folder first
    // Match file extensions even with query parameters
    if (req.url.match(/\.(jpg|jpeg|png|gif|svg|ico|css|js|xlsx|xls|docx)(\?.*)?$/)) {
        // Remove /public prefix if present in URL
        let urlPath = req.url;
        if (urlPath.startsWith('/public/')) {
            urlPath = urlPath.substring(7); // Remove '/public'
        }
        
        // Strip query parameters for file system lookup
        const cleanPath = urlPath.split('?')[0];
        const publicPath = path.join(__dirname, 'public', cleanPath);
        
        fs.readFile(publicPath, (err, content) => {
            if (!err) {
                const ext = path.extname(cleanPath);
                const contentType = mimeTypes[ext] || 'application/octet-stream';
                
                // Disable caching for PNG images to allow logo updates
                const cacheControl = ext === '.png' 
                    ? 'no-cache, no-store, must-revalidate' 
                    : 'public, max-age=86400';
                
                // Force download for Word documents
                const headers = { 
                    'Content-Type': contentType,
                    'Cache-Control': cacheControl
                };
                
                if (ext === '.docx' || ext === '.doc') {
                    const filename = path.basename(cleanPath);
                    headers['Content-Disposition'] = `attachment; filename="${filename}"`;
                }
                
                res.writeHead(200, headers);
                res.end(content);
                return;
            }
            
            // If not found in public, return 404
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('File not found');
        });
        return;
    }
    
    // Serve Excel files from /data/ path (for auto-load)
    if (req.url.startsWith('/data/')) {
        const dataPath = path.join(__dirname, 'public', req.url);
        fs.readFile(dataPath, (err, content) => {
            if (!err) {
                const ext = path.extname(req.url);
                const contentType = mimeTypes[ext] || 'application/octet-stream';
                
                res.writeHead(200, { 
                    'Content-Type': contentType,
                    'Cache-Control': 'no-cache, no-store, must-revalidate'  // Always fresh data
                });
                res.end(content);
                return;
            }
            
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('File not found');
        });
        return;
    }
    
    // Determine which HTML file to serve
    let filePath;
    if (req.url === '/test' || req.url === '/test.html') {
        filePath = path.join(__dirname, 'test.html');
    } else if (req.url === '/upload-test' || req.url === '/upload-test.html') {
        filePath = path.join(__dirname, 'upload-test.html');
    } else if (req.url === '/minimal-test' || req.url === '/minimal-test.html') {
        filePath = path.join(__dirname, 'minimal-test.html');
    } else if (req.url === '/download-sop' || req.url === '/download-sop.html') {
        filePath = path.join(__dirname, 'public', 'download-sop.html');
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
