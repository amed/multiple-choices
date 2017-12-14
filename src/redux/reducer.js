import { SELECT_CHOICE } from './constants';

const appReducer = (state = {}, action) => {
  console.log({state, action})
  switch (action.type) {

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
