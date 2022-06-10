import React from 'react';
import {IContextProps} from '../types/types';

export const SearchContext = React.createContext({} as IContextProps);

export const useSearchContext = () => {
  return React.useContext(SearchContext);
};
