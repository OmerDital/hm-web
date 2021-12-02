import { Grid, styled, Typography } from '@mui/material';

interface AlbumListColumnProps {
  text: string | number,
  label: string
}

const BorderedGrid = styled(Grid)(({ theme }) => ({
  borderLeft: `2px solid ${theme.palette.primary.dark}`
}));

const AlbumCardCell = ({ text, label }: AlbumListColumnProps) => (
  <>
    <BorderedGrid container item xs direction='column' alignItems='center' sx={{ pt: 0 }}>
      <Typography variant='h6' noWrap textOverflow='ellipsis' maxWidth='140px'>
        {text}
      </Typography>
      <Typography variant='body2'>{label}</Typography>
    </BorderedGrid>
  </>
);

export default AlbumCardCell;