import { useNavigate } from 'react-router-dom';
import { HomeView } from './components/HomeView';

/**
 * Home Container - Handles navigation logic
 */
export function HomeContainer() {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return <HomeView onNavigate={handleNavigation} />;
}

export default HomeContainer;

