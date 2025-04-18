import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import {Item} from '../types.js'
import { Link } from 'expo-router';

type ImageItemProps = {
    item: Item
}


// Generic image component to be used in the album screen and photo screen to render images
function AlbumCoverItem({item} : ImageItemProps) {

    // check to see if it is a photo or album item
    const isAlbum = item.type === 'album';

    // change the else link to the photo screen when it is made
    const href = isAlbum ? `/album/${item.id}` : `/album/${item.id}`;

    return (
        <Link href={href} asChild>
            <Pressable style={styles.container}>
                <Image
                style={styles.image}
                source={{uri: item.image}}
                />
                {isAlbum && (
                    <>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.update}>Last updated: {item.lastUpdated}</Text>
                    </>
                )}
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


