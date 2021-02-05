export const UPDATE_STATE = 'UPDATE_STATE';

export const updateState = (result: { text: string,id:string, lastId:string }) => ({
  type: UPDATE_STATE,
  payload: result,
})

export type TextAction = ReturnType<typeof updateState>;
