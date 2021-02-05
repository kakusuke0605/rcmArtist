import { TextAction,  UPDATE_STATE } from '../action/action';
import { Reducer } from 'redux';

interface Keyword{
  text: string;
  id: string;
  lastId: string;
}

const initialState: Keyword = {
  text: 'initialText',
  id: 'initialId',
  lastId: 'initialLastId'
};


const textreducer: Reducer<
  Keyword,
  TextAction
  > = (
    state:Keyword=initialState,
    action: TextAction,
  ): Keyword => {
    switch (action.type) {
      case UPDATE_STATE:
        return ({
          ...state,
          text: action.payload.text,
          id: action.payload.id,
          lastId:action.payload.lastId,
        });
      default: {
        return state;
      }
    }
};

export default textreducer;
