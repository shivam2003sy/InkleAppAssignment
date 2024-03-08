import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import slugify from 'slugify';

function SearchBar({type}) {
  const [value, setValue] = useState("");
  const navigation = useNavigation();

  const handleSearch = (query) => {
    if (query !== "") {
      query = query.trim();

      if (query === "") {
        navigation.navigate("/");
      } else {
        navigation.navigate(`SearchScreen`, { query: slugify(query) });
      }
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Search Movie'
        value={value}
        onChangeText={(text) => setValue(text)}
        onEndEditing={() => handleSearch(value)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent', 
    height: 100, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    paddingHorizontal: 10,
    width: '80%',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default SearchBar;
