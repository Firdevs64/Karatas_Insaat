import { Container, Title, SimpleGrid, Card, Text, ThemeIcon, rem } from '@mantine/core';
import { IconHome, IconTools, IconBuildingSkyscraper, IconPencil, IconCheck } from '@tabler/icons-react';
import classes from './Services.module.css';

const services = [
    {
        icon: IconHome,
        title: 'Anahtar Teslim Konut',
        description: 'Müstakil ev ve villa projelerinizi temelden çatıya eksiksiz teslim ediyoruz.',
    },
    {
        icon: IconPencil,
        title: 'Kişiye Özel Tasarım',
        description: 'Arsa + Proje + Uygulama üçlüsünü sizin yaşam tarzınıza göre şekillendiriyoruz.',
    },
    {
        icon: IconBuildingSkyscraper,
        title: 'Blok Yapı Projeleri',
        description: 'Modern, güvenli ve estetik çok katlı konut çözümleri.',
    },
    {
        icon: IconTools,
        title: 'Tadilat & Yenileme',
        description: 'Mevcut yapılarınızı modern standartlara göre yeniliyoruz.',
    },
];

export function Services() {
    return (
        <Container size="xl" py={120} id="services" style={{ backgroundColor: 'var(--mantine-color-gray-0)' }}>
            <Title className={classes.title} order={2} ta="center" mb="xl">
                Hizmetlerimiz
            </Title>
            <Text c="dimmed" ta="center" mb={60} maw={600} mx="auto">
                Projelerimizi başından sonuna kadar birebir ilgi ve şeffaf süreç yönetimi ile yürütüyoruz.
            </Text>

            <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing={30}>
                {services.map((service) => (
                    <Card key={service.title} padding="lg" radius="md" className={classes.card}>
                        <ThemeIcon size={60} radius="md" variant="light" color="dark" mb="md">
                            <service.icon style={{ width: rem(30), height: rem(30) }} stroke={1.5} />
                        </ThemeIcon>
                        <Text fw={600} size="lg" mb="sm" className={classes.cardTitle}>
                            {service.title}
                        </Text>
                        <Text size="sm" c="dimmed" lh={1.6}>
                            {service.description}
                        </Text>
                    </Card>
                ))}
            </SimpleGrid>

            <Container size="xl" mt={120} pt={80} pb={80} style={{ borderTop: '1px solid var(--mantine-color-gray-2)' }}>
                <Title order={3} ta="center" mb={60} className={classes.subtitle}>Neden Bizi Tercih Etmelisiniz?</Title>

                <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50} verticalSpacing={50}>
                    <div className={classes.feature}>
                        <ThemeIcon variant="light" color="dark" size={50} radius="md" mb="md">
                            <IconCheck style={{ width: rem(26), height: rem(26) }} stroke={1.5} />
                        </ThemeIcon>
                        <Text fw={700} size="lg" mb="sm" ff="Playfair Display">Tek Elden Yönetim</Text>
                        <Text c="dimmed" lh={1.6}>
                            Projelendirme, tasarım, uygulama ve teslim süreçlerinin tamamını tek çatı altında profesyonelce yönetiyoruz.
                        </Text>
                    </div>

                    <div className={classes.feature}>
                        <ThemeIcon variant="light" color="dark" size={50} radius="md" mb="md">
                            <IconCheck style={{ width: rem(26), height: rem(26) }} stroke={1.5} />
                        </ThemeIcon>
                        <Text fw={700} size="lg" mb="sm" ff="Playfair Display">Şeffaf Süreç</Text>
                        <Text c="dimmed" lh={1.6}>
                            Sürpriz maliyetler yok. Zamanlama ve bütçe planlaması en başından net belirlenir ve şeffaf bir şekilde ilerler.
                        </Text>
                    </div>

                    <div className={classes.feature}>
                        <ThemeIcon variant="light" color="dark" size={50} radius="md" mb="md">
                            <IconCheck style={{ width: rem(26), height: rem(26) }} stroke={1.5} />
                        </ThemeIcon>
                        <Text fw={700} size="lg" mb="sm" ff="Playfair Display">Yüksek İlgi & İletişim</Text>
                        <Text c="dimmed" lh={1.6}>
                            Butik hizmet anlayışımızla her proje için birebir takip sağlıyor, her aşamada sizinle sürekli iletişimde kalıyoruz.
                        </Text>
                    </div>

                    <div className={classes.feature}>
                        <ThemeIcon variant="light" color="dark" size={50} radius="md" mb="md">
                            <IconCheck style={{ width: rem(26), height: rem(26) }} stroke={1.5} />
                        </ThemeIcon>
                        <Text fw={700} size="lg" mb="sm" ff="Playfair Display">Risksiz Teslim</Text>
                        <Text c="dimmed" lh={1.6}>
                            Anahtar teslim yaklaşımıyla tüm sorumluluğu üstleniyor, size sadece yeni yaşam alanınızın keyfini çıkarmayı bırakıyoruz.
                        </Text>
                    </div>
                </SimpleGrid>
            </Container>
        </Container>
    );
}
