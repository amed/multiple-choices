import { SELECT_CHOICE, LOAD_DATA } from './constants';

const appReducer = (state = {}, action) => {
  console.log({state, type: action})
  switch (action.type) {
    case LOAD_DATA:
      return {
        ...state,
        questions: action.data
      };
    case SELECT_CHOICE:
      return {
        ...state,
        ...action.data
      };
    default:
      return state;
  }
};

export default appReducer;
