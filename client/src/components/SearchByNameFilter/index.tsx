import { Dispatch, SetStateAction, useEffect } from 'react';
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { includes } from 'lodash';
import { IHaveName } from '../../types/IHaveName';

interface SearchFilterProps<T extends IHaveName> {
  data: T[];
  setDataToDisplay: Dispatch<SetStateAction<T[]>>;
}

export const getFilteredData = <T extends IHaveName>(
  value: string,
  data: T[]
) => (value
    ? data.filter(x => includes(x.name.toLowerCase(), value.toLowerCase()))
    : data);

const SearchByNameFilter = <T extends IHaveName>({
  data,
  setDataToDisplay
}: SearchFilterProps<T>) => {
  const handleSearchChange = (value: string) => {
    setDataToDisplay(getFilteredData(value, data));
  };

  useEffect(() => {
    handleSearchChange('');
  }, [data]);

  return (
    <TextField
      label='חפש לפי שם'
      variant='outlined'
      onChange={e => handleSearchChange(e.target.value)}
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>
            <SearchIcon />
          </InputAdornment>
        )
      }}
    />
  );
};

export default SearchByNameFilter;