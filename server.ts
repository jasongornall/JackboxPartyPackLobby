import express from 'express';
import path from 'path';
// import fs from 'fs';
import https from 'https';

const app = express();
const PORT = 3000;

const options = {
  // key: fs.readFileSync('server.key'),
  // cert: fs.readFileSync('server.cert')
};

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

https.createServer(options, app).listen(PORT, () => {
    console.log(`HTTPS server is running on https://localhost:${PORT}`);
});
// npx ts-node server.ts