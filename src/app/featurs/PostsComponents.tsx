import React, {useEffect, useState} from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSearchContext} from '../contexts/SearchContext';
import {Post} from '../types/types';

const PostComponet = () => {
  const BASE_URL = 'https://jsonplaceholder.typicode.com';
  const MIN = 1000000000;
  const MAX = 9000000000;

  const {state, dispatch} = useSearchContext();
  const [posts, setPosts] = useState<Post[]>([]);
  const [tempPosts, setTempPosts] = useState<Post[]>([]);

  const fetchPosts = () => {
    fetch(`${BASE_URL}/posts`)
      .then(response => response.json())
      .then(json => {
        // duplicate items 30 times
        const items = Array(30).fill(json).flat();
        setPosts(items);
        setTempPosts(items);
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    if (state.reRender) {
      setPosts(posts);
      setTempPosts(posts);
      dispatch({
        type: 'RE_RENDER',
        payload: false,
      });
    }
  }, [state.reRender]);

  useEffect(() => {
    if (state.searchQuery) {
      searchPosts(state.searchQuery);
    } else {
      setPosts(tempPosts);
    }
  }, [state.searchQuery]);

  const searchPosts = (quary: string) => {
    let filterdPost = posts.filter((item: Post) => {
      if (item.body.toLowerCase().includes(quary.toLowerCase())) {
        return item;
      }
    });
    setPosts(filterdPost);
  };

  const randomNumber = (max: number, min: number): number =>
    Math.round(Math.random() * (max - min)) + min;

  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({item}: ListRenderItemInfo<Post>) => (
          <View style={styles.item}>
            <Text style={styles.title}>
              {item.id}: {item.body}{' '}
              <Text style={styles.randomNumber}> {randomNumber(MIN, MAX)}</Text>
            </Text>
          </View>
        )}
        keyExtractor={(item: Post, index) => item.id + '_' + index}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 0,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 16,
  },
  randomNumber: {
    fontWeight: '800',
  },
});

export default PostComponet;
