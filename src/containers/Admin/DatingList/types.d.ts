export type TDataProfileAuth = {
  msg: string;
  token: string;
  user:Object
};
export type TDataUser = {
  profileAuth?: Object<TDataProfileAuth>;
};
