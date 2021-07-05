import { combineReducers } from 'redux';

const TokenReducer = (state = '', action) => {
    switch (action.type) {
      case 'GETTOKEN':
        return action.payload;
      default:
        return state;
    }
  };


const rootReducer = combineReducers({
   // reducers will be here
   Token: TokenReducer
  });
  
export default rootReducer;