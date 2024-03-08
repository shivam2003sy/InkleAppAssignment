import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
function MovieCard({ movie }) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.poster}
                source={{
                    uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
                }}
            />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{movie.title}</Text>
                <Text style={styles.releaseDate}>Release Date: {movie.release_date}</Text>
                <Text style={styles.voteAverage}>Vote Average: {movie.vote_average}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: 'hidden',
        width:windowWidth
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
        color: '#333', // Change text color to dark gray
    },
    releaseDate: {
        fontSize: 14,
        marginBottom: 5,
        color: '#333', // Change text color to dark gray
    },
    overview: {
        fontSize: 14,
        marginBottom: 5,
        color: '#333', // Change text color to dark gray
    },
    voteAverage: {
        fontSize: 14,
        color: '#333', // Change text color to dark gray
    },
});

export default MovieCard;
