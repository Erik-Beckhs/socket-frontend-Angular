import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private wsService:WebsocketService) { }

  sendMessage(mensaje:string){
    const payload = {
      de: 'Erik',
      contenido : mensaje
    }

    this.wsService.emit('mensaje', payload);
  }
}
