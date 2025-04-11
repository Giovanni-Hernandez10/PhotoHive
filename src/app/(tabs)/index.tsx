import {FlatList} from 'react-native';

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
