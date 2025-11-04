import { Button } from '../ui';
import { Link } from 'react-router-dom';
import {
  LoadingContainer,
  LoadingContent,
  Spinner,
  LoadingText,
  NotFoundContainer,
  NotFoundCode,
  NotFoundTitle,
  NotFoundMessage,
  NotFoundLink,
  FooterContainer,
  FooterText,
  FooterCopyright,
} from './RouterComponents.styled';

/**
 * Loading Fallback Component
 * Displayed while lazy-loaded pages are being fetched
 */
export function LoadingFallback() {
  return (
    <LoadingContainer>
      <LoadingContent>
        <Spinner />
        <LoadingText>Loading...</LoadingText>
      </LoadingContent>
    </LoadingContainer>
  );
}

/**
 * 404 Not Found Page
 * Displayed when user navigates to non-existent route
 */
export function NotFoundPage() {
  return (
    <NotFoundContainer>
      <NotFoundCode>404</NotFoundCode>
      <NotFoundTitle>Page Not Found</NotFoundTitle>
      <NotFoundMessage>
        The page you're looking for doesn't exist.
      </NotFoundMessage>
      <NotFoundLink>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button variant="primary">Go Home</Button>
        </Link>
      </NotFoundLink>
    </NotFoundContainer>
  );
}

/**
 * Footer Component
 * Application footer with branding and copyright
 */
export function Footer() {
  return (
    <FooterContainer>
      <FooterText>
        UI Component Library - Built with React + TypeScript + Material-UI
      </FooterText>
      <FooterCopyright>
        © 2025 - 59 Production-Ready Components
      </FooterCopyright>
    </FooterContainer>
  );
}
