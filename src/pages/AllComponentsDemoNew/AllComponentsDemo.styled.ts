import styled from 'styled-components';
import {Box, Heading} from '@chakra-ui/react';

export const ExampleSection = styled(Box)`
    margin-bottom: 1.5rem;
`;

export const SectionTitle = styled(Heading)`
    color: #3182ce;
    font-weight: 600;
    margin-bottom: 0.5rem;
    padding-bottom: 0.25rem;
    border-bottom: 2px solid #3182ce;
`;

export const DemoContainer = styled(Box)`
    padding: 1rem;
    background-color: #ffffff;
    border-radius: 0.375rem;
    margin-top: 0.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;
