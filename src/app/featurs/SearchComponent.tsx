import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSearchContext} from '../contexts/SearchContext';

const SearchComponet = () => {
  const {state, dispatch} = useSearchContext();
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.search}
        editable
        maxLength={40}
        onChangeText={
          (value: any) => {
            dispatch({
              type: 'SEARCH_QUARY_UPDATED',
              payload: value,
            });
          }
        }
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          dispatch({
            type: 'RE_RENDER',
            payload: true,
          });
        }}>
        <Text>Re-Render</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    backgroundColor: 'white',
    borderColor: '#000000',
    borderWidth: 1,
    height: 40,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 5,
  },
  button: {
    marginHorizontal: 20,
    marginVertical: 10,
    height: 40,
    backgroundColor: '#E1DDDE',
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
  },
  container: {backgroundColor: '#ffffff'},
});

export default SearchComponet;
