import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const MapScreen = () => {
  const [policlinicas, setPoliclinicas] = useState([]);
  const [userLocation, setUserLocation] = useState(null); // Estado para armazenar a localização do usuário
  const initialRegion = {
    latitude: -8.047562, // Latitude e longitude central aproximada do Recife
    longitude: -34.877003,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  };

  useEffect(() => {
    fetchPoliclinicas();
    getLocationAsync();
  }, []);

  const fetchPoliclinicas = async () => {
    try {
      const response = await fetch(
        'http://dados.recife.pe.gov.br/api/3/action/datastore_search?resource_id=09528351-d546-48ef-8654-42533bd2c8c3&limit=11'
      );
      const data = await response.json();
      if (data.success) {
        setPoliclinicas(data.result.records);
      } else {
        console.error('Erro ao buscar dados da API');
      }
    } catch (error) {
      console.error('Erro ao buscar dados da API:', error);
    }
  };

  const getLocationAsync = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.error('Permissão para acessar a localização foi negada');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setUserLocation(location.coords);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <MapView style={styles.map} initialRegion={initialRegion}>
        {policlinicas.map((poli) => (
          <Marker
            key={poli._id}
            coordinate={{
              latitude: parseFloat(poli.latitude),
              longitude: parseFloat(poli.longitude),
            }}
            title={poli.nome_oficial}
            description={poli.endereço}
          />
        ))}

        {userLocation && (
          <Marker
            coordinate={{
              latitude: userLocation.latitude,
              longitude: userLocation.longitude,
            }}
            title="Minha Localização"
            pinColor="blue" // Cor do marcador
          />
        )}
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