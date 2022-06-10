export const searchReducer = (
  state = {searchQuery: null, reRender: false},
  action: {type: any; payload: any},
) => {
  switch (action.type) {
    case 'SEARCH_QUARY_UPDATED':
      return {...state, searchQuery: action.payload};
    case 'RE_RENDER':
      return {...state, reRender: action.payload};
    default:
      return state;
  }
};
