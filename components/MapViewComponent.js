import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import Constants from 'expo-constants';  // Import expo-constants to access the app.json configurations
import HeaderComponent from './Header';

const MapViewComponent = () => {
  const googleMapsApiKey = Constants.expoConfig.extra.googleMapsApiKey; // Access the API key

  // Example coordinates for the vehicle's route
  const routeCoordinates = [
    { latitude: 37.78825, longitude: -122.4324 },
    { latitude: 37.7888, longitude: -122.4334 },
    { latitude: 37.7890, longitude: -122.4340 },
    { latitude: 37.7895, longitude: -122.4350 },
  ];

  return (
    <View style={styles.container}>
      <HeaderComponent />
      <MapView
        style={styles.map}
        provider="google"
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        apiKey={googleMapsApiKey} // Use the API key for Google Maps
      >
        {/* Polyline to show the vehicle's path */}
        <Polyline
          coordinates={routeCoordinates}
          strokeColor="red" // Line color
          strokeWidth={4} // Line width
        />

        {/* Vehicle marker with image from URL */}
        <Marker
          coordinate={{
            latitude: 37.7890,
            longitude: -122.4340,
          }}
          title="Vehicle"
          description="This is the vehicle location"
        >
          <Image
            source={{ uri: 'https://static.vecteezy.com/system/resources/previews/005/576/332/original/car-icon-car-icon-car-icon-simple-sign-free-vector.jpg' }} // Car image URL
            style={{ width: 40, height: 40 }} // Adjust size as needed
          />
        </Marker>

        {/* Alert button (rounded shape) */}
       
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  alertButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#ff0000',
    borderRadius: 50,
    padding: 10,
  },
  alertIcon: {
    width: 30,
    height: 30,
  },
  zoomButton: {
    position: 'absolute',
    bottom: 80,
    right: 20,
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  zoomIcon: {
    width: 30,
    height: 30,
  },
});
export default MapViewComponent;