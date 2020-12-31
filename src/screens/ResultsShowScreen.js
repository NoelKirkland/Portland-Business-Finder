import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{result.name}</Text>
      <Text style={styles.textSpace}>{result.location.display_address}</Text>
      <Text style={styles.textSpace}>{result.display_phone}</Text>
      <Text style={styles.isOpen}>{result.hours[0].is_open_now ? 'Open Now' : 'Currently Closed'}</Text>
      <FlatList 
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item}} />
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 12,
  },
  image: {
    height: 200,
    width: 300,
    marginTop: 20,
    borderWidth: 3,
    borderRadius: 5
  },
  textSpace: {
    margin: 5
  },
  isOpen: {
    fontStyle: 'italic',
    margin: 5
  }
});

export default ResultsShowScreen;