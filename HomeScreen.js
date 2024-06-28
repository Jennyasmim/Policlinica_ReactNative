import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Policlínicas</Text>
      <Button
        title="Ver Policlínicas"
        onPress={() => navigation.navigate('Container')}
        color="#4A90E2"
      />
      <Button
        title="Ver Mapa"
        onPress={() => navigation.navigate('Map')}
        color="#007ACC"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F8FF',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
    color: '#004080',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
