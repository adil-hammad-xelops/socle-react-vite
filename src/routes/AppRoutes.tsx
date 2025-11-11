import {Route} from 'react-router-dom';
import UsersPage from 'pages/UsersPage';
import FeedbackComponentsPage from 'pages/FeedbackComponentsPage';
import AllComponentsDemo from 'pages/AllComponentsDemo';
import NavigationOverlayDemo from 'pages/NavigationOverlayDemo';
import SimpleContainerDemo from 'pages/SimpleContainerDemo';
import NotFoundPage from 'pages/NotFoundPage';
import ProtectedRoute from 'components/auth/ProtectedRoute';

export const appRoutes = (
    <>
        {/* Protected Routes - Require Authentication */}
        <Route path="/" element={<ProtectedRoute><SimpleContainerDemo/></ProtectedRoute>}/>
        <Route path="/users" element={<ProtectedRoute><UsersPage/></ProtectedRoute>}/>
        <Route path="/feedback-components" element={<ProtectedRoute><FeedbackComponentsPage/></ProtectedRoute>}/>
        <Route path="/components-demo" element={<ProtectedRoute><AllComponentsDemo/></ProtectedRoute>}/>
        <Route path="/navigation-overlay-demo" element={<ProtectedRoute><NavigationOverlayDemo/></ProtectedRoute>}/>

        {/* 404 Route */}
        <Route path="*" element={<NotFoundPage/>}/>
    </>
);

