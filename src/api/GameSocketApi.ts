import openSocket from 'socket.io-client';

import {
    IPlayerBecomeOnlineData,
    IGameCreatedData,
    IPlayerJoinGameData,
    IGameStartedData,
    IPlayerGetCardFromDeckData,
    IPlayedDiedData,
    IPlayerUseCardData,
    IPlayerEndTurn
} from "./GameSocketTypes";
import { GameSocketEventEmit, GameSocketEventListen } from './GameSocketEvent';

// export interface IGameSocketApi {
//     iAmHere: (playerName: string) => void,
//     createGame: (gameName: string) => void,
//     joinGame: (gameId: string) => void,
//     startGame: () => void,
//     endOfTurn: () => void,
//     // onPlayerBecomeOnline: (cb: (data: IPlayerBecomeOnlineData) => void) => void,
//     // onGameCreated: (cb: (data: IGameCreatedData) => void) => void,
//     // onPlayerJoinGame: (cb: (data: IPlayerJoinGameData) => void) => void,
//     // onGameStarted: (cb: (data: IGameStartedData) => void) => void,
//     // onPlayerGetCardFromDeck: (cb: (data: IPlayerGetCardFromDeckData) => void) => void,
//     // onPlayedDied: (cb: (data: IPlayedDiedData) => void) => void,
//     // onPlayerUseCard: (cb: (data: IPlayerUseCardData) => void) => void,
//     // onPlayerEndTurn: (cb: (data: IPlayerEndTurn) => void) => void,
// };

export class GameSocketEmitter {
    static socket: SocketIOClient.Socket;

    static initialization = (uri: string) => {
        if (!GameSocketEmitter.socket) {
            GameSocketEmitter.socket = openSocket(uri);
        }
    };

    static iAmHere = (playerName: string) => {
        GameSocketEmitter.socket.emit(GameSocketEventEmit.I_AM_HERE, playerName);
    };

    static createGame = (gameName: string) => {
        GameSocketEmitter.socket.emit(GameSocketEventEmit.CREATE_GAME, gameName);
    };

    static joinGame = (gameId: string) => {
        GameSocketEmitter.socket.emit(GameSocketEventEmit.JOIN_GAME, gameId);
    };

    static startGame = () => {
        GameSocketEmitter.socket.emit(GameSocketEventEmit.START_GAME);
    };

    static endOfTurn = () => {
        GameSocketEmitter.socket.emit(GameSocketEventEmit.END_OF_TURN);
    };
}
