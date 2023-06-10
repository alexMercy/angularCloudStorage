import {Message, MESSAGE_TYPE, messageOptions as options} from "./message-options";



export const EXAMPLE_TEST_SUCCESS: Message = {
  type: MESSAGE_TYPE.SUCCESS,
  title: 'success example',
  content: 'example content',
  options
}

export const EXAMPLE_TEST_ERROR: Message = {
  type: MESSAGE_TYPE.ERROR,
  title: 'error example',
  content: 'example content',
  options
}
