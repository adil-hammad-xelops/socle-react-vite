import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';
import {Input} from '../components/ui';
import {InputGroup, InputLeftElement, InputRightElement, Stack} from '@chakra-ui/react';
import {FaEye, FaSearch, FaUser} from 'react-icons/fa';

const meta: Meta<typeof Input> = {
    title: 'UI/Input',
    component: Input,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: 'A versatile input component built with Chakra UI for collecting user data.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg'],
        },
        variant: {
            control: 'select',
            options: ['outline', 'filled', 'flushed', 'unstyled'],
        },
        placeholder: {
            control: 'text',
        },
        isDisabled: {
            control: 'boolean',
        },
        isReadOnly: {
            control: 'boolean',
        },
        isInvalid: {
            control: 'boolean',
        },
        focusBorderColor: {
            control: 'text',
        },
        errorBorderColor: {
            control: 'text',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: 'Enter text here...',
    },
};

export const Sizes: Story = {
    render: () => (
        <Stack spacing={4} width="280px">
            <Input placeholder="Extra small" size="xs"/>
            <Input placeholder="Small" size="sm"/>
            <Input placeholder="Medium" size="md"/>
            <Input placeholder="Large" size="lg"/>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
        actions: {disable: true},
        layout: 'padded',
        docs: {
            source: {
                code: `<Stack spacing={4} width="300px">
  <Input placeholder="Extra small" size="xs"/>
  <Input placeholder="Small" size="sm"/>
  <Input placeholder="Medium" size="md"/>
  <Input placeholder="Large" size="lg"/>
</Stack>`
            },
            story: {
                inline: true,
                height: '200px',
            },
        }
    },
};

export const Variants: Story = {
    render: () => (
        <Stack spacing={4} width="280px">
            <Input placeholder="Outline variant" variant="outline"/>
            <Input placeholder="Filled variant" variant="filled"/>
            <Input placeholder="Flushed variant" variant="flushed"/>
            <Input placeholder="Unstyled variant" variant="unstyled"/>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
        actions: {disable: true},
        layout: 'padded',
        docs: {
            source: {
                code: `<Stack spacing={4} width="300px">
  <Input placeholder="Outline variant" variant="outline"/>
  <Input placeholder="Filled variant" variant="filled"/>
  <Input placeholder="Flushed variant" variant="flushed"/>
  <Input placeholder="Unstyled variant" variant="unstyled"/>
</Stack>`
            },
            story: {
                inline: true,
                height: '200px',
            },
        }
    },
};

export const WithIcons: Story = {
    render: () => (
        <Stack spacing={4} width="300px">
            <InputGroup>
                <InputLeftElement>
                    <FaSearch color="gray"/>
                </InputLeftElement>
                <Input placeholder="Search..."/>
            </InputGroup>

            <InputGroup>
                <InputLeftElement>
                    <FaUser color="gray"/>
                </InputLeftElement>
                <Input placeholder="Username"/>
            </InputGroup>

            <InputGroup>
                <Input placeholder="Password" type="password"/>
                <InputRightElement>
                    <FaEye color="gray"/>
                </InputRightElement>
            </InputGroup>
        </Stack>
    ),
};

export const States: Story = {
    render: () => (
        <Stack spacing={4} width="300px">
            <Input placeholder="Normal input"/>
            <Input placeholder="Focused input" focusBorderColor="blue.400"/>
            <Input placeholder="Invalid input" isInvalid errorBorderColor="red.300"/>
            <Input placeholder="Disabled input" isDisabled/>
            <Input placeholder="Read only input" isReadOnly value="Cannot be edited"/>
        </Stack>
    ),
};

export const Types: Story = {
    render: () => (
        <Stack spacing={4} width="300px">
            <Input placeholder="Text input" type="text"/>
            <Input placeholder="Email input" type="email"/>
            <Input placeholder="Password input" type="password"/>
            <Input placeholder="Number input" type="number"/>
            <Input placeholder="Date input" type="date"/>
            <Input placeholder="URL input" type="url"/>
        </Stack>
    ),
};

export const Interactive: Story = {
    render: () => {
        const [inputProps, setInputProps] = React.useState({
            placeholder: 'Type something...',
            size: 'md' as const,
            variant: 'outline' as const,
            isDisabled: false,
            isReadOnly: false,
            isInvalid: false,
            type: 'text' as const,
        });

        // Generate clean code based on current props
        const generateCode = () => {
            const props = [];

            // Add non-default props
            if (inputProps.placeholder && inputProps.placeholder !== 'Type something...') {
                props.push(`placeholder="${inputProps.placeholder}"`);
            }
            if (inputProps.size !== 'md') props.push(`size="${inputProps.size}"`);
            if (inputProps.variant !== 'outline') props.push(`variant="${inputProps.variant}"`);
            if (inputProps.type !== 'text') props.push(`type="${inputProps.type}"`);
            if (inputProps.isDisabled) props.push('isDisabled');
            if (inputProps.isReadOnly) props.push('isReadOnly');
            if (inputProps.isInvalid) props.push('isInvalid');

            const propsString = props.length > 0 ? ` ${props.join(' ')}` : '';

            return `<Input${propsString} />`;
        };

        const updateProp = (key: string, value: any) => {
            setInputProps(prev => ({...prev, [key]: value}));
        };

        return (
            <div style={{
                display: 'grid',
                gridTemplateColumns: '350px 1fr 400px',
                gap: '2rem',
                maxWidth: '1400px',
                margin: '0 auto',
                padding: '2rem',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                backgroundColor: '#fafafa'
            }}>
                {/* Controls Column */}
                <div style={{
                    padding: '1.5rem',
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    border: '1px solid #e2e8f0',
                    height: 'fit-content'
                }}>
                    <h4 style={{
                        margin: '0 0 1rem 0',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        color: '#2d3748',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        🎛️ Live Controls
                    </h4>

                    <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
                        <div>
                            <label style={{
                                display: 'block',
                                fontSize: '13px',
                                fontWeight: 'bold',
                                marginBottom: '0.5rem',
                                color: '#4a5568'
                            }}>
                                Placeholder:
                            </label>
                            <input
                                type="text"
                                value={inputProps.placeholder}
                                onChange={(e) => updateProp('placeholder', e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '0.5rem',
                                    border: '1px solid #e2e8f0',
                                    borderRadius: '4px',
                                    fontSize: '14px'
                                }}
                                placeholder="Placeholder text"
                            />
                        </div>

                        <div>
                            <label style={{
                                display: 'block',
                                fontSize: '13px',
                                fontWeight: 'bold',
                                marginBottom: '0.5rem',
                                color: '#4a5568'
                            }}>
                                Type:
                            </label>
                            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem'}}>
                                {(['text', 'email', 'password', 'number'] as const).map(type => (
                                    <button
                                        key={type}
                                        onClick={() => updateProp('type', type)}
                                        style={{
                                            padding: '0.5rem',
                                            fontSize: '12px',
                                            fontWeight: 'bold',
                                            border: inputProps.type === type ? '2px solid #3182ce' : '1px solid #e2e8f0',
                                            backgroundColor: inputProps.type === type ? '#ebf8ff' : 'white',
                                            color: inputProps.type === type ? '#3182ce' : '#4a5568',
                                            borderRadius: '6px',
                                            cursor: 'pointer',
                                            transition: 'all 0.2s',
                                            textTransform: 'capitalize'
                                        }}
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label style={{
                                display: 'block',
                                fontSize: '13px',
                                fontWeight: 'bold',
                                marginBottom: '0.5rem',
                                color: '#4a5568'
                            }}>
                                Size:
                            </label>
                            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem'}}>
                                {(['xs', 'sm', 'md', 'lg'] as const).map(size => (
                                    <button
                                        key={size}
                                        onClick={() => updateProp('size', size)}
                                        style={{
                                            padding: '0.5rem',
                                            fontSize: '12px',
                                            fontWeight: 'bold',
                                            border: inputProps.size === size ? '2px solid #3182ce' : '1px solid #e2e8f0',
                                            backgroundColor: inputProps.size === size ? '#ebf8ff' : 'white',
                                            color: inputProps.size === size ? '#3182ce' : '#4a5568',
                                            borderRadius: '6px',
                                            cursor: 'pointer',
                                            transition: 'all 0.2s'
                                        }}
                                    >
                                        {size.toUpperCase()}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label style={{
                                display: 'block',
                                fontSize: '13px',
                                fontWeight: 'bold',
                                marginBottom: '0.5rem',
                                color: '#4a5568'
                            }}>
                                Variant:
                            </label>
                            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem'}}>
                                {(['outline', 'filled', 'flushed', 'unstyled'] as const).map(variant => (
                                    <button
                                        key={variant}
                                        onClick={() => updateProp('variant', variant)}
                                        style={{
                                            padding: '0.5rem',
                                            fontSize: '11px',
                                            fontWeight: 'bold',
                                            border: inputProps.variant === variant ? '2px solid #3182ce' : '1px solid #e2e8f0',
                                            backgroundColor: inputProps.variant === variant ? '#ebf8ff' : 'white',
                                            color: inputProps.variant === variant ? '#3182ce' : '#4a5568',
                                            borderRadius: '6px',
                                            cursor: 'pointer',
                                            transition: 'all 0.2s',
                                            textTransform: 'capitalize'
                                        }}
                                    >
                                        {variant}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label style={{
                                display: 'block',
                                fontSize: '13px',
                                fontWeight: 'bold',
                                marginBottom: '0.5rem',
                                color: '#4a5568'
                            }}>
                                States:
                            </label>
                            <div style={{display: 'flex', flexDirection: 'column', gap: '0.75rem'}}>
                                <label style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    fontSize: '13px',
                                    cursor: 'pointer'
                                }}>
                                    <input
                                        type="checkbox"
                                        checked={inputProps.isDisabled}
                                        onChange={(e) => updateProp('isDisabled', e.target.checked)}
                                        style={{width: '16px', height: '16px', accentColor: '#3182ce'}}
                                    />
                                    <span>Disabled</span>
                                </label>
                                <label style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    fontSize: '13px',
                                    cursor: 'pointer'
                                }}>
                                    <input
                                        type="checkbox"
                                        checked={inputProps.isReadOnly}
                                        onChange={(e) => updateProp('isReadOnly', e.target.checked)}
                                        style={{width: '16px', height: '16px', accentColor: '#3182ce'}}
                                    />
                                    <span>Read Only</span>
                                </label>
                                <label style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    fontSize: '13px',
                                    cursor: 'pointer'
                                }}>
                                    <input
                                        type="checkbox"
                                        checked={inputProps.isInvalid}
                                        onChange={(e) => updateProp('isInvalid', e.target.checked)}
                                        style={{width: '16px', height: '16px', accentColor: '#3182ce'}}
                                    />
                                    <span>Invalid State</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Preview Column */}
                <div style={{
                    padding: '2rem',
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    border: '1px solid #e2e8f0',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '300px',
                    position: 'relative'
                }}>
                    <h4 style={{
                        position: 'absolute',
                        top: '1rem',
                        left: '1.5rem',
                        margin: '0',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        color: '#2d3748',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        👀 Live Preview
                    </h4>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: '100%'
                    }}>
                        <Input {...inputProps} style={{width: '280px'}}/>
                    </div>
                    <div style={{
                        position: 'absolute',
                        bottom: '1rem',
                        left: '1.5rem',
                        right: '1.5rem',
                        fontSize: '12px',
                        color: '#718096',
                        textAlign: 'center'
                    }}>
                        Updates instantly as you change controls
                    </div>
                </div>

                {/* Generated Code Column */}
                <div style={{
                    padding: '1.5rem',
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    border: '1px solid #e2e8f0',
                    height: 'fit-content'
                }}>
                    <h4 style={{
                        margin: '0 0 1rem 0',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        color: '#2d3748',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        📋 Generated Code
                    </h4>
                    <div style={{
                        backgroundColor: '#f7fafc',
                        padding: '1rem',
                        borderRadius: '6px',
                        marginBottom: '1rem',
                        border: '1px solid #e2e8f0'
                    }}>
                        <pre style={{
                            margin: 0,
                            padding: '1rem',
                            backgroundColor: '#2d3748',
                            color: '#e2e8f0',
                            borderRadius: '6px',
                            fontSize: '14px',
                            fontFamily: 'Monaco, Menlo, Consolas, monospace',
                            overflow: 'auto',
                            whiteSpace: 'pre-wrap',
                            wordWrap: 'break-word',
                            lineHeight: '1.5'
                        }}>
                            {generateCode()}
                        </pre>
                    </div>
                    <button
                        onClick={() => {
                            navigator.clipboard.writeText(generateCode());
                            // Show feedback
                            const btn = event?.target as HTMLButtonElement;
                            const originalText = btn.textContent;
                            btn.textContent = '✅ Copied!';
                            btn.style.backgroundColor = '#48bb78';
                            setTimeout(() => {
                                btn.textContent = originalText;
                                btn.style.backgroundColor = '#3182ce';
                            }, 1500);
                        }}
                        style={{
                            padding: '0.75rem 1rem',
                            backgroundColor: '#3182ce',
                            color: 'white',
                            border: 'none',
                            borderRadius: '6px',
                            fontSize: '14px',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            width: '100%',
                            transition: 'background-color 0.2s'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2c5aa0'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#3182ce'}
                    >
                        📋 Copy Code
                    </button>
                    <div style={{
                        marginTop: '1rem',
                        fontSize: '12px',
                        color: '#718096',
                        textAlign: 'center'
                    }}>
                        Code updates in real-time
                    </div>
                </div>
            </div>
        );
    },
    parameters: {
        layout: 'fullscreen',
        docs: {
            source: {
                state: 'hidden',
            },
        },
    },
};
