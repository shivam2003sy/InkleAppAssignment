import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useRoute } from '@react-navigation/native';

const SingleCard = () => {
  const { movie } = useRoute().params;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Image
          style={styles.poster}
          source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.overview}>{movie.overview}</Text>
          <View style={styles.iconsContainer}>
            <View style={styles.iconRow}>
              <Icon name="star" size={20} color="orange" />
              <Text style={styles.iconsText}>{movie.vote_average}</Text>
            </View>
            <View style={styles.iconRow}>
              <Icon name="calendar" size={20} color="black" />
              <Text style={styles.iconsText}>{movie.release_date}</Text>
            </View>
            <View style={styles.iconRow}>
              <Icon name="heart" size={20} color="red" />
              <Text style={styles.iconsText}>{movie.popularity}</Text>
            </View>
            <View style={styles.iconRow}>
              <Icon name="like2" size={20} color="blue" />
              <Text style={styles.iconsText}>{movie.vote_count}</Text>
            </View>
            <View style={styles.iconRow}>
              <Icon name="clockcircleo" size={20} color="black" />
              <Text style={styles.iconsText}>{movie.runtime}</Text>
            </View>
            {/* Assuming movie.genres is an array */}
            {movie.genres && movie.genres.map(genre => (
              <View key={genre.id} style={styles.iconRow}>
                <Icon name="tag" size={20} color="black" />
                <Text style={styles.iconsText}>{genre.name}</Text>
              </View>
            ))}
            {/* Assuming movie.keywords is an array */}
            {movie.keywords && movie.keywords.map(keyword => (
              <View key={keyword.id} style={styles.iconRow}>
                <Icon name="tags" size={20} color="black" />
                <Text style={styles.iconsText}>{keyword.name}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    margin: 10,
    elevation: 5,
    width: '90%',
  },
  poster: {
    width: 120,
    height: 180,
  },
  detailsContainer: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
  overview: {
    fontSize: 14,
    marginBottom: 10, // Increased margin for better separation
    color: 'black',
  },
  iconsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Allow multiple lines of icons
    marginTop: 10,
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20, // Increased margin for better separation
    marginBottom: 5,
  },
  iconsText: {
    fontSize: 14,
    marginLeft: 5,
    color: 'black',
  },
});

export default SingleCard;
