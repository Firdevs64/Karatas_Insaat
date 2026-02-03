import { Container, Title, Text, Stack, Button, Group } from '@mantine/core';
import { Link } from 'react-router-dom';

export function PrivacyPolicy() {
    return (
        <Container size="lg" py={100}>
            <Title order={1} mb="xl">Gizlilik Politikası</Title>
            <Stack gap="md">
                <Text>
                    Son Güncelleme: {new Date().toLocaleDateString('tr-TR')}
                </Text>
                <Text>
                    Karataş İnşaat ("biz", "tarafımız", "bizim") olarak, ziyaretçilerimizin gizliliğine önem veriyoruz.
                    Bu Gizlilik Politikası, web sitemizi ziyaret ettiğinizde bilgilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu açıklar.
                </Text>

                <Title order={3} mt="md">1. Toplanan Bilgiler</Title>
                <Text>
                    Web sitemiz üzerinden "İletişim" formu aracılığıyla bize ulaştığınızda adınız, e-posta adresiniz ve mesajınız gibi kişisel bilgileri toplayabiliriz.
                    Bu bilgiler yalnızca size geri dönüş yapmak amacıyla kullanılır.
                </Text>

                <Title order={3} mt="md">2. Bilgilerin Kullanımı</Title>
                <Text>
                    Topladığımız bilgileri aşağıdaki amaçlarla kullanabiliriz:
                    - İletişim taleplerinize yanıt vermek
                    - Hizmetlerimizi geliştirmek
                    - Yasal yükümlülükleri yerine getirmek
                </Text>

                <Title order={3} mt="md">3. Çerezler (Cookies)</Title>
                <Text>
                    Web sitemiz, kullanıcı deneyimini geliştirmek için çerezler kullanabilir. Çerezleri tarayıcı ayarlarınızdan yönetebilirsiniz.
                </Text>

                <Title order={3} mt="md">4. İletişim</Title>
                <Text>
                    Gizlilik politikamızla ilgili sorularınız için info@karatasyapi.com adresinden bizimle iletişime geçebilirsiniz.
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
