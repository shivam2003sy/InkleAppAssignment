import React , {useState , useEffect} from 'react';
import { View, Text , StyleSheet , ActivityIndicator  , ScrollView} from 'react-native';

import { getPopularTvShows, getTopRatedTvShows, getOnTheAirTvShows, getAiringTodayTvShows} from '../services/api';
import Movies from '../components/Movies';

const SeriesScreen = () => {
  const [trendingSeries, setTrendingSeries] = useState([]);
  const [onAirSeries, setOnAirSeries] = useState([]);
  const [topRatedSeries, setTopRatedSeries] = useState([]);
  const [popularSeries, setPopularSeries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSeriesData = async () => {
      const trendingSeriesData = await getAiringTodayTvShows();
      const onAirSeriesData = await getOnTheAirTvShows();
      const topRatedSeriesData = await getTopRatedTvShows();
      const popularSeriesData = await getPopularTvShows();


      setTrendingSeries(trendingSeriesData);
      setOnAirSeries(onAirSeriesData);
      setTopRatedSeries(topRatedSeriesData);
      setPopularSeries(popularSeriesData);
      setLoading(false);
    };
    fetchSeriesData();
  }
  , []);

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
        <Text style={styles.header}>Trending Series</Text>
        <Movies movies={trendingSeries} />
      </View>
      <View style={styles.section}>
        <Text style={styles.header}>On Air Series</Text>
        <Movies movies={onAirSeries} />
      </View>
      <View style={styles.section}>
        <Text style={styles.header}>Top Rated Series</Text>
        <Movies movies={topRatedSeries} />
      </View>
      <View style={styles.section}>
        <Text style={styles.header}>Popular Series</Text>
        <Movies movies={popularSeries} />
      </View>
    </ScrollView>
  );
}

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
export default SeriesScreen;

