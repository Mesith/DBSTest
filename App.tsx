
import React from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import PostComponet from './src/app/featurs/PostsComponents';
import SearchComponet from './src/app/featurs/SearchComponent';
import {searchReducer} from './src/app/reducers/SerachReducer';
import {SearchContext} from './src/app/contexts/SearchContext';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const initialValue: any = {
    searchQuery: null,
  };
  const [state, dispatch] = React.useReducer(searchReducer, initialValue);

  const providerState = {
    state,
    dispatch,
  };

  return (
    <SearchContext.Provider value={providerState}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Image source={require('./img/doggo_walk.gif')} />

        <SearchComponet />
        <PostComponet />
      </SafeAreaView>
    </SearchContext.Provider>
  );
};

export default App;
