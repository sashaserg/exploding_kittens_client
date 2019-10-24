export interface IOpenedGame {
    id: string,
    name: string,
};

export interface IActivePlayer {
    id: string,
    name: string,
};

export interface IWaitingRoomState {
    playerId: string,
    playerName: string,
    activePlayers: IActivePlayer[],
    openedGames: IOpenedGame[],
    isFetching: boolean,
    error: any,
};
