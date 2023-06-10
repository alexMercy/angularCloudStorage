
export enum MESSAGE_TYPE {
  SUCCESS = 'success',
  INFO = 'info',
  WARNING = 'warning',
  ERROR = 'error',
}

export interface Message {
  type: 'success' | 'info' | 'warning' | 'error',
  title: string,
  content: string,
  options: typeof messageOptions
}

export const messageOptions = { nzPauseOnHover: true, nzAnimate: true}
