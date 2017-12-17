import reducers from './redux/store'
import {createStore} from 'redux'
console.log(typeof reducers)
export function storeFactory (preparedState = {}) {
  return createStore(reducers, preparedState, () => {} )
}
