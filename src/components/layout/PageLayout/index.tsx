import {ReactNode} from 'react';
import {Container} from '@mui/material';
import Header from '../Header';
import Footer from '../Footer';
import {LayoutWrapper, MainContent} from './PageLayout.styled';

interface PageLayoutProps {
    children: ReactNode;
    title?: string;
    showHeader?: boolean;
    showFooter?: boolean;
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
    onMenuClick?: () => void;
}

const PageLayout = ({
                        children,
                        title,
                        showHeader = true,
                        showFooter = true,
                        maxWidth = 'lg',
                        onMenuClick,
                    }: PageLayoutProps) => {
    return (
        <LayoutWrapper>
            {showHeader && <Header title={title} onMenuClick={onMenuClick}/>}

            <MainContent>
                <Container maxWidth={maxWidth}>
                    {children}
                </Container>
            </MainContent>

            {showFooter && <Footer/>}
        </LayoutWrapper>
    );
};

export default PageLayout;

