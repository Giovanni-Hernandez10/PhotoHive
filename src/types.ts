// interface BaseImageItem {
//     id: number;
//     image: string;
// }

// interface AlbumItem extends BaseImageItem {
//     title: string;
//     lastUpdated: string;
//     type: 'album';
// }

// interface PhotoItem extends BaseImageItem {
//     albumId: number;
//     uploadedAt: string;
//     type: 'photo';
// }

// export type itemProps = AlbumItem | PhotoItem;




// export type Album = {
//     id: number,
//     title: string,
//     lastUpdated: string,
//     image: string
// };

// export type Photos = {
//     albumId: number,
//     id: number,
//     image: string,
//     uploadedAt: string
// };


export type AlbumItem = {
    id: number;
    title: string;
    lastUpdated: string;
    image: string;
    type: 'album';
  };
  
export type PhotoItem = {
    albumId: number;
    id: number;
    image: string;
    uploadedAt: string;
    type: 'photo';
  };
  
  export type Item = AlbumItem | PhotoItem;
  
//   type AlbumCoverItemProps = {
//     item: Item;
//   };