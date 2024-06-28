import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = () => {
  const initialRegion = {
    latitude: -23.55052, // Exemplo de latitude
    longitude: -46.633308, // Exemplo de longitude
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
      >
        <Marker
          coordinate={{ latitude: -23.55052, longitude: -46.633308 }} // Exemplo de coordenadas
          title="Policlínica Exemplo"
          description="Descrição da Policlínica"
        />
      </MapView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapScreen;
