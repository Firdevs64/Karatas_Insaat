import { Container, Title, Text, Stack, Button, Group } from '@mantine/core';
import { Link } from 'react-router-dom';

export function TermsOfUse() {
    return (
        <Container size="lg" py={100}>
            <Title order={1} mb="xl">Kullanım Koşulları</Title>
            <Stack gap="md">
                <Text>
                    Son Güncelleme: {new Date().toLocaleDateString('tr-TR')}
                </Text>
                <Text>
                    Lütfen web sitemizi kullanmadan önce bu Kullanım Koşullarını dikkatlice okuyunuz.
                    Web sitemizi ziyaret ederek bu koşulları kabul etmiş sayılırsınız.
                </Text>

                <Title order={3} mt="md">1. Hizmetlerin Kullanımı</Title>
                <Text>
                    Web sitemizdeki içerikler (metinler, görseller, proje detayları) yalnızca bilgilendirme amaçlıdır.
                    İzinsiz kopyalanması veya ticari amaçla kullanılması yasaktır.
                </Text>

                <Title order={3} mt="md">2. Fikri Mülkiyet</Title>
                <Text>
                    "Karataş İnşaat" adı, logosu ve web sitesindeki tüm tasarımlar firmamıza aittir ve fikri mülkiyet kanunları ile korunmaktadır.
                </Text>

                <Title order={3} mt="md">3. Sorumluluk Reddi</Title>
                <Text>
                    Web sitemizde yer alan bilgilerin doğruluğu ve güncelliği konusunda azami özen gösterilmekle birlikte,
                    oluşabilecek hatalardan veya eksikliklerden dolayı sorumluluk kabul edilmez.
                </Text>

                <Title order={3} mt="md">4. Değişiklikler</Title>
                <Text>
                    Karataş İnşaat, bu kullanım koşullarını dilediği zaman değiştirme hakkını saklı tutar.
                    Değişiklikler web sitesinde yayınlandığı andan itibaren geçerli olur.
                </Text>

                <Group mt="xl">
                    <Button component={Link} to="/" variant="subtle" color="black" p={0}>
                        ← Ana Sayfaya Dön
                    </Button>
                </Group>
            </Stack>
        </Container>
    );
}
