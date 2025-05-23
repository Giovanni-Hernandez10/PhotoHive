import {FlatList} from 'react-native';

import PictureCoverItem from '@/components/PictureCoverItem';

import albums from '../../../../data/albums'
import { Stack } from 'expo-router';

// index file is the default that the user gets routed to for that given tab

export default function AlbumPage() {
  return (
    <>
      <Stack.Screen options={{title: 'Albums'}}/> 
      <FlatList
        data={albums}
        renderItem={({item}) => <PictureCoverItem item={item}/>}
        numColumns={2}
      />
    </>
  );
}
