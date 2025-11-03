import React from 'react';
import { Container, Grid, Stack, Typography, Divider, Card, Box } from '../components/ui';
import { Input, TextArea, Select, Checkbox, Radio, Switch, Slider, DatePicker, FileUpload, SearchField } from '../components/ui';

/**
 * Form Elements Demo Page
 */
export function FormPage() {
  const [inputValue, setInputValue] = React.useState('');
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [selectValue, setSelectValue] = React.useState('');
  const [checkboxChecked, setCheckboxChecked] = React.useState(false);
  const [radioValue, setRadioValue] = React.useState('1');
  const [switchChecked, setSwitchChecked] = React.useState(false);
  const [sliderValue, setSliderValue] = React.useState(50);
  const [dateValue, setDateValue] = React.useState('');
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h3" gutterBottom>
        Form Elements
      </Typography>
      <Typography variant="body1" color="textSecondary" paragraph>
        Comprehensive form controls with validation and accessibility
      </Typography>

      <Divider sx={{ my: 3 }} />

      {/* Text Inputs */}
      <Card title="Text Inputs" sx={{ mb: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Stack spacing={3}>
              <Input
                label="Text Input"
                placeholder="Enter text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                fullWidth
              />
              <Input
                label="Email"
                type="email"
                placeholder="email@example.com"
                fullWidth
              />
              <Input
                label="Password"
                type="password"
                placeholder="Enter password"
                fullWidth
              />
              <Input
                label="Number"
                type="number"
                placeholder="Enter number"
                fullWidth
              />
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Stack spacing={3}>
              <Input
                label="With Error"
                placeholder="Required field"
                error
                helperText="This field is required"
                fullWidth
              />
              <Input
                label="Disabled"
                placeholder="Disabled input"
                disabled
                fullWidth
              />
              <Input
                label="Required"
                placeholder="Required field"
                required
                fullWidth
              />
              <SearchField
                value={searchValue}
                onChange={setSearchValue}
                placeholder="Search..."
                fullWidth
              />
            </Stack>
          </Grid>
        </Grid>
      </Card>

      {/* TextArea & Select */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} md={6}>
          <Card title="TextArea">
            <Stack spacing={2}>
              <TextArea
                label="Description"
                placeholder="Enter description"
                value={textAreaValue}
                onChange={(e) => setTextAreaValue(e.target.value)}
                rows={4}
                fullWidth
              />
              <TextArea
                label="Auto-resize"
                placeholder="This textarea auto-resizes"
                minRows={2}
                maxRows={6}
                fullWidth
              />
            </Stack>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card title="Select">
            <Stack spacing={2}>
              <Select
                label="Country"
                options={[
                  { label: 'United States', value: 'us' },
                  { label: 'Canada', value: 'ca' },
                  { label: 'United Kingdom', value: 'uk' },
                  { label: 'Australia', value: 'au' },
                ]}
                value={selectValue}
                onChange={(e) => setSelectValue(e.target.value)}
                fullWidth
              />
              <Select
                label="With Placeholder"
                options={[
                  { label: 'Option 1', value: '1' },
                  { label: 'Option 2', value: '2' },
                  { label: 'Option 3', value: '3' },
                ]}
                placeholder="Choose an option"
                fullWidth
              />
            </Stack>
          </Card>
        </Grid>
      </Grid>

      {/* Checkboxes & Radio */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} md={6}>
          <Card title="Checkboxes & Switch">
            <Stack spacing={3}>
              <Box>
                <Typography variant="body2" gutterBottom>Checkbox</Typography>
                <Checkbox
                  label="Accept terms and conditions"
                  checked={checkboxChecked}
                  onChange={(_e, checked) => setCheckboxChecked(checked)}
                />
                <Checkbox
                  label="Subscribe to newsletter"
                />
                <Checkbox
                  label="Disabled checkbox"
                  disabled
                />
              </Box>

              <Box>
                <Typography variant="body2" gutterBottom>Switch</Typography>
                <Switch
                  label="Enable notifications"
                  checked={switchChecked}
                  onChange={(_e, checked) => setSwitchChecked(checked)}
                />
                <Switch
                  label="Dark mode"
                  color="primary"
                />
                <Switch
                  label="Disabled switch"
                  disabled
                />
              </Box>
            </Stack>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card title="Radio Buttons">
            <Stack spacing={2}>
              <Radio
                label="Choose your plan"
                options={[
                  { label: 'Free Plan', value: '1' },
                  { label: 'Pro Plan', value: '2' },
                  { label: 'Enterprise Plan', value: '3' },
                ]}
                value={radioValue}
                onChange={(e) => setRadioValue(e.target.value)}
              />
              <Radio
                label="Horizontal layout"
                options={[
                  { label: 'Yes', value: 'yes' },
                  { label: 'No', value: 'no' },
                ]}
                row
              />
            </Stack>
          </Card>
        </Grid>
      </Grid>

      {/* Slider & Date Picker */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} md={6}>
          <Card title="Slider">
            <Stack spacing={3}>
              <Box>
                <Slider
                  label="Volume"
                  value={sliderValue}
                  onChange={(_e, value) => setSliderValue(value as number)}
                  min={0}
                  max={100}
                />
                <Typography variant="body2" align="center" sx={{ mt: 1 }}>
                  Value: {sliderValue}
                </Typography>
              </Box>

              <Box>
                <Slider
                  label="Price Range"
                  value={[20, 80]}
                  min={0}
                  max={100}
                  marks
                />
              </Box>

              <Box>
                <Slider
                  label="With Steps"
                  value={50}
                  min={0}
                  max={100}
                  step={10}
                  marks
                  valueLabelDisplay="on"
                />
              </Box>
            </Stack>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card title="Date Picker & File Upload">
            <Stack spacing={3}>
              <DatePicker
                label="Birth Date"
                value={dateValue}
                onChange={setDateValue}
                fullWidth
              />
              <DatePicker
                label="Event Date"
                min={new Date().toISOString().split('T')[0]}
                fullWidth
              />
              <FileUpload
                label="Upload Document"
                accept=".pdf,.doc,.docx"
                maxSize={5}
                onChange={(files) => console.log('Files:', files)}
              />
              <FileUpload
                label="Upload Images"
                accept="image/*"
                multiple
                maxSize={10}
              />
            </Stack>
          </Card>
        </Grid>
      </Grid>

      {/* Form Example */}
      <Card title="Complete Form Example">
        <Stack spacing={3}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Input label="First Name" placeholder="John" required fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <Input label="Last Name" placeholder="Doe" required fullWidth />
            </Grid>
            <Grid item xs={12}>
              <Input label="Email" type="email" placeholder="john@example.com" required fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextArea label="Message" placeholder="Your message" rows={4} fullWidth />
            </Grid>
            <Grid item xs={12}>
              <Checkbox label="I agree to the terms and conditions" />
            </Grid>
          </Grid>
        </Stack>
      </Card>
    </Container>
  );
}

export default FormPage;

