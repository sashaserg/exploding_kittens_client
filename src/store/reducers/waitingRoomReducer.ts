import { IWaitingRoomState } from "../../types/waitingRoomTypes";
import { GameActionTypes, ACTION } from "../actions/actionTypes";

const initial: IWaitingRoomState = {
    playerId: '',
    playerName: '',
    activePlayers: [],
    openedGames: [],
    isFetching: false,
    error: null,
};

export const waitingRoomReducer = (state = initial, action: GameActionTypes) => {
    switch(action.type) {
        case ACTION.PLAYER_BECOME_ONLINE: {
            return {
                ...state,
            }
        }
        default: return state;
    }
}
