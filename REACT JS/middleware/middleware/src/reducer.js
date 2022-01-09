const initialState = {
    bal : 10000
};
const reducer = (state = initialState,action) => 
{
     const newState = {...state};//cloning previous state
     
     switch(action.type)
     {
            case "DEPOSIT" : newState.bal += action.value;
                    break;
            case "WITHDRAW": newState.bal -= action.value;
                    break;
     }
     return newState;
}
export default reducer;