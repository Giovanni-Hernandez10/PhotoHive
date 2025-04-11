import {FlatList} from 'react-native';

import AlbumCoverItem from '@/components/AlbumCoverItem';

import albums from '../../../../data/albums'
import { Stack } from 'expo-router';

// index file is the default that the user gets routed to for that given tab

export default function AlbumPage() {
  return (
    <>
      <Stack.Screen options={{title: 'Albums'}}/>
      <FlatList
        data={albums}
        renderItem={({item}) => <AlbumCoverItem album={item}/>}
        numColumns={2}
      />
    </>
  );
}
