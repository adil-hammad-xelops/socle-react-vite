import React from 'react';
import { TextField, Button, Box, Typography, IconButton, InputAdornment } from '@mui/material';
import { Search, Clear, CloudUpload, Delete, CalendarToday } from '@mui/icons-material';

// ============ SearchField Component ============
export interface SearchFieldProps {
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  placeholder?: string;
  fullWidth?: boolean;
  size?: 'small' | 'medium';
  disabled?: boolean;
}

export const SearchField: React.FC<SearchFieldProps> = ({
  value = '',
  onChange,
  onSearch,
  placeholder = 'Search...',
  fullWidth = true,
  size = 'medium',
  disabled = false,
}) => {
  const [searchValue, setSearchValue] = React.useState(value);

  React.useEffect(() => {
    setSearchValue(value);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearchValue(newValue);
    onChange?.(newValue);
  };

  const handleSearch = () => {
    onSearch?.(searchValue);
  };

  const handleClear = () => {
    setSearchValue('');
    onChange?.('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <TextField
      value={searchValue}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
      placeholder={placeholder}
      fullWidth={fullWidth}
      size={size}
      disabled={disabled}
      variant="outlined"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
        endAdornment: searchValue && (
          <InputAdornment position="end">
            <IconButton size="small" onClick={handleClear} aria-label="clear search">
              <Clear />
            </IconButton>
          </InputAdornment>
        ),
      }}
      inputProps={{
        'aria-label': 'search field',
        role: 'searchbox',
      }}
    />
  );
};

// ============ DatePicker Component ============
export interface DatePickerProps {
  label?: string;
  value?: string;
  onChange?: (date: string) => void;
  min?: string;
  max?: string;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  required?: boolean;
  fullWidth?: boolean;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  label,
  value = '',
  onChange,
  min,
  max,
  disabled = false,
  error = false,
  helperText,
  required = false,
  fullWidth = true,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <TextField
      label={label}
      type="date"
      value={value}
      onChange={handleChange}
      disabled={disabled}
      error={error}
      helperText={helperText}
      required={required}
      fullWidth={fullWidth}
      variant="outlined"
      InputLabelProps={{
        shrink: true,
      }}
      inputProps={{
        min,
        max,
        'aria-label': label || 'date picker',
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <CalendarToday />
          </InputAdornment>
        ),
      }}
    />
  );
};

// ============ FileUpload Component ============
export interface FileUploadProps {
  label?: string;
  accept?: string;
  multiple?: boolean;
  maxSize?: number; // in MB
  onChange?: (files: File[]) => void;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  label = 'Upload File',
  accept,
  multiple = false,
  maxSize = 10,
  onChange,
  disabled = false,
  error = false,
  helperText,
}) => {
  const [files, setFiles] = React.useState<File[]>([]);
  const [errorMessage, setErrorMessage] = React.useState('');
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    setErrorMessage('');

    // Validate file size
    const oversizedFiles = selectedFiles.filter(
      (file) => file.size > maxSize * 1024 * 1024
    );

    if (oversizedFiles.length > 0) {
      setErrorMessage(`File size must be less than ${maxSize}MB`);
      return;
    }

    setFiles(selectedFiles);
    onChange?.(selectedFiles);
  };

  const handleRemoveFile = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
    onChange?.(updatedFiles);
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <Box>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={handleFileChange}
        style={{ display: 'none' }}
        disabled={disabled}
        aria-label="file upload input"
      />

      <Button
        variant="outlined"
        startIcon={<CloudUpload />}
        onClick={handleClick}
        disabled={disabled}
        fullWidth
        sx={{ mb: 1 }}
      >
        {label}
      </Button>

      {files.length > 0 && (
        <Box sx={{ mt: 2 }}>
          {files.map((file, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                p: 1,
                mb: 1,
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 1,
              }}
            >
              <Typography variant="body2" noWrap sx={{ flex: 1 }}>
                {file.name} ({(file.size / 1024).toFixed(2)} KB)
              </Typography>
              <IconButton
                size="small"
                onClick={() => handleRemoveFile(index)}
                aria-label="remove file"
              >
                <Delete fontSize="small" />
              </IconButton>
            </Box>
          ))}
        </Box>
      )}

      {(error || errorMessage) && (
        <Typography color="error" variant="caption" sx={{ mt: 1, display: 'block' }}>
          {errorMessage || helperText}
        </Typography>
      )}
    </Box>
  );
};

/**
 * Form components examples:
 *
 * @example
 * ```tsx
 * <SearchField
 *   value={search}
 *   onChange={setSearch}
 *   onSearch={handleSearch}
 *   placeholder="Search users..."
 * />
 *
 * <DatePicker
 *   label="Birth Date"
 *   value={date}
 *   onChange={setDate}
 *   max={new Date().toISOString().split('T')[0]}
 * />
 *
 * <FileUpload
 *   label="Upload Document"
 *   accept=".pdf,.doc,.docx"
 *   maxSize={5}
 *   onChange={handleFilesChange}
 * />
 * ```
 */

