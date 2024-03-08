import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, ActivityIndicator, FlatList } from "react-native";
import { useRoute } from '@react-navigation/native';
import { searchMovies, searchTvShows } from '../services/api';
import MovieCard from "../components/Moviecard";
import { set } from "firebase/database";

function SearchScreen() {
  const { query, type } = useRoute().params;
  console.log(query, type);
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        let result;
        if (type === 'movies') {
          result = await searchMovies(query);
        } else {
          result = await searchTvShows(query);
        }
        setSearchResult(result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [query, type]);

  if (loading) {
    return (
      <SafeAreaView>
        <ActivityIndicator size="large" color="#0000ff" />
      </SafeAreaView>
    );
  }

  if (searchResult.length === 0) {
    return (
      <SafeAreaView>
        <Text>No results found.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <FlatList
        data={searchResult}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MovieCard
            movie={item}
          />
        )}
      />
    </SafeAreaView>
  );
}
export default SearchScreen;
