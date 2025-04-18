import {View, Text, FlatList} from 'react-native';
import React from 'react';
import { Stack, useLocalSearchParams } from "expo-router";
import albums from '../../../../data/albums';
import pictures from '../../../../data/pictures';
import PictureCoverItem from '@/components/PictureCoverItem';

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

    

    // Displays all of the pictures for a given album in three columns
    return (
        // NEED TO FIX THE STYLING OF THIS COMPONENT -> PICTURES DON'T LOOK GOOD
        <>
        <Stack.Screen options={{title: album.title}}/>
        <FlatList
            data={photos}
            renderItem={({item}) => <PictureCoverItem item={item}/>}
            numColumns={3}
        />
        </>
        // <View>
        //     <Stack.Screen options={{title: album.title}}/>
        //     <Text>This is the photos page for that album</Text>
        // </View>
    );
}

export default AlbumScreen;