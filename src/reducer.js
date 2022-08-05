export const initialState ={
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // REMOVE after developing
    // token: 'pern BQAycWWkZ3A_bYj5pc8OKpnrypBwPyMxR8fVHwBZoZDV-BAAzLtIB-pLnbRYyyJAl6GSiIIHqLAbStWbKf4oktJUYr6Dkj54SOHT30QFf0TEFXC7L6UvVWnPZ8RHDe5rCQx2K1VVIE9KG7T6RUfeO93K-UOU0lsQiZahiRovO0IY-IIMQV-DiSNuCAV6gXYYzWdzO7Z4eHjGchNXg078',
};

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case 'SET_USER':
            return{
                ...state,
                user: action.user,
            }

        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token,
            }

        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists,
            }

            case 'SET_DISCOVER_WEEKLY':
                return{
                    ...state,
                    discover_weekly: action.discover_weekly,
                }
        default:
            return state;
    }


}

export default reducer;