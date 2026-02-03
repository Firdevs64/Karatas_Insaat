import { useState, useEffect } from 'react';
import { Container, Group, Burger } from '@mantine/core';
import { useDisclosure, useWindowScroll } from '@mantine/hooks';
import { useNavigate, useLocation } from 'react-router-dom';
import classes from './Header.module.css';

const links = [
    { link: 'top', label: 'Ana Sayfa' },
    { link: 'projects', label: 'Projeler' },
    { link: 'services', label: 'Hizmetler' },
    { link: 'contact', label: 'İletişim' },
];

export function Header() {
    const [opened, { toggle }] = useDisclosure(false);
    const [scroll] = useWindowScroll();
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname !== '/') {
            setScrolled(true);
        } else {
            setScrolled(scroll.y > 50);
        }
    }, [scroll.y, location.pathname]);

    const handleNavigation = (id: string) => {
        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: id } });
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            } else if (id === 'top') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    };

    const items = links.map((link) => (
        <a
            key={link.label}
            href={`#${link.link}`}
            className={classes.link}
            onClick={(event) => {
                event.preventDefault();
                handleNavigation(link.link);
            }}
        >
            {link.label}
        </a>
    ));

    return (
        <header className={`${classes.header} ${scrolled ? classes.scrolled : ''}`}>
            <Container size="md" className={classes.inner}>
                <div className={classes.logoWrapper} onClick={() => handleNavigation('top')}>
                    <span className={classes.logoText}>KARATAŞ İNŞAAT</span>
                </div>

                <Group gap={30} visibleFrom="sm">
                    {items}
                </Group>

                <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" color={scrolled ? 'black' : 'white'} />
            </Container>
        </header>
    );
}
