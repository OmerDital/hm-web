import {
  Dispatch, SetStateAction, useState
} from 'react';
import {
  FormControl, InputLabel, MenuItem, Select
} from '@mui/material';
import { sortBy } from 'lodash';
import { SortOption } from '../types/SortOption';
import { BaseDto } from '../types/BaseDto';

interface SortDataProps<T> {
  dataToDisplay: T[],
  setDataToDisplay: Dispatch<SetStateAction<T[]>>,
  defaultSortBy: string,
  sortOptions: SortOption[]
}

const SortData = <T extends BaseDto>({
  defaultSortBy, dataToDisplay, setDataToDisplay, sortOptions
}
: SortDataProps<T>) => {
  const [sortByCriteria, setSortByCriteria] = useState(defaultSortBy);

  const handleSortChange = (value: string) => {
    setSortByCriteria(value);
    setDataToDisplay(sortBy(dataToDisplay, [value]));
  };

  return (
    <FormControl fullWidth sx={{ maxWidth: 240 }}>
      <InputLabel id='sort-label'>מיין לפי</InputLabel>
      <Select
        value={sortByCriteria}
        labelId='sort-label'
        label='מיין לפי'
        onChange={e => handleSortChange(e.target.value)}
        data-testid='sortBy'
      >
        {sortOptions.map(({ label, value }) => (
          <MenuItem key={label} value={value}>{label}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SortData;