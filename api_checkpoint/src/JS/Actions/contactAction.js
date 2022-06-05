import {GET_DATA} from "../ActionsTypes/contactActionsType";
import axios from "axios";
import { useDispatch } from "react-redux";


export const getProducts = () => async (dispatch) => { 
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users")
        console.log(res.data);
        dispatch({
            type:GET_DATA,
            payload:res.data,
        })
        
    } catch (error) {
        console.log(error)
        
    }
};

