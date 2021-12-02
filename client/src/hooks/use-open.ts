import { useState } from 'react';

type UseOpen = [boolean, () => void, () => void];

const useOpen = ():UseOpen => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return [open, handleClose, handleOpen];
};

export default useOpen;