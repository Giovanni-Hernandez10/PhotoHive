import {View, Text} from 'react-native';
import React from 'react';
import { Stack, useLocalSearchParams } from "expo-router";
import albums from '../../../../data/albums';
import pictures from '../../../../data/pictures';

// dynamic route to display the album the user selected from the albums page

const AlbumScreen = () => {
    const {id} = useLocalSearchParams(); // getting the title from the router when user clicks on an album

    const album = albums.find((a) => a.id.toString() == id);


    // Simulating album not found
    if (!album) {
        return (
            <Text>Album not found!</Text>
        );
    }

    // finding the pictures to display for this album
    const photos = pictures.filter((p) => p.albumId == album.id);

    

    // Name of the page will now be at the top set to the title of the album w/ options={}
    return (
        <View>
            <Stack.Screen options={{title: album.title}}/>
            <Text>This is the photos page for that album</Text>
        </View>
    );
}

export default AlbumScreen;