import { TextAction,  UPDATE_STATE } from '../action/action';
import { Reducer } from 'redux';

interface Keyword{
  text: string;
  id: string;
}

const initialState: Keyword = {
  text: 'initialText',
  id :'initialId'
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
        });
      default: {
        return state;
      }
    }
};

export default textreducer;
