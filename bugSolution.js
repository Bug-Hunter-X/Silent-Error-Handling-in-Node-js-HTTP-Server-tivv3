const http = require('http');

const server = http.createServer((req, res) => {
  someAsyncOperation()
    .then(() => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello World!');
    })
    .catch(error => {
      if (!res.writableEnded) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        console.error('Error after response ended:', error);
      }
    });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function someAsyncOperation() {
  if (Math.random() < 0.5) {
    throw new Error('Database query failed');
  }
  await new Promise(resolve => setTimeout(resolve, 1000));
} 