import { Container, Title, Text, Grid, Image } from '@mantine/core';
import classes from './About.module.css';

export function About() {
    return (
        <Container size="xl" py={120} id="about">
            <Grid gutter={80} align="center">
                <Grid.Col span={{ base: 12, md: 6 }}>
                    <div className={classes.imageWrapper}>
                        <Image
                            src="/images/project-1-itfaiye/11.jpeg"
                            radius="sm"
                            className={classes.image}
                        />
                    </div>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6 }}>
                    <Text className={classes.subtitle}>HAKKIMIZDA</Text>
                    <Title className={classes.title} order={2} mt="sm" mb="md">
                        Karataş İnşaat
                    </Title>
                    <Text className={classes.description} c="dimmed">
                        İnşaat sektöründe, sıfırdan kişiye özel konut projeleri, mimari tasarım, tadilat ve yapı yenileme hizmetleri sunuyoruz.
                        Müstakil ve villa projelerini, proje geliştirmeden anahtar teslimine kadar tüm aşamalarıyla profesyonel olarak yönetiyoruz.
                    </Text>
                    <Text className={classes.description} c="dimmed" mt="md">
                        Kalite standartlarına bağlı, sürdürülebilir ve güvenilir yapılar üreterek müşterilerimize uzun vadeli değer sağlıyoruz.
                    </Text>
                </Grid.Col>
            </Grid>
        </Container>
    );
}
