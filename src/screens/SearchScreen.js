import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useResults from '../hooks/useResults';

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => results.filter(result => result.price === price);

  return (
    <>
      <SearchBar 
        term={term} 
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList navigation={navigation} results={filterResultsByPrice('$')} title='Cost Effective' />
        <ResultsList navigation={navigation} results={filterResultsByPrice('$$')} title='Bit Pricier' />
        <ResultsList navigation={navigation} results={filterResultsByPrice('$$$')} title='Big Spender' />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({

});

export default SearchScreen;