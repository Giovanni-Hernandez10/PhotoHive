import {View, Text} from 'react-native';
import React from 'react';
import { Stack, useLocalSearchParams } from "expo-router";

// dynamic route to display the album the user selected from the albums page

const AlbumScreen = () => {
    const {title} = useLocalSearchParams(); // getting the title from the router when user clicks on an album

    return (
        <View>
            <Stack.Screen options={{title: title}}/> {/* Can update what the top of the screen will be for this route */}
            <Text>This is the album screen</Text>
        </View>
    );
}

export default AlbumScreen;