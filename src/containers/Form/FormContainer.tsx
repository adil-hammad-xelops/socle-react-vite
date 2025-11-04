import { useState } from 'react';
import { FormView } from './components';

/**
 * Form Container - Handles form state management
 */
export function FormContainer() {
  // All form state management
  const [inputValue, setInputValue] = useState('');
  const [textAreaValue, setTextAreaValue] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');
  const [switchChecked, setSwitchChecked] = useState(false);
  const [sliderValue, setSliderValue] = useState(50);
  const [dateValue, setDateValue] = useState('');
  const [searchValue, setSearchValue] = useState('');

  // Handlers
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(e.target.value);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
  };

  const handleCheckboxChange = (_e: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
    setCheckboxChecked(checked);
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue(e.target.value);
  };

  const handleSwitchChange = (_e: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
    setSwitchChecked(checked);
  };

  const handleSliderChange = (_e: Event, value: number | number[]) => {
    setSliderValue(value as number);
  };

  return (
    <FormView
      inputValue={inputValue}
      onInputChange={handleInputChange}
      textAreaValue={textAreaValue}
      onTextAreaChange={handleTextAreaChange}
      selectValue={selectValue}
      onSelectChange={handleSelectChange}
      checkboxChecked={checkboxChecked}
      onCheckboxChange={handleCheckboxChange}
      radioValue={radioValue}
      onRadioChange={handleRadioChange}
      switchChecked={switchChecked}
      onSwitchChange={handleSwitchChange}
      sliderValue={sliderValue}
      onSliderChange={handleSliderChange}
      dateValue={dateValue}
      onDateChange={setDateValue}
      searchValue={searchValue}
      onSearchChange={setSearchValue}
    />
  );
}

export default FormContainer;

