/**
 * Typography Usage Examples
 *
 * This file demonstrates how to use the typography system in various scenarios
 */

import styled from 'styled-components';
import { Typography } from '@mui/material';
import { fontFamilies, getFontFamily } from 'theme/typography.ts';

// ============================================================================
// Example 1: Using MUI Typography Component (Recommended)
// ============================================================================

export const TypographyExamples = () => (
  <>
    {/* Headings - automatically use Poppins */}
    <Typography variant="h1">Main Page Title</Typography>
    <Typography variant="h2">Section Heading</Typography>
    <Typography variant="h3">Subsection Title</Typography>

    {/* Body text - automatically use Inter */}
    <Typography variant="body1">
      This is regular body text using Inter font for optimal readability.
    </Typography>
    <Typography variant="body2">
      This is smaller body text, also using Inter.
    </Typography>

    {/* Other variants */}
    <Typography variant="subtitle1">Subtitle text</Typography>
    <Typography variant="caption">Caption or helper text</Typography>
    <Typography variant="overline">Overline Label</Typography>
  </>
);

// ============================================================================
// Example 2: Using Styled Components with Font Families
// ============================================================================

// Body text component (uses Inter)
export const BodyText = styled.p`
  font-family: ${fontFamilies.primary};
  font-size: 1rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.palette.text.primary};
`;

// Heading component (uses Poppins)
export const Heading = styled.h2`
  font-family: ${fontFamilies.display};
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.2;
  color: ${({ theme }) => theme.palette.text.primary};
`;

// Code block component (uses monospace)
export const CodeBlock = styled.pre`
  font-family: ${fontFamilies.monospace};
  font-size: 0.875rem;
  background: ${({ theme }) => theme.palette.grey[100]};
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
`;

// ============================================================================
// Example 3: Using Theme Typography
// ============================================================================

export const ThemedText = styled.div`
  /* Access font family from theme */
  font-family: ${({ theme }) => theme.typography.fontFamily};
  
  h1, h2, h3, h4, h5, h6 {
    /* Use direct font stack for display font */
    font-family: ${fontFamilies.display};
  }
  
  code, pre {
    /* Use direct font stack for monospace */
    font-family: ${fontFamilies.monospace};
  }
`;

// ============================================================================
// Example 4: Custom Font Combinations
// ============================================================================

// Card with mixed typography
export const Card = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const CardTitle = styled.h3`
  font-family: ${fontFamilies.display}; // Poppins
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const CardSubtitle = styled.p`
  font-family: ${fontFamilies.primary}; // Inter
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.text.secondary};
  margin-bottom: 1rem;
`;

export const CardContent = styled.p`
  font-family: ${fontFamilies.primary}; // Inter
  font-size: 1rem;
  line-height: 1.5;
`;

// ============================================================================
// Example 5: Responsive Typography
// ============================================================================

export const ResponsiveHeading = styled.h1`
  font-family: ${fontFamilies.display};
  font-weight: 700;
  
  /* Mobile */
  font-size: 2rem;
  
  /* Tablet */
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
  
  /* Desktop */
  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`;

// ============================================================================
// Example 6: Button Typography
// ============================================================================

export const Button = styled.button`
  font-family: ${fontFamilies.primary}; // Inter
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.02857em;
  text-transform: none;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-1px);
  }
`;

// ============================================================================
// Example 7: Using Helper Functions
// ============================================================================

// Get specific font family
export const CustomComponent = styled.div`
  font-family: ${getFontFamily('primary')};
`;

// Create custom font stack (if you add a new font)
// const customStack = createFontStack('Roboto', 'Open Sans');
// export const CustomText = styled.p`
//   font-family: ${customStack};
// `;

// ============================================================================
// Example 8: Mixed Typography in a Complex Component
// ============================================================================

export const Hero = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
`;

export const HeroTitle = styled.h1`
  font-family: ${fontFamilies.display}; // Poppins - bold, impactful
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-family: ${fontFamilies.primary}; // Inter - readable
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.5;
  max-width: 600px;
  margin: 0 auto 2rem;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const HeroButton = styled.button`
  font-family: ${fontFamilies.primary}; // Inter - UI consistency
  font-size: 1rem;
  font-weight: 500;
  padding: 12px 32px;
  background: white;
  color: #667eea;
  border: none;
  border-radius: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

// ============================================================================
// Example 9: Form Typography
// ============================================================================

export const FormLabel = styled.label`
  font-family: ${fontFamilies.primary}; // Inter
  font-size: 0.875rem;
  font-weight: 500;
  display: block;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const FormInput = styled.input`
  font-family: ${fontFamilies.primary}; // Inter
  font-size: 1rem;
  padding: 8px 12px;
  border: 1px solid ${({ theme }) => theme.palette.divider};
  border-radius: 4px;
  width: 100%;
  
  &::placeholder {
    font-family: ${fontFamilies.primary};
    color: ${({ theme }) => theme.palette.text.disabled};
  }
`;

export const FormHelperText = styled.span`
  font-family: ${fontFamilies.primary}; // Inter
  font-size: 0.75rem;
  color: ${({ theme }) => theme.palette.text.secondary};
  display: block;
  margin-top: 0.25rem;
`;

// ============================================================================
// Example 10: Table Typography
// ============================================================================

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: ${fontFamilies.primary}; // Inter for data
`;

export const TableHeader = styled.th`
  font-family: ${fontFamilies.primary};
  font-size: 0.875rem;
  font-weight: 600;
  text-align: left;
  padding: 12px;
  background: ${({ theme }) => theme.palette.grey[100]};
  border-bottom: 2px solid ${({ theme }) => theme.palette.divider};
`;

export const TableCell = styled.td`
  font-family: ${fontFamilies.primary};
  font-size: 0.875rem;
  font-weight: 400;
  padding: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
`;

// ============================================================================
// Example 11: Navigation Typography
// ============================================================================

export const NavLink = styled.a`
  font-family: ${fontFamilies.primary}; // Inter
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  color: ${({ theme }) => theme.palette.text.primary};
  padding: 8px 16px;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${({ theme }) => theme.palette.primary.main};
  }
  
  &.active {
    color: ${({ theme }) => theme.palette.primary.main};
    font-weight: 600;
  }
`;

// ============================================================================
// Example 12: Badge Typography
// ============================================================================

export const Badge = styled.span`
  font-family: ${fontFamilies.primary}; // Inter
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 4px 8px;
  border-radius: 12px;
  background: ${({ theme }) => theme.palette.primary.main};
  color: white;
  display: inline-block;
`;

// ============================================================================
// Example 13: Usage in React Component
// ============================================================================

export const ExampleComponent = () => {
  return (
    <Card>
      <CardTitle>Welcome to Our App</CardTitle>
      <CardSubtitle>Get started with these features</CardSubtitle>
      <CardContent>
        This component demonstrates how different typography styles work together.
        The title uses Poppins for impact, while body text uses Inter for readability.
      </CardContent>
      <Button>Get Started</Button>
    </Card>
  );
};

// ============================================================================
// Example 14: Accessing Typography from Theme in Component
// ============================================================================

import { useTheme } from '@mui/material';

export const ThemedComponent = () => {
  const theme = useTheme();

  return (
    <div style={{ fontFamily: theme.typography.fontFamily }}>
      <h1 style={{ fontFamily: fontFamilies.display }}>
        Heading with Display Font
      </h1>
      <p>Body text with primary font</p>
      <code style={{ fontFamily: fontFamilies.monospace }}>
        const code = 'example';
      </code>
    </div>
  );
};

// ============================================================================
// Best Practices Summary
// ============================================================================

/**
 * DO:
 * ✅ Use fontFamilies.primary for body text and UI
 * ✅ Use fontFamilies.display for headings and hero text
 * ✅ Use fontFamilies.monospace for code blocks
 * ✅ Access fonts through theme when possible
 * ✅ Use MUI Typography component for semantic HTML
 *
 * DON'T:
 * ❌ Hardcode font family strings
 * ❌ Mix display fonts with body text
 * ❌ Forget fallback fonts
 * ❌ Use display fonts for large blocks of text
 * ❌ Use body fonts for impactful headings
 */

