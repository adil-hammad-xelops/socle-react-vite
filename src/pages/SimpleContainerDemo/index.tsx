import {Box, Button, Card, CardContent, Grid, Typography} from '@mui/material';
import SimpleContainer from 'containers/SimpleContainer';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import AssessmentIcon from '@mui/icons-material/Assessment';
import {useNavigate} from 'react-router-dom';

const SimpleContainerDemo = () => {
    const navigate = useNavigate();

    return (
        <SimpleContainer title="Simple Container Demo">
            <Box sx={{py: 4}}>
                <Typography variant="h3" gutterBottom>
                    Welcome to Simple Container
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                    This is a simple page container with navigation. Click the menu icon in the top left to open the
                    navigation drawer.
                </Typography>

                <Grid container spacing={3} sx={{mt: 2}}>
                    <Grid item xs={12} md={3}>
                        <Card>
                            <CardContent>
                                <Box sx={{display: 'flex', alignItems: 'center', mb: 2}}>
                                    <DashboardIcon color="primary" sx={{fontSize: 32, mr: 2}}/>
                                    <Typography variant="h5">
                                        Components demo
                                    </Typography>
                                </Box>
                                <Button variant="contained" onClick={() => navigate('/components-demo')}>
                                    View Components demo
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Card>
                            <CardContent>
                                <Box sx={{display: 'flex', alignItems: 'center', mb: 2}}>
                                    <PeopleIcon color="secondary" sx={{fontSize: 32, mr: 2}}/>
                                    <Typography variant="h5">
                                        Feedback components
                                    </Typography>
                                </Box>
                                <Button variant="contained" color="secondary"
                                        onClick={() => navigate('/feedback-components')}>
                                    View Feedback components
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Card>
                            <CardContent>
                                <Box sx={{display: 'flex', alignItems: 'center', mb: 2}}>
                                    <PeopleIcon color="secondary" sx={{fontSize: 32, mr: 2}}/>
                                    <Typography variant="h5">
                                        Users components
                                    </Typography>
                                </Box>
                                <Button variant="contained" color="secondary" onClick={() => navigate('/users')}>
                                    View Users
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Card>
                            <CardContent>
                                <Box sx={{display: 'flex', alignItems: 'center', mb: 2}}>
                                    <AssessmentIcon color="success" sx={{fontSize: 32, mr: 2}}/>
                                    <Typography variant="h5">
                                        Navigation overlay demo
                                    </Typography>
                                </Box>
                                <Button variant="contained" color="success"
                                        onClick={() => navigate('/navigation-overlay-demo')}>
                                    View Navigation overlay demo
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>


            </Box>
        </SimpleContainer>
    );
};

export default SimpleContainerDemo;

