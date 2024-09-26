import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.infoContainer}>
        <View style={styles.infoBlock}>
          <Text style={styles.headerText}>300 KM</Text>
          <Text style={styles.subHeaderText}>Today Distance</Text>
        </View>
        <View style={styles.infoBlock}>
          <Text style={styles.headerText}>24 KMPH</Text>
          <Text style={styles.subHeaderText}>Vehicle Speed</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="play" size={24} color="orange" />
          <Text style={styles.buttonText}>Play Journey</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    marginTop: 60,
    zIndex: 1000,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Optional: semi-transparent background
    alignItems: 'center', // Center the content
  },
  infoContainer: {
    flexDirection: 'row', // Layout items in a row
    justifyContent: 'space-between', // Space items evenly
    alignItems: 'center', // Center items vertically
    width: '100%', // Ensure it uses the full width of the header
  },
  infoBlock: {
    alignItems: 'center', // Center text within each block
    flex: 1, // Allow equal space distribution
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subHeaderText: {
    fontSize: 14,
    color: 'gray',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginLeft: 10, // Space between the button and the info blocks
  },
  buttonText: {
    color: 'orange',
    marginLeft: 5,
    fontWeight: 'bold',
  },
});

export default Header;
