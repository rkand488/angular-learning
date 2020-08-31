import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

const SOCKET_ENDPOINT = 'localhost:3000';

@Component({
  selector: 'app-chat-inbox',
  templateUrl: './chat-inbox.component.html',
  styleUrls: ['./chat-inbox.component.css']
})
export class ChatInboxComponent implements OnInit {

  id: string = '';
  socket;
  message: string = '';
  chat: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.id = this.create_UUID();
    this.socket = io(SOCKET_ENDPOINT);
    this.socket.on('message-broadcast', (data: any[]) => {
      if (data.length > 0) {
        this.chat =  data;
      }
     });
  }

  create_UUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}

  SendMessage() {
    var m = {id : this.id, message: this.message, time:new Date()};
    this.socket.emit('message', m);
    this.chat.push(m);
    this.message = '';
 }

}
