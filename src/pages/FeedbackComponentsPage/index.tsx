import {useState} from 'react';
import {Box, Divider, Grid, Stack, Typography} from '@mui/material';
import {Alert, EmptyState, Loader, Notification, Skeleton, Spinner, Toast} from 'components/feedback';
import {Button, Card} from 'components/ui';
import {PageLayout} from 'components/layout';
import {CodeBlock, DemoContainer, ExampleSection} from './FeedbackComponentsPage.styled';

const FeedbackComponentsPage = () => {
    const [toastOpen, setToastOpen] = useState(false);
    const [toastConfig, setToastConfig] = useState({
        message: 'This is a success toast!',
        severity: 'success' as 'success' | 'error' | 'warning' | 'info',
    });

    const showToast = (message: string, severity: 'success' | 'error' | 'warning' | 'info') => {
        setToastConfig({message, severity});
        setToastOpen(true);
    };

    return (
        <PageLayout title="Feedback Components Demo" showHeader showFooter>
            <Box sx={{py: 4}}>
                <Typography variant="h3" gutterBottom>
                    Feedback Components
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                    Interactive examples of all available feedback components with different variants and
                    configurations.
                </Typography>

                <Divider sx={{my: 4}}/>

                {/* Alert Component */}
                <ExampleSection>
                    <Typography variant="h4" gutterBottom>
                        1. Alert Component
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                        Display important messages with different severity levels. Supports closable alerts, titles, and
                        custom icons.
                    </Typography>

                    <DemoContainer>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant="h6" gutterBottom>Standard Variants</Typography>
                                <Stack spacing={2}>
                                    <Alert severity="success" message="This is a success alert!"/>
                                    <Alert severity="info" message="This is an informational alert."/>
                                    <Alert severity="warning" message="This is a warning alert!"/>
                                    <Alert severity="error" message="This is an error alert!"/>
                                </Stack>
                            </Grid>

                            <Grid item xs={12}>
                                <Typography variant="h6" gutterBottom>With Titles</Typography>
                                <Stack spacing={2}>
                                    <Alert
                                        severity="success"
                                        title="Success!"
                                        message="Your changes have been saved successfully."
                                    />
                                    <Alert
                                        severity="error"
                                        title="Error Occurred"
                                        message="Unable to process your request. Please try again."
                                    />
                                </Stack>
                            </Grid>

                            <Grid item xs={12}>
                                <Typography variant="h6" gutterBottom>Filled Variant</Typography>
                                <Stack spacing={2}>
                                    <Alert
                                        severity="info"
                                        variant="filled"
                                        message="This is a filled info alert"
                                    />
                                    <Alert
                                        severity="warning"
                                        variant="filled"
                                        title="Important"
                                        message="This is a filled warning with title"
                                    />
                                </Stack>
                            </Grid>

                            <Grid item xs={12}>
                                <Typography variant="h6" gutterBottom>Outlined Variant</Typography>
                                <Stack spacing={2}>
                                    <Alert
                                        severity="success"
                                        variant="outlined"
                                        message="This is an outlined success alert"
                                    />
                                    <Alert
                                        severity="error"
                                        variant="outlined"
                                        message="This is an outlined error alert"
                                    />
                                </Stack>
                            </Grid>
                        </Grid>

                        <CodeBlock>
                            <Typography variant="caption" component="pre">
                                {`import { Alert } from 'components/feedback';

<Alert severity="success" message="Success message!" />
<Alert severity="error" title="Error" message="Error message" />
<Alert severity="info" variant="filled" message="Filled alert" />`}
                            </Typography>
                        </CodeBlock>
                    </DemoContainer>
                </ExampleSection>

                <Divider sx={{my: 4}}/>

                {/* Toast Component */}
                <ExampleSection>
                    <Typography variant="h4" gutterBottom>
                        2. Toast (Snackbar) Component
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                        Temporary notifications that appear and auto-dismiss. Perfect for confirmations and quick
                        feedback.
                    </Typography>

                    <DemoContainer>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} md={3}>
                                <Button
                                    fullWidth
                                    color="success"
                                    onClick={() => showToast('Operation successful!', 'success')}
                                >
                                    Success Toast
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <Button
                                    fullWidth
                                    color="error"
                                    onClick={() => showToast('An error occurred!', 'error')}
                                >
                                    Error Toast
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <Button
                                    fullWidth
                                    color="warning"
                                    onClick={() => showToast('Warning: Check your input', 'warning')}
                                >
                                    Warning Toast
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <Button
                                    fullWidth
                                    color="info"
                                    onClick={() => showToast('Information: New update available', 'info')}
                                >
                                    Info Toast
                                </Button>
                            </Grid>
                        </Grid>

                        <CodeBlock>
                            <Typography variant="caption" component="pre">
                                {`import { Toast } from 'components/feedback';

const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Show Toast</Button>
<Toast 
  open={open} 
  onClose={() => setOpen(false)} 
  message="Success!" 
  severity="success" 
  duration={3000}
/>`}
                            </Typography>
                        </CodeBlock>
                    </DemoContainer>
                </ExampleSection>

                <Divider sx={{my: 4}}/>

                {/* Spinner Component */}
                <ExampleSection>
                    <Typography variant="h4" gutterBottom>
                        3. Spinner Component
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                        Loading indicators with optional text and fullscreen overlay support.
                    </Typography>

                    <DemoContainer>
                        <Grid container spacing={4}>
                            <Grid item xs={12} md={4}>
                                <Card title="Default Spinner">
                                    <Spinner/>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Card title="With Text">
                                    <Spinner text="Loading..."/>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Card title="Large with Text">
                                    <Spinner size={60} text="Processing..." color="secondary"/>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Card title="Small Spinner">
                                    <Spinner size={24}/>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Card title="Custom Color">
                                    <Spinner size={50} color="success" text="Success loading"/>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Card title="Error Spinner">
                                    <Spinner size={50} color="error" text="Retrying..."/>
                                </Card>
                            </Grid>
                        </Grid>

                        <CodeBlock>
                            <Typography variant="caption" component="pre">
                                {`import { Spinner } from 'components/feedback';

<Spinner />
<Spinner text="Loading..." />
<Spinner size={60} color="secondary" text="Processing..." />
<Spinner fullScreen text="Please wait..." />`}
                            </Typography>
                        </CodeBlock>
                    </DemoContainer>
                </ExampleSection>

                <Divider sx={{my: 4}}/>

                {/* Loader Component */}
                <ExampleSection>
                    <Typography variant="h4" gutterBottom>
                        4. Loader (Linear Progress) Component
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                        Linear progress indicator for showing loading states in a compact format.
                    </Typography>

                    <DemoContainer>
                        <Stack spacing={3}>
                            <Box>
                                <Typography variant="body2" gutterBottom>Default Loader</Typography>
                                <Loader/>
                            </Box>
                            <Box>
                                <Typography variant="body2" gutterBottom>With Text</Typography>
                                <Loader text="Loading your data..."/>
                            </Box>
                            <Box>
                                <Typography variant="body2" gutterBottom>Processing Files</Typography>
                                <Loader text="Processing files, please wait..."/>
                            </Box>
                        </Stack>

                        <CodeBlock>
                            <Typography variant="caption" component="pre">
                                {`import { Loader } from 'components/feedback';

<Loader />
<Loader text="Loading your data..." />`}
                            </Typography>
                        </CodeBlock>
                    </DemoContainer>
                </ExampleSection>

                <Divider sx={{my: 4}}/>

                {/* Notification Component */}
                <ExampleSection>
                    <Typography variant="h4" gutterBottom>
                        5. Notification Component
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                        Static notification alerts for displaying information without close buttons.
                    </Typography>

                    <DemoContainer>
                        <Stack spacing={2}>
                            <Notification
                                severity="success"
                                message="Your profile has been updated successfully!"
                            />
                            <Notification
                                severity="info"
                                title="New Feature"
                                message="Check out our new dashboard analytics!"
                            />
                            <Notification
                                severity="warning"
                                title="Action Required"
                                message="Please verify your email address within 24 hours."
                            />
                            <Notification
                                severity="error"
                                message="Payment failed. Please update your payment method."
                            />
                            <Notification
                                severity="info"
                                variant="filled"
                                title="System Maintenance"
                                message="Scheduled maintenance on Sunday 2 AM - 4 AM EST"
                            />
                        </Stack>

                        <CodeBlock>
                            <Typography variant="caption" component="pre">
                                {`import { Notification } from 'components/feedback';

<Notification severity="success" message="Success message" />
<Notification 
  severity="info" 
  title="Info" 
  message="Information message" 
  variant="filled" 
/>`}
                            </Typography>
                        </CodeBlock>
                    </DemoContainer>
                </ExampleSection>

                <Divider sx={{my: 4}}/>

                {/* Skeleton Component */}
                <ExampleSection>
                    <Typography variant="h4" gutterBottom>
                        6. Skeleton Component
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                        Loading placeholders that display while content is being fetched.
                    </Typography>

                    <DemoContainer>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <Card title="Loading User Profile">
                                    <Skeleton lines={3}/>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Card title="Loading Article">
                                    <Skeleton lines={5}/>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Card title="Loading List">
                                    <Skeleton lines={7}/>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Card title="Single Line">
                                    <Skeleton lines={1}/>
                                </Card>
                            </Grid>
                        </Grid>

                        <CodeBlock>
                            <Typography variant="caption" component="pre">
                                {`import { Skeleton } from 'components/feedback';

<Skeleton lines={3} />
<Skeleton lines={5} />`}
                            </Typography>
                        </CodeBlock>
                    </DemoContainer>
                </ExampleSection>

                <Divider sx={{my: 4}}/>

                {/* EmptyState Component */}
                <ExampleSection>
                    <Typography variant="h4" gutterBottom>
                        7. EmptyState Component
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                        Display when there's no data to show, with optional action buttons.
                    </Typography>

                    <DemoContainer>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <Card>
                                    <EmptyState
                                        title="No Messages"
                                        description="You don't have any messages yet. Start a conversation!"
                                    />
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Card>
                                    <EmptyState
                                        title="No Results Found"
                                        description="Try adjusting your search or filters."
                                        actionLabel="Clear Filters"
                                        onAction={() => alert('Filters cleared!')}
                                    />
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Card>
                                    <EmptyState
                                        title="No Files"
                                        description="Upload your first file to get started."
                                        actionLabel="Upload File"
                                        onAction={() => alert('Upload dialog opened')}
                                    />
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Card>
                                    <EmptyState
                                        title="No Data Available"
                                        description="There is nothing to display at the moment."
                                    />
                                </Card>
                            </Grid>
                        </Grid>

                        <CodeBlock>
                            <Typography variant="caption" component="pre">
                                {`import { EmptyState } from 'components/feedback';

<EmptyState 
  title="No Data" 
  description="Nothing to show here yet." 
/>

<EmptyState 
  title="No Results" 
  description="Try adjusting your search." 
  actionLabel="Clear Filters" 
  onAction={handleClear} 
/>`}
                            </Typography>
                        </CodeBlock>
                    </DemoContainer>
                </ExampleSection>

                <Divider sx={{my: 4}}/>

                {/* Combined Example */}
                <ExampleSection>
                    <Typography variant="h4" gutterBottom>
                        8. Combined Example
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                        See how different feedback components work together in a realistic scenario.
                    </Typography>

                    <DemoContainer>
                        <Card title="User Dashboard Loading States">
                            <Stack spacing={3}>
                                <Alert
                                    severity="info"
                                    title="Welcome Back!"
                                    message="You have 3 new notifications"
                                />

                                <Box>
                                    <Typography variant="subtitle2" gutterBottom>
                                        Loading Recent Activity
                                    </Typography>
                                    <Loader text="Fetching your recent activity..."/>
                                </Box>

                                <Box>
                                    <Typography variant="subtitle2" gutterBottom>
                                        Loading Profile
                                    </Typography>
                                    <Skeleton lines={3}/>
                                </Box>

                                <Notification
                                    severity="warning"
                                    title="Action Required"
                                    message="Please complete your profile to unlock all features"
                                />
                            </Stack>
                        </Card>
                    </DemoContainer>
                </ExampleSection>

                {/* Toast Component (rendered once) */}
                <Toast
                    open={toastOpen}
                    onClose={() => setToastOpen(false)}
                    message={toastConfig.message}
                    severity={toastConfig.severity}
                    duration={4000}
                />
            </Box>
        </PageLayout>
    );
};

export default FeedbackComponentsPage;

