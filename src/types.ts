
// Types for Album Components & Picture Components

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