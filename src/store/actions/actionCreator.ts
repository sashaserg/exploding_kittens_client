import { ACTION, IAmHereAction, ICreateGameAction, GameActionTypes } from "./actionTypes"

export const iAmHere = (playerName: string) => ({
    type: ACTION.I_AM_HERE,
    playerName,
});

export const createGame = (gameName: string) => ({
    type: ACTION.CREATE_GAME,
    gameName,
});
