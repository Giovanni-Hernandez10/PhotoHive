import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import {Album} from '../types.js'
import { Link } from 'expo-router';

type AlbumCoverItemProps = {
    album: Album
};

// Component for album covers which will include an image, title, and last updated data field
function AlbumCoverItem({album} : AlbumCoverItemProps) {
    return (
        <Link href={`/album/${album.title}`} asChild>
            <Pressable style={styles.container}>
                <Image
                style={styles.image}
                source={{uri: album.image}}
                />
                <Text style={styles.title}>{album.title}</Text>
                <Text style={styles.update}>Last updated: {album.lastUpdated}</Text>
            </Pressable>
        </Link>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        borderRadius: 20,
        maxWidth: '50%'
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


