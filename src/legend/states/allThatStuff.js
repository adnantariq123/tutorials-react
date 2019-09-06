const initialState = {
    tabs:
    [
        {
            "h1":"Interactive .svg",
            "h2":"Ahmed"
        },
        {
            "h1":"Something Different",
            "h2": "Adnan"
        }


    ]
}
const reducer = (state=initialState) => {
    const newState = {...state};



    return newState;
}

export default reducer;