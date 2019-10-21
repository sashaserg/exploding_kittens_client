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

export interface IGameSocketApi {
    iAmHere: (playerName: string) => void,
    createGame: (gameName: string) => void,
    joinGame: (gameId: string) => void,
    startGame: () => void,
    endOfTurn: () => void,

    onPlayerBecomeOnline: (cb: (data: IPlayerBecomeOnlineData) => void) => void,
    onGameCreated: (cb: (data: IGameCreatedData) => void) => void,
    onPlayerJoinGame: (cb: (data: IPlayerJoinGameData) => void) => void,
    onGameStarted: (cb: (data: IGameStartedData) => void) => void,
    onPlayerGetCardFromDeck: (cb: (data: IPlayerGetCardFromDeckData) => void) => void,
    onPlayedDied: (cb: (data: IPlayedDiedData) => void) => void,
    onPlayerUseCard: (cb: (data: IPlayerUseCardData) => void) => void,
    onPlayerEndTurn: (cb: (data: IPlayerEndTurn) => void) => void,
};
