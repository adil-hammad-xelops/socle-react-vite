import {Container, Grid, Link, Typography} from '@mui/material';
import {Copyright, FooterContainer, FooterContent, LinkList} from './Footer.styled';

interface FooterProps {
    companyName?: string;
    links?: { label: string; href: string }[];
}

const Footer = ({
                    companyName = 'React Vite TS Starter',
                    links = [
                        {label: 'About', href: '/about'},
                    ]
                }: FooterProps) => {
    const currentYear = new Date().getFullYear();

    return (
        <FooterContainer>
            <Container maxWidth="lg">
                <FooterContent>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" gutterBottom>
                                {companyName}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Building modern web applications with React, TypeScript, and Vite.
                            </Typography>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" gutterBottom>
                                Quick Links
                            </Typography>
                            <LinkList>
                                {links.map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        color="text.secondary"
                                        underline="hover"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </LinkList>
                        </Grid>
                    </Grid>

                    <Copyright variant="body2" color="text.secondary">
                        © {currentYear} {companyName}. All rights reserved.
                    </Copyright>
                </FooterContent>
            </Container>
        </FooterContainer>
    );
};

export default Footer;

