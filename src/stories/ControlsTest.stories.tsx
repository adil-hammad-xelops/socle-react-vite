import type {Meta, StoryObj} from '@storybook/react';
import {Box, Button, Text} from '@chakra-ui/react';

const TestComponent = ({
                           text,
                           color,
                           size,
                           isVisible,
                           backgroundColor
                       }: {
    text: string;
    color: string;
    size: number;
    isVisible: boolean;
    backgroundColor: string;
}) => (
    <Box bg={backgroundColor} p={4} borderRadius="md">
        {isVisible && (
            <Text color={color} fontSize={`${size}px`}>
                {text}
            </Text>
        )}
    </Box>
);

const meta: Meta<typeof TestComponent> = {
    title: 'Testing/Controls Test',
    component: TestComponent,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        text: {
            control: {type: 'text'},
            description: 'The text to display',
        },
        color: {
            control: {type: 'color'},
            description: 'Text color',
        },
        size: {
            control: {type: 'range', min: 10, max: 72, step: 1},
            description: 'Font size in pixels',
        },
        isVisible: {
            control: {type: 'boolean'},
            description: 'Whether text is visible',
        },
        backgroundColor: {
            control: {type: 'color'},
            description: 'Background color',
        },
    },
};

export default meta;
type Story = StoryObj<typeof TestComponent>;

export const Interactive: Story = {
    args: {
        text: 'Test Controls',
        color: '#000000',
        size: 16,
        isVisible: true,
        backgroundColor: '#f7fafc',
    },
    render: (args) => <TestComponent {...args} />,
};

export const ButtonTest: Story = {
    render: (args) => (
        <div>
            <TestComponent {...args} />
            <Button mt={4} colorScheme="blue">
                Controls Test Button
            </Button>
        </div>
    ),
    args: {
        text: 'Button Test',
        color: '#3182ce',
        size: 20,
        isVisible: true,
        backgroundColor: '#ebf8ff',
    },
};

export const SourceCodeTest: Story = {
    render: () => (
        <Box bg="blue.50" p={6} borderRadius="lg">
            <Text fontSize="lg" fontWeight="bold" color="blue.800">
                Source Code Test
            </Text>
            <Text mt={2} color="blue.600">
                This story should show source code below it in the Docs tab.
            </Text>
            <Button mt={4} colorScheme="blue" size="sm">
                Test Button
            </Button>
        </Box>
    ),
    parameters: {
        controls: {disable: true},
        actions: {disable: true},
        docs: {
            description: {
                story: 'This story demonstrates source code display below the component preview.',
            },
            source: {
                code: `<Box bg="blue.50" p={6} borderRadius="lg">
  <Text fontSize="lg" fontWeight="bold" color="blue.800">
    Source Code Test
  </Text>
  <Text mt={2} color="blue.600">
    This story should show source code below it in the Docs tab.
  </Text>
  <Button mt={4} colorScheme="blue" size="sm">
    Test Button
  </Button>
</Box>`,
                language: 'tsx',
                type: 'code',
            },
        },
    },
};
