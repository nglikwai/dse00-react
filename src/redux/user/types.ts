// List of actions available
export enum UserTypes {
  switchDarkMode = 'switchDarkMode',
  setIsdown = 'setIsdown',
  login = 'login',
}

export type SetIsDownPayload = boolean

export type LoginPayload = {
  email: string
  password: string
}
