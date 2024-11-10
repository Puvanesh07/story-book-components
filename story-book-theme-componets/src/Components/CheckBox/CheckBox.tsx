import { Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import React, { useState } from 'react';

interface CheckboxListProps {
  items: string[];
  onChange: (selectedItems: string[]) => void;
}

const CheckboxList: React.FC<CheckboxListProps> = ({ items, onChange }) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleSelectAllChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      setSelectedItems(items);
      onChange(items);
    } else {
      setSelectedItems([]);
      onChange([]);
    }
  };

  const handleCheckboxChange = (item: string) => {
    const updatedSelectedItems = selectedItems.includes(item)
      ? selectedItems.filter((selectedItem) => selectedItem !== item)
      : [...selectedItems, item];

    setSelectedItems(updatedSelectedItems);
    onChange(updatedSelectedItems);
  };

  return (
    <div>
      {/* Select All Checkbox */}
      <FormControlLabel
        control={
          <Checkbox
            checked={selectedItems.length === items.length}
            onChange={handleSelectAllChange}
          />
        }
        label='Select All'
      />
      {/* Individual Checkboxes */}
      <FormGroup>
        {items.map((item) => (
          <FormControlLabel
            key={item}
            control={
              <Checkbox
                checked={selectedItems.includes(item)}
                onChange={() => handleCheckboxChange(item)}
              />
            }
            label={item}
          />
        ))}
      </FormGroup>
    </div>
  );
};

export default CheckboxList;
