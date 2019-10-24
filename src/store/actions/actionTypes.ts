import * as actions from './actionCreator';

export enum ACTION {
    I_AM_HERE = 'I_AM_HERE',
    CREATE_GAME = 'CREATE_GAME',
    PLAYER_BECOME_ONLINE = 'PLAYER_BECOME_ONLINE',
};

export interface IAmHereAction {
    type: typeof ACTION.I_AM_HERE,
    playerName: string,
};

export interface ICreateGameAction {
    type: typeof ACTION.CREATE_GAME,
    gameName: string, 
};

type InferValueType<T> = T extends { [key: string]: infer U }
    ? U
    : never;

export type GameActionTypes = ReturnType<InferValueType<typeof actions>>;