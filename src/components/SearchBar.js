import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


function SearchBar({ type }) {
  const [value, setValue] = useState("");
  const navigation = useNavigation();

  const handleSearch = (query) => {
    navigation.navigate('SearchScreen', { query, type });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={`Search ${type}...`}
        placeholderTextColor="#ccc"
        value={value}
        onChangeText={(text) => setValue(text)}
        onEndEditing={() => handleSearch(value)}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black',
    color: 'black',
  },
});

export default SearchBar;
