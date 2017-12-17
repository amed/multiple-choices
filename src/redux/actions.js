import { LOAD_DATA, SELECT_CHOICE } from './constants';
const data = require('../fixtures/data.json');

export const selectChoice = (choiceId) => ({
  type: SELECT_CHOICE,
  choiceId
})

export const loadData = () => ({
  // this should be api call
  type: LOAD_DATA,
  data
})
