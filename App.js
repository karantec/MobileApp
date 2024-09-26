import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import MapViewComponent from './components/MapViewComponent';
import BottomMenu from './components/BottomMenu';
import Header from './components/Header';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mapContainer}>
        <MapViewComponent />
        <Header />
      </View>
      <BottomMenu />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mapContainer: {
    flex: 1,
    position: 'relative', // Necessary for the Header to position itself absolutely within this container
  },
});

export default App;
