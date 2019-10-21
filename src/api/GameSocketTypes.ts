export interface IPlayerBecomeOnlineData {
    playerId: string,
    playerName: string,
    openedGames?: [{
        id: string,
        name: string,
    }],
};

export interface IGameCreatedData {
    gameId: string,
    gameName: string,
    playerId: string,
    playerName: string,
};

export interface IPlayerJoinGameData {
    playerId: string,
};

export enum MoveDirection {
    'forward',
    'back',
};

export interface IGameStartedData {
    direction: MoveDirection,
    deckSize: number,
    releaseSize: number,
    currentPlayerId: string,
    players: [
        {
            id: string,
            name: string,
            cardsCount: number,
            cards?: number[],
        },
    ]
};

export interface IPlayerGetCardFromDeckData {
    playerId: string,
    cardsCount: number,
    cardIds?: number[],
};

export interface IPlayedDiedData {
    playerId: string,
};

export interface IPlayerUseCardData {
    playerId: string,
    cartId: number,
};

export interface IPlayerEndTurn {
    playerId: string,
};
