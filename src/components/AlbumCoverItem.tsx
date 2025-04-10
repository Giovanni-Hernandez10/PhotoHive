import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import image from '@assets/images/headshot.jpg';
import {Album} from '../types.js'

type AlbumCoverItemProps = {
    album: Album
};

// Component for album covers which will include an image, title, and last updated data field
function AlbumCoverItem({album} : AlbumCoverItemProps) {
    return (
        <View style={styles.container}>
            <Image
            style={styles.image}
            source={{uri: album.image}} // add OR option which will display "No images"
            />
            <Text style={styles.title}>{album.title}</Text>
            <Text style={styles.update}>Last updated: {album.lastUpdated}</Text>
        </View>
    );
}

// ADD STYLING IN CASE TITLE OVERFLOWS SO IT DOESN"T GO TO THE NEXT ALBUM AND JUST GOES UNDER
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        borderRadius: 20
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    update: {
        fontSize: 10
    },
    image: {
        width: '100%',
        aspectRatio: 1,
        borderRadius: 20
    }
    
});


export default AlbumCoverItem;


