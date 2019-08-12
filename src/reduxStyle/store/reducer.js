const initialState = {
    age:21
}
const reducer = (state=initialState,action) => {
    const newState = {...state};

    if(action.type ==='Age_UP') {
        newState.age++;
    };

    if(action.type ==='Age_DOWN') {
        newState.age--;
    };


    return newState;
}

export default reducer;