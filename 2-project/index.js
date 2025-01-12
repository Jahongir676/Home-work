// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// const PORT = 3000;

// const server = http.createServer((req, res) => {
//   let filePath = './public' + req.url;

  
//   if (filePath === './public/') {
//     filePath = './2-project/publlic/home.html';
//   }

//   const extname = String(path.extname(filePath)).toLowerCase();
//   const mimeTypes = {
//     '.html': 'text/html',
//     '.css': 'text/css',
//     '.js': 'application/javascript',
//     '.json': 'application/json',
//     '.png': 'image/png',
//     '.jpg': 'image/jpg',
//     '.gif': 'image/gif',
//     '.svg': 'image/svg+xml',
//     '.wav': 'audio/wav',
//     '.mp4': 'video/mp4',
//     '.woff': 'application/font-woff',
//     '.ttf': 'application/font-ttf',
//     '.eot': 'application/vnd.ms-fontobject',
//     '.otf': 'application/font-otf',
//     '.wasm': 'application/wasm'
//   };

//   const contentType = mimeTypes[extname] || 'application/octet-stream';

//   fs.readFile(filePath, (err, content) => {
//     if (err) {
//       if (err.code === 'ENOENT') {
//         fs.readFile('./public/404.html', (err404, content404) => {
//           res.writeHead(404, { 'Content-Type': 'text/html' });
//           res.end(content404, 'utf-8');
//         });
//       } else {
//         res.writeHead(500);
//         res.end(`Server Error: ${err.code}`);
//       }
//     } else {
//       res.writeHead(200, { 'Content-Type': contentType });
//       res.end(content, 'utf-8');
//     }
//   });
// });

// server.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

const http = require('http');
const url = require('url');
const crypto = require('crypto');
const users = {};

function hashPassword(password) {
  return crypto.createHash('sha256').update(password).digest('hex');
}

function handleRegister(req, res) {
  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });
  req.on('end', () => {
    const { username, password } = JSON.parse(body);
    if (users[username]) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'User already exists' }));
    } else {
      users[username] = { password: hashPassword(password) };
      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'User registered' }));
    }
  });
}

function handleLogin(req, res) {
  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });
  req.on('end', () => {
    const { username, password } = JSON.parse(body);
    if (users[username] && users[username].password === hashPassword(password)) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Login successful' }));
    } else {
      res.writeHead(401, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Invalid credentials' }));
    }
  });
}

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  if (req.method === 'POST' && parsedUrl.pathname === '/register') {
    handleRegister(req, res);
  } else if (req.method === 'POST' && parsedUrl.pathname === '/login') {
    handleLogin(req, res);
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Not Found' }));
  }
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
