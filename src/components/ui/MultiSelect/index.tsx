import React, {useState} from 'react';
import {
    Box,
    Button,
    Checkbox,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Tag,
    TagCloseButton,
    TagLabel,
    useDisclosure,
    Wrap,
    WrapItem
} from '@chakra-ui/react';
import {FaChevronDown} from 'react-icons/fa';

interface Option {
    value: string;
    label: string;
}

interface MultiSelectProps {
    options: Option[];
    value?: string[];
    defaultValue?: string[];
    onChange?: (values: string[]) => void;
    placeholder?: string;
    isDisabled?: boolean;
    size?: 'sm' | 'md' | 'lg';
}

export const MultiSelect: React.FC<MultiSelectProps> = ({
                                                            options = [],
                                                            value,
                                                            defaultValue = [],
                                                            onChange,
                                                            placeholder = 'Select options...',
                                                            isDisabled = false,
                                                            size = 'md'
                                                        }) => {
    const [internalValues, setInternalValues] = useState<string[]>(defaultValue);
    const {isOpen, onOpen, onClose} = useDisclosure();

    // Use controlled value if provided, otherwise use internal state
    const currentValues = value !== undefined ? value : internalValues;

    const handleSelectionChange = (optionValue: string) => {
        const newValues = currentValues.includes(optionValue)
            ? currentValues.filter(v => v !== optionValue)
            : [...currentValues, optionValue];

        // Update internal state only if not controlled
        if (value === undefined) {
            setInternalValues(newValues);
        }

        // Always call onChange if provided
        onChange?.(newValues);
    };

    const removeValue = (valueToRemove: string) => {
        const newValues = currentValues.filter(v => v !== valueToRemove);

        // Update internal state only if not controlled
        if (value === undefined) {
            setInternalValues(newValues);
        }

        // Always call onChange if provided
        onChange?.(newValues);
    };

    const getSelectedLabels = () => {
        return currentValues.map(value =>
            options.find(option => option.value === value)?.label || value
        );
    };

    return (
        <Box>
            <Menu isOpen={isOpen} onClose={onClose}>
                <MenuButton
                    as={Button}
                    rightIcon={<FaChevronDown/>}
                    variant="outline"
                    size={size}
                    isDisabled={isDisabled}
                    onClick={isOpen ? onClose : onOpen}
                    width="100%"
                    textAlign="left"
                    fontWeight="normal"
                    aria-label={currentValues.length > 0 ? `${currentValues.length} options selected` : placeholder}
                    aria-expanded={isOpen}
                    aria-haspopup="menu"
                >
                    {currentValues.length > 0 ? `${currentValues.length} selected` : placeholder}
                </MenuButton>
                <MenuList maxHeight="200px" overflowY="auto" role="menu">
                    {options.map((option) => (
                        <MenuItem
                            key={option.value}
                            closeOnSelect={false}
                            role="menuitemcheckbox"
                            aria-checked={currentValues.includes(option.value)}
                        >
                            <Checkbox
                                isChecked={currentValues.includes(option.value)}
                                onChange={() => handleSelectionChange(option.value)}
                                width="100%"
                                aria-label={`Select ${option.label}`}
                            >
                                {option.label}
                            </Checkbox>
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>

            {currentValues.length > 0 && (
                <Wrap spacing={2} mt={2} role="group" aria-label="Selected options">
                    {getSelectedLabels().map((label, index) => {
                        const value = currentValues[index];
                        return (
                            <WrapItem key={value}>
                                <Tag size={size} colorScheme="blue" variant="solid">
                                    <TagLabel>{label}</TagLabel>
                                    <TagCloseButton
                                        onClick={() => removeValue(value)}
                                        aria-label={`Remove ${label}`}
                                    />
                                </Tag>
                            </WrapItem>
                        );
                    })}
                </Wrap>
            )}
        </Box>
    );
};


