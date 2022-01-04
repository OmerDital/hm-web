import SideMenu from './SideMenu';
import AddAlbum from './AddAlbum';
import useOpen from '../../hooks/use-open';
import Layers from './Layers';

const DistributeSong = () => {
  const [isLoadAlbumOpen, handleAlbumClose, handleAlbumOpen] = useOpen();
  const [isLayersOpen, handleLayersClose, handleLayersOpen] = useOpen();

  return (
    <>
      <SideMenu
        handleAlbumOpen={handleAlbumOpen}
        handleLayersOpen={handleLayersOpen}
      />
      {isLoadAlbumOpen && <AddAlbum handleClose={handleAlbumClose} />}
      {isLayersOpen && (
        <Layers open={isLayersOpen} handleClose={handleLayersClose} />
      )}
    </>
  );
};

export default DistributeSong;