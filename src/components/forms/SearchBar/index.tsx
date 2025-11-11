import {useState} from 'react';
import {IconButton, InputAdornment, TextField} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import {SearchBarContainer} from './SearchBar.styled';

interface SearchBarProps {
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
    onSearch?: (value: string) => void;
    fullWidth?: boolean;
    size?: 'small' | 'medium';
}

const SearchBar = ({
                       placeholder = 'Search...',
                       value: controlledValue,
                       onChange,
                       onSearch,
                       fullWidth = true,
                       size = 'medium',
                   }: SearchBarProps) => {
    const [internalValue, setInternalValue] = useState('');
    const value = controlledValue !== undefined ? controlledValue : internalValue;

    const handleChange = (newValue: string) => {
        if (controlledValue === undefined) {
            setInternalValue(newValue);
        }
        onChange?.(newValue);
    };

    const handleClear = () => {
        handleChange('');
        onSearch?.('');
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            onSearch?.(value);
        }
    };

    return (
        <SearchBarContainer>
            <TextField
                placeholder={placeholder}
                value={value}
                onChange={(e) => handleChange(e.target.value)}
                onKeyPress={handleKeyPress}
                fullWidth={fullWidth}
                size={size}
                variant="outlined"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon/>
                        </InputAdornment>
                    ),
                    endAdornment: value && (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="clear search"
                                onClick={handleClear}
                                edge="end"
                                size="small"
                            >
                                <CloseIcon/>
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        </SearchBarContainer>
    );
};

export default SearchBar;

