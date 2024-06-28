import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

const ContainerScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.text}>Informações da Policlínica</Text>
        {/* Aqui você pode adicionar o conteúdo dinâmico usando sua lógica de IA */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F0F8FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '90%',
    padding: 20,
    backgroundColor: '#E6F0FA',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#004080',
    fontWeight: 'bold',
  },
});

export default ContainerScreen;
