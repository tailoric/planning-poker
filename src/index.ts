import express from 'express';
import {Request, Response} from 'express';
import http from 'http';
import { Server, Socket } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (_,res: Response) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/game/:gameId', (req: Request, res: Response) => {
  io.once('connection', (socket: Socket) => {
    socket.join(req.params.gameId);
    console.log(socket.rooms);
  });
  res.sendFile(__dirname + '/game.html');
});

server.listen(3000, () =>{
  console.log('listening on *:3000');
})
