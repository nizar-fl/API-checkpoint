import {
    GET_DATA,
} from "../ActionsTypes/contactActionsType";
const initialState = {products: []};
//Pure fucntion
// payload is the data that we want to pass to the reducer (we will pass the data from the component to the reducer)
export const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                products: action.payload
            };
        
        default:
            return state;
    }
};
