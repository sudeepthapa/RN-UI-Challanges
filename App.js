/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import RootNavigation from './RN-UI-Challanges/Navigations/RootNavigation';
import { Provider as PaperProvider } from 'react-native-paper';

const App= () => {

  return (
      <PaperProvider>
        <SafeAreaView style={{flex:1}}>
          <RootNavigation/>
        </SafeAreaView>
      </PaperProvider>
  );
};

const styles = StyleSheet.create({

});

export default App;
