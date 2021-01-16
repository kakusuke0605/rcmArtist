export const SEND_TEXT = 'SENT_TEXT';

export const inputText = (result: { text: string }) => ({
  type: SEND_TEXT,
  payload: result,
})

export type TextAction = ReturnType<typeof inputText>
