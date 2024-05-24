import React, { useState } from 'react';
import { FontAwesome5, MaterialCommunityIcons} from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity , Image, Linking} from 'react-native';

// Componentes de página
const MenuPrincipal = () => {
  return (
    <View style={styles.pagina}>
      <Image 
        source={{uri:'https://avatars.githubusercontent.com/u/144496932?s=400&u=fce7351e010684e279d4785a97e53b5af587a0c4&v=4'}}
        style ={styles.image}
      />
      <Text style={styles.name}>Jhennifer Jovino</Text>
      <Text style={styles.description}>
      Sou estudante de Análise e Desenvolvimento de Sistemas(ADS) com uma paixão profunda por tecnologia. 
      eu objetivo profissional é atuar na área de análise de dados, onde posso aplicar minhas habilidades 
      técnicas e analíticas para transformar dados em insights valiosos. 
      Estou sempre em busca de novos desafios que me permitam aprender e crescer profissionalmente, 
      e estou entusiasmada com a perspectiva de contribuir para o sucesso de projetos de análise de dados
      </Text>
      <Text style ={styles.description}> Entrar em contato por: </Text>
      <Text style= {styles.description}>📩 jhennifer.jovino@gmail.com </Text>
      <Text style={styles.link2} onPress={()=> Linking.openURL('https://www.linkedin.com/in/jhennifer-jovino-762272237/')}>🔗LinkedIn</Text>
    </View>
  );
};

const Pagina1 = () => {
  return (
    <View style={styles.pagina}>
    <Text style={styles.titulo2}> Habilidades e Ferramentas</Text>
    <View style={styles.iconContainer}>
    <View style={styles.iconContainer}>
  <View style={styles.iconItem}>
    <FontAwesome5 name="html5" size={40} color="#e34f26" style={styles.icon} />
    <Text style={styles.iconLabel}>HTML5</Text>
  </View>
  <View style={styles.iconItem}>
    <FontAwesome5 name="code" size={40} color="#f7df1e" style={styles.icon} />
    <Text style={styles.iconLabel}>C</Text> 
  </View>
  <View style={styles.iconItem}>
    <FontAwesome5 name="python" size={40} color="#3776AB" style={styles.icon} />
    <Text style={styles.iconLabel}>Python</Text>
  </View>
  <View style={styles.iconItem}>
    <MaterialCommunityIcons name="microsoft-powerpoint" size={40} color="#f25022" style={styles.icon} />
    <Text style={styles.iconLabel}>Power BI</Text> 
  </View>
  <View style={styles.iconItem}>
    <MaterialCommunityIcons name="panda" size={40} color="#000" style={styles.icon} />
    <Text style={styles.iconLabel}>Pandas</Text> 
  </View>
  <View style={styles.iconItem}>
    <FontAwesome5 name="github" size={40} color="#181717" style={styles.icon} />
    <Text style={styles.iconLabel}>GitHub</Text>
  </View>
  <View style={styles.iconItem}>
    <MaterialCommunityIcons name="database" size={40} color="#4479A1" style={styles.icon} />
    <Text style={styles.iconLabel}>MySQL</Text>
  </View>
</View>
    </View>
    
    <View style={styles.additionalContent}>

      <Text style={styles.titulo2}>Projetos</Text>

      <Text style={styles.link} onPress={()=> Linking.openURL('https://github.com/Jennyasmim/CRUD-C')}>CRUD - Sistema de uma instituição de ensino</Text>
      <Text style={styles.projectDescription2}>Este projeto permite realizar o cadastro, leitura, atualização e 
      exclusão de alunos, professores e notas. Utilizando C com manipulação de ponteiros para criar uma sistema 
      de usuário intuitiva e funcional.</Text>

      <Text style={styles.link} onPress={()=> Linking.openURL('https://github.com/Jennyasmim/API-CRUD')}>API de Produtos - Operações CRUD:</Text>
      <Text style={styles.projectDescription2}>
      Este projeto consiste em uma API construída com Node.js utilizando o framework Express e o banco de dados MongoDB. 
      Essa API possibilita a execução das operações CRUD em uma coleção de Livros. 
      Com ela, é possível criar, ler, atualizar e excluir produtos conforme necessário..</Text>

      
    </View>
  </View>
);
};

const Pagina2 = () => {
  return (
    <View style={styles.pagina}>
      <Image source={require('./assets/image.png')}
        style={styles.image2}
      ></Image>
    </View>
  );
};

const App = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [paginaAtual, setPaginaAtual] = useState('Menu Principal');

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const navegarPara = (pagina) => {
    setPaginaAtual(pagina);
    setMenuAberto(false);
  };

  // Renderização condicional da página atual
  const renderizarPagina = () => {
    switch (paginaAtual) {
      case 'Menu Principal':
        return <MenuPrincipal />;
      case 'Página 1':
        return <Pagina1 />;
      case 'Página 2':
        return <Pagina2 />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.titulo}>Meu App</Text>
        <TouchableOpacity onPress={toggleMenu} style={styles.menuIcon}>
          <Text>☰</Text>
        </TouchableOpacity>
      </View>

      {/* Menu */}
      {menuAberto && (
        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Menu Principal')}>
            <Text style={styles.menuItemText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página 1')}>
            <Text style={styles.menuItemText}>Linguagens e Ferramentas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página 2')}>
            <Text style={styles.menuItemText}>Currículo</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Conteúdo */}
      <View style={styles.content}>{renderizarPagina()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#162447', // Azul escuro
    paddingTop: 24
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#7EA4B3', // Azul claro
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#7EA4B3', // Amarelo
  },
  menuIcon: {
    padding: 10,
  },
  menu: {
    backgroundColor: '#162447', // Azul escuro
    padding: 10,
    top: 0, // Define a posição superior do conteúdo
    flex: 0.8,

  },
  menuItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#7EA4B3', // Azul claro
  },
  menuItemText: {
    fontSize: 16,
    color: '#FFF', // Branco
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pagina: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoPagina: {
    fontSize: 18,
    color: '#FFF', // Branco
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginTop: -150,
  },
  image2:{
    width: 400,
    height:600,
    marginTop:50,
  },
  name: {
    color: '#FFF', // Branco
    fontSize: 20,
    marginTop: 20,
  },
  description: {
    color: '#FFF', // Branco
    fontSize: 12,
    lineHeight: 20, 
    marginTop: 10, 
    textAlign: 'center',
    marginTop: 30,
  },
  projectDescription2: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  titulo2: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFF', // Branco
    marginBottom: 15,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  iconItem: {
    alignItems: 'center',
    margin: 10,
  },
  icon: {
    marginBottom: 5,
  },
  iconLabel: {
    color: '#FFF', // Branco
    fontSize: 14,
    padding: 10
  },
  additionalContent: {
    marginTop: 30,
    alignItems: 'center',
  },
  projectDescription: {
    color: '#FFF', // Branco
    fontSize: 14,
    textAlign: 'center',
    marginTop: 20,
  
  },
  link:{
    color: '#7EA4B3', // Azul claro
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -2,
    textDecorationLine:'underline',
    padding: 10
  },
  link2:{
    color: '#7EA4B3', // Azul claro
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 2,
    textDecorationLine:'underline',
    padding: 10
  }
});


export default App;
