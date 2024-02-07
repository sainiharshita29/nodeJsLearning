import http, {Server,IncomingMessage, ServerResponse} from 'http';
import express, {Request, Response} from 'express';
import {router} from './routes';
import fs from 'fs';

const hostname = '127.0.0.1';
const port = 5000;
const app = express();

// const server = http.createServer((request, response) => {
//     response.statusCode  = 200;
//     response.setHeader('Content-Type','text/html');
//     response.end(`<h3>Welcome</h3>`)
// })

// server.listen(port, hostname, () => {
//     console.log('Sever started')
// })

//application level middleware
app.use((req, res, next) => {
    console.log('Hello from middleware')
    fs.appendFile('log.txt', `\n${Date.now()}:  ${req.method} ${req.path}`,(err) => {
        next();
    })
})

app.use('/', router);
app.get('/test', (req:Request,res:Response):void => {
    res.json({data: "test page"})
})
app.listen(port,():void => {
    console.log(`server is running at ${port}`)
})
console.log('hello server');