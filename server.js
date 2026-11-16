// Loot Hunters v3.67 PC 로컬 웹 서버
const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

const PORT = 3670;
const ROOT_DIR = typeof __dirname !== 'undefined' ? __dirname : process.cwd();
const PUBLIC_DIR = fs.existsSync(path.join(ROOT_DIR, 'public')) ? path.join(ROOT_DIR, 'public') : ROOT_DIR;

function getLocalIp() {
  const ifaces = os.networkInterfaces();
  for (const name of Object.keys(ifaces)) {
    for (const net of ifaces[name]) {
      if (net.family === 'IPv4' && !net.internal) {
        return net.address;
      }
    }
  }
  return '127.0.0.1';
}

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.m4a': 'audio/mp4',
  '.mp3': 'audio/mpeg',
  '.ogg': 'audio/ogg',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
  '.xml': 'application/xml',
};

const server = http.createServer((req, res) => {
  let reqUrl = req.url.split('?')[0];
  if (reqUrl === '/') reqUrl = '/index.html';

  let decodedPath;
  try {
    decodedPath = decodeURIComponent(reqUrl);
  } catch (e) {
    decodedPath = reqUrl;
  }

  const filePath = path.join(PUBLIC_DIR, decodedPath);

  if (!filePath.startsWith(PUBLIC_DIR)) {
    res.writeHead(403);
    res.end('403 Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 Not Found: ' + decodedPath);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Content-Length': stats.size,
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*',
    });

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  const localIp = getLocalIp();
  console.log('========================================================');
  console.log('  Loot Hunters v3.67 PC 로컬 서버 가동 완료!');
  console.log('========================================================');
  console.log('  ▶ PC 브라우저 접속: http://localhost:' + PORT);
  console.log('  ▶ 동일 와이파이(모바일): http://' + localIp + ':' + PORT);
  console.log('--------------------------------------------------------');
  console.log('  * 종료하려면 이 창을 닫거나 Ctrl + C를 누르세요.');
  console.log('========================================================');
});
