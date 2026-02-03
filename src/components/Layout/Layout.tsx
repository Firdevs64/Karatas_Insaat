import { Box } from '@mantine/core';
import type { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
    children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <Box>
            <Header />
            <main>{children}</main>
            <Footer />
        </Box>
    );
}
