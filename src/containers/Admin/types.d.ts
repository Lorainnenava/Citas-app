export type TDataProfileAuth = {
  msg: string;
  token: string;
  user:Object
};
export type TData = {
  profileAuth?: Object<TDataProfileAuth>;
};
