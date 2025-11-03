import React from 'react';
import { Container, Grid, Stack, Typography, Divider, Card, Box, Button } from '../components/ui';
import { Modal, Dialog, Alert, Toast, ProgressBar, Spinner, Skeleton, EmptyState } from '../components/ui';
import { Inbox } from '@mui/icons-material';

/**
 * Feedback Components Demo Page
 */
export function FeedbackPage() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [toastOpen, setToastOpen] = React.useState(false);

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h3" gutterBottom>
        Feedback Components
      </Typography>
      <Typography variant="body1" color="textSecondary" paragraph>
        Provide feedback and loading states to users
      </Typography>

      <Divider sx={{ my: 3 }} />

      {/* Alerts */}
      <Card title="Alerts" sx={{ mb: 3 }}>
        <Stack spacing={2}>
          <Alert severity="success" title="Success">
            This is a success alert with a title!
          </Alert>
          <Alert severity="info">
            This is an informational alert.
          </Alert>
          <Alert severity="warning">
            This is a warning alert.
          </Alert>
          <Alert severity="error" onClose={() => alert('Closed')}>
            This is an error alert with close button.
          </Alert>
        </Stack>
      </Card>

      {/* Modal & Dialog */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} md={6}>
          <Card title="Modal">
            <Stack spacing={2}>
              <Button variant="primary" onClick={() => setModalOpen(true)}>
                Open Modal
              </Button>
              <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
                <Box>
                  <Typography variant="h5" gutterBottom>
                    Modal Title
                  </Typography>
                  <Typography variant="body1" paragraph>
                    This is a modal dialog. Click outside or press ESC to close.
                  </Typography>
                  <Button variant="primary" onClick={() => setModalOpen(false)}>
                    Close
                  </Button>
                </Box>
              </Modal>
            </Stack>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card title="Dialog">
            <Stack spacing={2}>
              <Button variant="primary" onClick={() => setDialogOpen(true)}>
                Open Dialog
              </Button>
              <Dialog
                open={dialogOpen}
                onClose={() => setDialogOpen(false)}
                title="Confirm Action"
                actions={
                  <>
                    <Button variant="ghost" onClick={() => setDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button variant="primary" onClick={() => setDialogOpen(false)}>
                      Confirm
                    </Button>
                  </>
                }
              >
                <Typography>Are you sure you want to perform this action?</Typography>
              </Dialog>
            </Stack>
          </Card>
        </Grid>
      </Grid>

      {/* Toast */}
      <Card title="Toast / Snackbar" sx={{ mb: 3 }}>
        <Stack direction="row" spacing={2}>
          <Button variant="primary" onClick={() => setToastOpen(true)}>
            Show Success Toast
          </Button>
          <Toast
            open={toastOpen}
            message="Operation completed successfully!"
            severity="success"
            onClose={() => setToastOpen(false)}
          />
        </Stack>
      </Card>

      {/* Progress */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} md={6}>
          <Card title="Progress Bar">
            <Stack spacing={3}>
              <Box>
                <Typography variant="body2" gutterBottom>Determinate</Typography>
                <ProgressBar value={75} showLabel />
              </Box>
              <Box>
                <Typography variant="body2" gutterBottom>Different Colors</Typography>
                <Stack spacing={1}>
                  <ProgressBar value={50} color="primary" />
                  <ProgressBar value={70} color="success" />
                  <ProgressBar value={30} color="warning" />
                  <ProgressBar value={90} color="error" />
                </Stack>
              </Box>
              <Box>
                <Typography variant="body2" gutterBottom>Indeterminate</Typography>
                <ProgressBar variant="indeterminate" />
              </Box>
            </Stack>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card title="Spinner">
            <Stack spacing={3}>
              <Box>
                <Typography variant="body2" gutterBottom>Sizes</Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Spinner size="small" />
                  <Spinner size="medium" />
                  <Spinner size="large" />
                </Stack>
              </Box>
              <Box>
                <Typography variant="body2" gutterBottom>With Label</Typography>
                <Spinner label="Loading data..." />
              </Box>
              <Box>
                <Typography variant="body2" gutterBottom>Centered</Typography>
                <Spinner centered label="Please wait..." />
              </Box>
            </Stack>
          </Card>
        </Grid>
      </Grid>

      {/* Skeleton */}
      <Card title="Skeleton Loading" sx={{ mb: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Stack spacing={2}>
              <Typography variant="body2">Text Skeleton</Typography>
              <Skeleton variant="text" count={3} />

              <Typography variant="body2" sx={{ mt: 2 }}>Rectangular Skeleton</Typography>
              <Skeleton variant="rectangular" height={100} />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack spacing={2}>
              <Typography variant="body2">Circular Skeleton</Typography>
              <Skeleton variant="circular" width={60} height={60} />

              <Typography variant="body2" sx={{ mt: 2 }}>Rounded Skeleton</Typography>
              <Skeleton variant="rounded" height={80} />
            </Stack>
          </Grid>
        </Grid>
      </Card>

      {/* Empty State */}
      <Card title="Empty State">
        <EmptyState
          icon={<Inbox style={{ fontSize: 64 }} />}
          title="No items found"
          description="You don't have any items yet. Create your first item to get started."
          action={<Button variant="primary">Create Item</Button>}
        />
      </Card>
    </Container>
  );
}

export default FeedbackPage;

