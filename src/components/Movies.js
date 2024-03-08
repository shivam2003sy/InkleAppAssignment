import React from "react";
import Moviecard from "./Moviecard";
import { FlatList, View  , ScrollView} from "react-native";

const Movies = ({ movies }) => {
   
    return (
        <FlatList
            data={movies}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
                return (
                 <View style={{ margin: 5, borderRadius: 10, overflow: 'hidden' }}>
                    <Moviecard movie={item} />
                    </View>

                );
            }}
            horizontal
        />
      

    );
}

export default Movies;