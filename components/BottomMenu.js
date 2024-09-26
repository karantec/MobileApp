import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ensure to install this library if you haven't

const BottomMenu = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const menuItems = [
    { name: 'Battery', icon: 'battery-charging' }, // Updated icon
    { name: 'Network', icon: 'wifi' },             // Updated icon
    { name: 'Ignition', icon: 'car' },
    { name: 'Geozone', icon: 'map' },
    { name: 'Breakdown', icon: 'construct' },     // Updated icon
  ];

  const additionalMenuItems = [
    { name: 'Navigation', icon: 'navigate' },
    { name: 'History', icon: 'time' },
    { name: 'Theft', icon: 'lock-closed' },       // Updated icon
    { name: 'Fuel', icon: 'water' },
    { name: 'Rely Button', icon: 'help-circle' },
  ];

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem}>
            <Ionicons name={item.icon} size={24} />
            <Text>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {/* Clickable line to toggle additional items */}
      <TouchableOpacity onPress={toggleMenu} style={styles.toggleLine}>
        <Text style={styles.toggleLineText}>
          {isExpanded ? 'Hide Additional Items' : 'Show Additional Items'}
        </Text>
      </TouchableOpacity>

      {isExpanded && (
        <View style={styles.additionalMenu}>
          {/* Display first 4 items in a row */}
          <View style={styles.additionalRow}>
            {additionalMenuItems.slice(0, 4).map((item, index) => (
              <TouchableOpacity key={index} style={styles.menuItem}>
                <Ionicons name={item.icon} size={24} />
                <Text>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
          {/* Display next 2 items below */}
          <View style={styles.additionalRow}>
            {additionalMenuItems.slice(4).map((item, index) => (
              <TouchableOpacity key={index} style={styles.menuItem}>
                <Ionicons name={item.icon} size={24} />
                <Text>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}
      {isExpanded && (
        <View style={styles.toggleButtonsContainer}>
          <ToggleButton label="Pick Alarm" />
        </View>
      )}
    </View>
  );
};

const ToggleButton = ({ label }) => {
  const [isToggled, setIsToggled] = useState(true); // Default on

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <TouchableOpacity onPress={handleToggle} style={styles.toggleSwitch}>
      <Text style={{ color: 'white' }}>{isToggled ? `${label} On` : `${label} Off`}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingBottom: 10,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  menuItem: {
    alignItems: 'center',
  },
  toggleLine: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#007BFF',
  },
  toggleLineText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  additionalMenu: {
    paddingVertical: 10,
  },
  additionalRow: {
    flexDirection: 'row',
    justifyContent: 'space-around', // Space evenly in row
    marginVertical: 5, // Space between rows
  },
  toggleButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  toggleSwitch: {
    backgroundColor: '#007BFF',
    padding: 5,
    borderRadius: 5,
    marginHorizontal: 5, // Space between toggle buttons
  },
});

export default BottomMenu;
