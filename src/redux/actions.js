import { SELECT_CHOICE } from './constants';

export const selectChoice = (choiceId) => ({
  type: SELECT_CHOICE,
  choiceId
})
