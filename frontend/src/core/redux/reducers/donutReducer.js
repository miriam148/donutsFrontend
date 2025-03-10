import { ADD_DONUT, SET_DONUTS } from "../actions/donutActions";

const initialState = {
    donuts: [],
  };
  

  
  const donutReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_DONUTS:
        return { ...state, donuts: action.payload };
      case ADD_DONUT:
        return { ...state, donuts: [...state.donuts, action.payload] };
      default:
        return state;
    }
  };
  


  export default donutReducer;
  