import { StyleSheet, Text, View, FlatList} from 'react-native';

import EditScreenInfo from '@components/EditScreenInfo';

import AlbumCoverItem from '@/components/AlbumCoverItem';

import albums from '../../../data/albums'


// NEED TO ACCOUNT FOR UNEVEN NUMBER OF ALBUMS!!!!!
export default function AlbumPage() {
  return (
    <FlatList
      data={albums}
      renderItem={({item}) => <AlbumCoverItem album={item}/>}
      numColumns={2}
    />
  );
}
