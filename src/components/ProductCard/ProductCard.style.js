import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#F2EEE6',
    flex: 1,
    margin: 5,
    borderRadius: 10,
  },
  image: {
    height: Dimensions.get('window').height / 3.5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    margin: 5,
  },
  text_views: {
    padding: 3,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    // letterSpacing: 1.4,
    flexShrink: 2,
  },
  price: {
    marginTop: 5,
    fontSize: 20,
    fontWeight: 'bold',
  },
  stock: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 2,
    textAlign: 'left',
    color: 'red',
  },
});
