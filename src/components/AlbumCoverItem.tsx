import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import image from '@assets/images/splash-icon.png';

// Component for album covers which will include an image, title, and last updated data field
function AlbumCoverItem() {
    return (
        <View>
            <Image
            source={image} // add OR option which will display "No images"
            />
            <Text>Peninsula Bridge 2025</Text>
            <Text>Last updated: 10/22/23</Text>
        </View>
    );
}

export default AlbumCoverItem;