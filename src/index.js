#!/usr/bin/env node

import express from 'express';
import cors from 'cors';
import { Stream } from 'stream';
import { WebSocketServer } from 'ws';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';


const argv = yargs(hideBin(process.argv)).argv;
const port = argv.port || argv.p || 8000;

const app = express();
app.use(cors());
const wsServer = new WebSocketServer({ server: app.listen(port) });

let clientSocket;

console.log(`Listening on port ${ port }.\nCtrl+D to exit.`);

const onClose = () => {
    console.log('\nclient disconnected.');
    clientSocket = undefined;
};
const onErr = (error) => {
    console.log('client disconnected. Err: ', error);
    process.exit(1);
};
wsServer.on('connection', (socket) => {
    console.log('client connected.');
    clientSocket = socket;
    socket.on('message', (message) => {
        process.stdout.write(message.toString());
    });
    socket.on('close', onClose);
    socket.on('error', onErr);
});
wsServer.on('close', onClose);
wsServer.on('error', onErr);

process.stdin.setRawMode(true);
process.stdin.pipe(new Stream.Writable({
    write: (chunk, encoding, next) => {
        if (chunk?.[0] === 4) {
            process.exit();
        }
        if (clientSocket) {
            clientSocket.send(chunk);
        }
        next();
    }
}));
