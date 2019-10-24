export enum GameSocketEventEmit {
    I_AM_HERE = 'i_am_here',
    CREATE_GAME = 'create_game',
    JOIN_GAME = 'join_game',
    START_GAME = 'start_game',
    END_OF_TURN = 'end_of_turn',
};

export enum GameSocketEventListen {
    PLAYER_BECOME_ONLINE = 'player_become_online',
    GAME_CREATED = 'game_created',
    PLAYER_JOIN_THE_GAME = 'player_join_the_game',
    GAME_STARTED = 'game_started',
    PLAYER_GET_CARD_FROM_DECK = 'player_get_card_from_deck',
    PLAYER_DIED = 'player_died',
    PLAYER_USE_CARD = 'player_use_card',
    PLAYER_END_THE_TURN = 'player_end_the_turn',
};