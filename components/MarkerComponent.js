// components/MarkerComponent.js
import React from 'react';
import { Marker } from 'react-native-maps';

const MarkerComponent = ({ coordinate, title, description }) => {
  return (
    <Marker
      coordinate={coordinate}
      title={title}
      description={description}
    />
  );
};

export default MarkerComponent;
