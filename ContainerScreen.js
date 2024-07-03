import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView } from 'react-native';

const ContainerScreen = () => {
  const [policlinicas, setPoliclinicas] = useState([]);

  useEffect(() => {
    fetchPoliclinicas();
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

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.text}>Informações da Policlínica</Text>
        <ScrollView style={styles.cardContainer}>
          {policlinicas.map((poli) => (
            <View key={poli._id} style={styles.card}>
              <Text style={styles.cardTitle}>{poli.nome_oficial}</Text>
              <Text style={styles.cardText}>{poli.endereço}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F0F8FF',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    color: '#004080',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cardContainer: {
    width: '100%',
  },
  card: {
    backgroundColor: '#E6F0FA',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#004080',
  },
  cardText: {
    fontSize: 14,
    color: '#333',
  },
});

export default ContainerScreen;