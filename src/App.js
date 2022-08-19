import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  TextInput,
} from 'react-native';
import React from 'react';
import productData from './helper/product.json';
import ProductCard from './components/ProductCard';

const App = () => {
  const [text, onChangeText] = React.useState('');
  const renderProduct = ({item}) => <ProductCard product={item} />;
  const dataProduct = productData.filter(product =>
    product.title.toLowerCase().includes(text.toLowerCase()),
  );
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Patika Store</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Ara..."
      />
      <FlatList
        data={dataProduct}
        renderItem={renderProduct}
        horizontal={false}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    backgroundColor: '#D9D1C5',
  },
  header: {
    fontSize: 40,
    fontWeight: '500',
    letterSpacing: 1.4,
    padding: 10,
    color: '#222D44',
    fontStyle: 'italic',
  },
  input: {
    height: 40,
    margin: 12,
    border: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#EAE9E5',
  },
});

export default App;
