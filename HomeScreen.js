import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Bem-vindo ao aplicativo de Policlínicas de Recife!
      </Text>
      <Text style={styles.description}>
        Este aplicativo foi criado para fornecer informações sobre as
        policlínicas localizadas na cidade de Recife, oferecendo acesso rápido para localizar cada unidade.
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Ver Policlínicas"
          onPress={() => navigation.navigate('Container')}
          color="#4A90E2"
        />
        <View style={{ marginTop: 10 }} />
        <Button
          title="Ver Mapa"
          onPress={() => navigation.navigate('Map')}
          color="#007ACC"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F8FF',
    padding: 20,
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
    color: '#004080',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default HomeScreen;
