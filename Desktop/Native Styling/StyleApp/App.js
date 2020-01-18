import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image, FlatList,StatusBar} from 'react-native';
import catImage from './assets/cat.jpg'

const mediaArray = [
  {
    'key': '0',
    'title': 'Title 1',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.',
    'thumbnails': {
      w160: 'http://placekitten.com/160/161',
    },
    'filename': 'http://placekitten.com/2048/1920',
  },
  {
    'key': '1',
    'title': 'Title 2',
    'description': 'Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. ',
    'thumbnails': {
      w160: 'http://placekitten.com/160/162',
    },
    'filename': 'http://placekitten.com/2041/1922',
  },
  {
    'key': '2',
    'title': 'Title 3',
    'description': 'Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. ',
    'thumbnails': {
      w160: 'http://placekitten.com/160/163',
    },
    'filename': 'http://placekitten.com/2039/1920',
  },
];

const App = () => {
  return(
    <View style={styles.container}>
      <StatusBar  backgroundColor="green" barStyle="light-content" />
      <View style={styles.cats_header}>
        <Image style={styles.cats_img} source={catImage}/>
        <Text style={styles.cats_text}>2246 Homeless Cats </Text>
      </View>
      <View style={styles.cats_list}>
        <FlatList
        data={mediaArray}
        renderItem={({item}) => {
          return (
                <TouchableOpacity style={styles.row}>
                  <View style={styles.homeless_cat}>
                    <Image
                        style={styles.homeless_image}
                        source={{uri: item.thumbnails.w160}}
                    />
                  </View>
                  <View style={styles.homeless_info}>
                    <Text style={{fontSize: 20, fontWeight: 'bold', color: 'rgb(255,173,47)'}}>{item.title}</Text>
                    <Text>{item.description}</Text>
                  </View>
              </TouchableOpacity>
          );
        }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  cats_header: {
    flex: 2,
    backgroundColor: 'powderblue',
    borderBottomColor: '#8ccb62',
    borderBottomWidth: 5,
  },
  cats_img: {
    flex: 1,
    height: undefined,
    width: undefined,
    alignSelf: 'stretch',
  },
  cats_list: {
    flex: 3,
    backgroundColor: 'white',
    marginTop: 5,
  },
  cats_text: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 30,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    backgroundColor: 'rgba(0,0,0,0.2)',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    padding: 15,
    marginBottom: 5,
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#fff',
    borderRadius: 0,
    borderWidth: 1,
    paddingHorizontal: 10,
    elevation: 10,
  },
  homeless_cat:{
    flex: 1,
    backgroundColor: '#ffe',
    flexDirection: 'row',
  },
  homeless_image: {
    width: '100%',
    height: 200,
    marginTop: 15,
    borderRadius: 50,
  },
  homeless_info: {
    backgroundColor: '#ffe',
    flex: 2,
    padding: 10,
  },

});

export default App;
