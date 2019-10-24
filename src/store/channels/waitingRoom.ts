import { eventChannel } from 'redux-saga';
import { socket } from '../../api/socket';
import { GameSocketEventListen } from '../../api/GameSocketEvent';

export function createWaitingRoomChannel() {
  const subscribe = (emitter: Function) => {    
    socket.on(GameSocketEventListen.PLAYER_BECOME_ONLINE, emitter);
    socket.on(GameSocketEventListen.GAME_CREATED, emitter);
    
    return () => {
        socket.removeListener(GameSocketEventListen.PLAYER_BECOME_ONLINE, emitter);
        socket.removeListener(GameSocketEventListen.GAME_CREATED, emitter);
    };
  };

  return eventChannel(subscribe);
}