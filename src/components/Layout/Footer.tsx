import { Container, Group, Text, Anchor } from '@mantine/core';
import { Link } from 'react-router-dom';
import classes from './Footer.module.css';

export function Footer() {
    return (
        <footer className={classes.footer}>
            <Container className={classes.inner}>
                <Text c="dimmed" size="sm">
                    © 2026 Karatasyapı. Tüm hakları saklıdır.
                </Text>
                <Group gap={20} className={classes.links}>
                    <Anchor component={Link} to="/privacy-policy" c="dimmed" size="sm">
                        Gizlilik Politikası
                    </Anchor>
                    <Anchor component={Link} to="/terms-of-use" c="dimmed" size="sm">
                        Kullanım Koşulları
                    </Anchor>
                    <Anchor href="https://www.instagram.com/karatas_insaat_ltd" target="_blank" c="dimmed" size="sm">
                        Instagram
                    </Anchor>
                </Group>
            </Container>
        </footer>
    );
}
