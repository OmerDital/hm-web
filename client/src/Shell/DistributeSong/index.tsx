import { useState } from 'react';
import SideMenu from './SideMenu';
import AddAlbum from './AddAlbum';

const DistributeSong = () => {
  const [isLoadAlbumOpen, setIsLoadAlbumOpen] = useState(false);

  const handleOpen = () => setIsLoadAlbumOpen(true);
  const handleClose = () => setIsLoadAlbumOpen(false);

  return (
    <>
      <SideMenu handleOpen={handleOpen} />
      {isLoadAlbumOpen && (
        <AddAlbum handleClose={handleClose} />
      )}
    </>
  );
};

export default DistributeSong;