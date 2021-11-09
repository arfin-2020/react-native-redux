
import React from 'react';
import { Provider } from 'react-redux';
import store from './components/store/store';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Todo from './components/todo/Todo';

const App = () => {
  
  return (
    <Provider store={store}>
      <View style={styles.screen}>
      <Todo/>
    </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  screen:{
    flex:1,
    alignItems:'center',
  }
});

export default App;
