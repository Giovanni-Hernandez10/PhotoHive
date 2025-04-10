import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import image from '@assets/images/headshot.jpg';

// Component for album covers which will include an image, title, and last updated data field
function AlbumCoverItem() {
    return (
        <View style={styles.container}>
            <Image
            style={styles.image}
            source={image} // add OR option which will display "No images"
            />
            <Text style={styles.title}>Professional Headshots</Text>
            <Text style={styles.update}>Last updated: 10/22/23</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
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
        maxWidth: '50%',
        maxHeight: '30%',
        borderRadius: 20
    }
    
});


export default AlbumCoverItem;


