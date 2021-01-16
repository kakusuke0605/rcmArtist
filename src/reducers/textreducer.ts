import { inputText, SEND_TEXT, TextAction } from '../action/action';
import { Reducer } from 'redux';

interface Keyword{
  text: string;
}

const initialState: Keyword = {
  text: 'initialText',
};


const textreducer: Reducer<
  Keyword,
  TextAction
  > = (
    state:Keyword=initialState,
    action: TextAction,
  ): Keyword => {
  if (action.type === SEND_TEXT) {
    return ({
      ...state,
      text: action.payload.text,
    });
  } else {
    return state;
  }
};

export default textreducer;
