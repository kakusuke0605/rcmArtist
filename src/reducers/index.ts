import { combineReducers } from 'redux';
import textreducer from './textreducer';

export interface CombineState {
  Keyword: {text:string};
}

const rootReducer = combineReducers({
  Keyword: textreducer,
});

export default rootReducer;
