import { Container, Title, Text, Button, Overlay } from '@mantine/core';
import classes from './Hero.module.css';

export function Hero() {
    return (
        <div className={classes.hero}>
            <Overlay
                gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, .7) 100%)"
                opacity={1}
                zIndex={1}
            />
            <Container className={classes.container} size="md">
                <Title className={classes.title}>
                    Hayallerinizi İnşa Ediyoruz
                </Title>
                <Text className={classes.description} size="xl" mt="xl">
                    Sıfırdan kişiye özel konut projeleri, mimari tasarım ve yapı yenileme hizmetleri.
                    Kalite standartlarına bağlı, sürdürülebilir ve güvenilir yapılar.
                </Text>

                <Button
                    variant="outline"
                    size="xl"
                    radius="xs"
                    className={classes.control}
                    mt={50}
                    onClick={() => {
                        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                >
                    PROJELERİMİZİ İNCELEYİN
                </Button>
            </Container>
        </div>
    );
}
