import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies, getNowPlayingMovies } from '../services/api';
import Movies from '../components/Movies';
import SearchBar from '../components/SearchBar';

const MoviesScreen = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMoviesData = async () => {
      const trendingMoviesData = await getNowPlayingMovies();
      const upcomingMoviesData = await getUpcomingMovies();
      const topRatedMoviesData = await getTopRatedMovies();
      const popularMoviesData = await getPopularMovies();

      setTrendingMovies(trendingMoviesData);
      setUpcomingMovies(upcomingMoviesData);
      setTopRatedMovies(topRatedMoviesData);
      setPopularMovies(popularMoviesData);
      setLoading(false);
    };
    fetchMoviesData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  return (
    <ScrollView style ={styles.continer}>
      <View style={styles.section}>
        <SearchBar type="movies" />
      </View>
      <View style={styles.section}>
        <Text style={styles.header}>Trending Movies</Text>
        <Movies movies={trendingMovies} />
      </View>
      <View style={styles.section}>
        <Text style={styles.header}>Upcoming Movies</Text>
        <Movies movies={upcomingMovies} />
      </View>
      <View style={styles.section}>
        <Text style={styles.header}>Top Rated Movies</Text>
        <Movies movies={topRatedMovies} />
      </View>
      <View style={styles.section}>
        <Text style={styles.header}>Popular Movies</Text>
        <Movies movies={popularMovies} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    padding: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    marginBottom: 20,
  },
  header: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default MoviesScreen;
