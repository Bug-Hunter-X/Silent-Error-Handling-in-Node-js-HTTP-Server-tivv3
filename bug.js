const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  }).catch(error => {
    // This error will be silently ignored because the response has already been sent
    console.error('Error:', error); 
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function someAsyncOperation() {
  // Simulate an error, e.g., a database query that fails
  if (Math.random() < 0.5) {
    throw new Error('Database query failed');
  }
  //Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000));
}