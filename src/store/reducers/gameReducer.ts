import { MoveDirection } from "../../api/GameSocketTypes"

const initial = {
    gameId: '',
    hostId: '',
    direction: MoveDirection.forward,
    deckSize: 0,
    releaseSize: 0,
    currentPlayerId: '',
    players: [],
    cards: [],
    isFetching: false,
    error: null,
}

export const gameReducer = {}