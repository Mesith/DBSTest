import React, {Dispatch} from 'react';

export type StateType = {
  searchQuery: null | string;
  reRender: boolean;
};

export type Action = {
  type: any;
  payload: any;
};

export interface IContextProps {
  state: StateType;
  dispatch: Dispatch<Action>;
}

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
