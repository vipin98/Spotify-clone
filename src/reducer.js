export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // remove After development
    token: "BQBJ2pDoUS6pjCqdZY4qI4YwxGEbPsxVohjZ9cvgLkOlv_N7d3…etFrmFFUGG4IH1Z-g8bSd3Sz4JGhNZjUH_Q7wn8-gNE6kOSsL"
};

const reducer = (state, action) => {
    console.log(action);
    //  Action -> type , [payload]
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };
            defalut:
            return state;
    }


}

export default reducer;