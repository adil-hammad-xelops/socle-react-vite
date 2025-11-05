import { Container, Stack, Typography as MuiTypography, Divider } from 'components/ui';
import { TypographyPageWrapper, Section, SectionTitle, ExampleContainer, CodeSnippet } from './TypographyPage.styled.ts';
import {
  TypographyExamples,
  BodyText,
  Heading,
  CodeBlock,
  Card,
  CardTitle,
  CardSubtitle,
  CardContent,
  Button,
  ResponsiveHeading,
  Hero,
  HeroTitle,
  HeroSubtitle,
  HeroButton,
  FormLabel,
  FormInput,
  FormHelperText,
  Table,
  TableHeader,
  TableCell,
  NavLink,
  Badge,
  ExampleComponent,
  ThemedComponent,
  ThemedText,
  CustomComponent,
} from 'pages/TypographyPage/typography.examples.tsx';

/**
 * Typography Page
 * Displays all typography examples and demonstrates font usage
 */
export function TypographyPage() {
  return (
    <TypographyPageWrapper>
      <Container>
        <Stack spacing={6}>
          {/* Page Header */}
          <Stack spacing={2}>
            <MuiTypography variant="h1">Typography System</MuiTypography>
            <MuiTypography variant="body1">
              Explore our comprehensive typography system using Inter and Poppins fonts.
              This page demonstrates all available typography components and usage patterns.
            </MuiTypography>
          </Stack>

          <Divider />

          {/* Example 1: MUI Typography Variants */}
          <Section>
            <SectionTitle>1. MUI Typography Variants</SectionTitle>
            <ExampleContainer>
              <TypographyExamples />
            </ExampleContainer>
            <CodeSnippet>
              {`<Typography variant="h1">Main Page Title</Typography>
<Typography variant="body1">Regular body text</Typography>`}
            </CodeSnippet>
          </Section>

          <Divider />

          {/* Example 2: Styled Components */}
          <Section>
            <SectionTitle>2. Styled Components with Font Families</SectionTitle>
            <ExampleContainer>
              <BodyText>This is body text using Inter font for readability.</BodyText>
              <Heading>This is a heading using Poppins font</Heading>
              <CodeBlock>{`const example = 'Hello World';
console.log(example);`}</CodeBlock>
            </ExampleContainer>
          </Section>

          <Divider />

          {/* Example 3: Themed Text */}
          <Section>
            <SectionTitle>3. Themed Text Component</SectionTitle>
            <ExampleContainer>
              <ThemedText>
                <h2>Themed Heading</h2>
                <p>Themed body text paragraph.</p>
                <code>const themed = true;</code>
              </ThemedText>
            </ExampleContainer>
          </Section>

          <Divider />

          {/* Example 4: Card Component */}
          <Section>
            <SectionTitle>4. Card with Mixed Typography</SectionTitle>
            <ExampleContainer>
              <ExampleComponent />
            </ExampleContainer>
          </Section>

          <Divider />

          {/* Example 5: Responsive Typography */}
          <Section>
            <SectionTitle>5. Responsive Heading</SectionTitle>
            <ExampleContainer>
              <ResponsiveHeading>Responsive Heading Text</ResponsiveHeading>
              <MuiTypography variant="body2">
                This heading adjusts its size based on screen width
              </MuiTypography>
            </ExampleContainer>
          </Section>

          <Divider />

          {/* Example 6: Button Typography */}
          <Section>
            <SectionTitle>6. Button Typography</SectionTitle>
            <ExampleContainer>
              <Stack direction="row" spacing={2} flexWrap="wrap">
                <Button>Primary Button</Button>
                <Button>Secondary Button</Button>
                <Button>Action Button</Button>
              </Stack>
            </ExampleContainer>
          </Section>

          <Divider />

          {/* Example 7: Hero Section */}
          <Section>
            <SectionTitle>7. Hero Section</SectionTitle>
            <Hero>
              <HeroTitle>Welcome to Our Platform</HeroTitle>
              <HeroSubtitle>
                Experience the power of modern typography with Inter and Poppins fonts
              </HeroSubtitle>
              <HeroButton>Get Started</HeroButton>
            </Hero>
          </Section>

          <Divider />

          {/* Example 8: Form Elements */}
          <Section>
            <SectionTitle>8. Form Typography</SectionTitle>
            <ExampleContainer>
              <Stack spacing={2} maxWidth={400}>
                <div>
                  <FormLabel htmlFor="example-input">Email Address</FormLabel>
                  <FormInput
                    id="example-input"
                    type="email"
                    placeholder="Enter your email"
                  />
                  <FormHelperText>We'll never share your email</FormHelperText>
                </div>
                <div>
                  <FormLabel htmlFor="example-input-2">Full Name</FormLabel>
                  <FormInput
                    id="example-input-2"
                    type="text"
                    placeholder="John Doe"
                  />
                </div>
              </Stack>
            </ExampleContainer>
          </Section>

          <Divider />

          {/* Example 9: Table */}
          <Section>
            <SectionTitle>9. Table Typography</SectionTitle>
            <ExampleContainer>
              <Table>
                <thead>
                  <tr>
                    <TableHeader>Name</TableHeader>
                    <TableHeader>Font</TableHeader>
                    <TableHeader>Weight</TableHeader>
                    <TableHeader>Usage</TableHeader>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <TableCell>Heading 1</TableCell>
                    <TableCell>Poppins</TableCell>
                    <TableCell>700</TableCell>
                    <TableCell>Page titles</TableCell>
                  </tr>
                  <tr>
                    <TableCell>Body 1</TableCell>
                    <TableCell>Inter</TableCell>
                    <TableCell>400</TableCell>
                    <TableCell>Paragraphs</TableCell>
                  </tr>
                  <tr>
                    <TableCell>Button</TableCell>
                    <TableCell>Inter</TableCell>
                    <TableCell>500</TableCell>
                    <TableCell>UI elements</TableCell>
                  </tr>
                </tbody>
              </Table>
            </ExampleContainer>
          </Section>

          <Divider />

          {/* Example 10: Navigation */}
          <Section>
            <SectionTitle>10. Navigation Typography</SectionTitle>
            <ExampleContainer>
              <Stack direction="row" spacing={2} flexWrap="wrap">
                <NavLink href="#home">Home</NavLink>
                <NavLink href="#about">About</NavLink>
                <NavLink href="#services" className="active">Services</NavLink>
                <NavLink href="#contact">Contact</NavLink>
              </Stack>
            </ExampleContainer>
          </Section>

          <Divider />

          {/* Example 11: Badges */}
          <Section>
            <SectionTitle>11. Badge Typography</SectionTitle>
            <ExampleContainer>
              <Stack direction="row" spacing={2} flexWrap="wrap">
                <Badge>New</Badge>
                <Badge>Pro</Badge>
                <Badge>Featured</Badge>
                <Badge>Popular</Badge>
              </Stack>
            </ExampleContainer>
          </Section>

          <Divider />

          {/* Example 12: Custom Component */}
          <Section>
            <SectionTitle>12. Custom Component</SectionTitle>
            <ExampleContainer>
              <CustomComponent>
                This uses the getFontFamily helper function to access fonts
              </CustomComponent>
            </ExampleContainer>
          </Section>

          <Divider />

          {/* Example 13: Themed Component */}
          <Section>
            <SectionTitle>13. Themed Component with All Fonts</SectionTitle>
            <ExampleContainer>
              <ThemedComponent />
            </ExampleContainer>
          </Section>

          {/* Font Family Reference */}
          <Section>
            <SectionTitle>Font Family Reference</SectionTitle>
            <Card>
              <CardTitle>Available Fonts</CardTitle>
              <Stack spacing={2}>
                <div>
                  <CardSubtitle>Inter (Primary Font)</CardSubtitle>
                  <CardContent>
                    Used for body text, UI elements, buttons, forms, and navigation.
                    Optimized for screen readability and UI consistency.
                  </CardContent>
                </div>
                <div>
                  <CardSubtitle>Poppins (Display Font)</CardSubtitle>
                  <CardContent>
                    Used for headings, hero text, and marketing content.
                    Geometric sans-serif for visual impact and branding.
                  </CardContent>
                </div>
                <div>
                  <CardSubtitle>Monospace (Code Font)</CardSubtitle>
                  <CardContent>
                    Used for code blocks, technical documentation, and terminal output.
                  </CardContent>
                </div>
              </Stack>
            </Card>
          </Section>
        </Stack>
      </Container>
    </TypographyPageWrapper>
  );
}

export default TypographyPage;

