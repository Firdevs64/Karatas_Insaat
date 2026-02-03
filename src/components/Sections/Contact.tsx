import { Container, Title, Text, SimpleGrid, TextInput, Textarea, Button, Group, Box } from '@mantine/core';
import { IconMapPin, IconPhone, IconAt, IconBrandInstagram } from '@tabler/icons-react';
import classes from './Contact.module.css';

export function Contact() {
    return (
        <section id="contact" className={classes.contact}>
            <Container size="xl">
                <Box className={classes.header} ta="center" mb={50}>
                    <Title className={classes.title} mb="sm">Bizimle İletişime Geçin</Title>
                    <Text c="dimmed" size="lg" maw={600} mx="auto">
                        Hayalinizdeki projeyi hayata geçirmek için ilk adımı atın. Sorularınız için bize her zaman ulaşabilirsiniz.
                    </Text>
                </Box>

                <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
                    <div className={classes.formWrapper}>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <Title order={3} mb="xl" className={classes.formTitle}>Mesaj Gönderin</Title>
                            <SimpleGrid cols={2} mt="xl">
                                <TextInput label="Adınız" placeholder="Adınız" variant="filled" />
                                <TextInput label="Soyadınız" placeholder="Soyadınız" variant="filled" />
                            </SimpleGrid>

                            <TextInput label="E-mail" placeholder="ornek@email.com" mt="md" variant="filled" />
                            <TextInput label="Konu" placeholder="Mesajınızın konusu" mt="md" variant="filled" />
                            <Textarea
                                mt="md"
                                label="Mesajınız"
                                placeholder="Projenizden bahsedin..."
                                maxRows={10}
                                minRows={5}
                                autosize
                                variant="filled"
                            />

                            <Group mt="xl">
                                <Button type="submit" size="md" className={classes.control}>
                                    Gönder
                                </Button>
                            </Group>
                        </form>
                    </div>

                    <div className={classes.infoWrapper}>
                        <Title order={3} mb="xl" className={classes.infoTitle}>İletişim Bilgileri</Title>

                        <div className={classes.contactInfo}>
                            <div className={classes.item}>
                                <div className={classes.iconBox}>
                                    <IconMapPin size={24} stroke={1.5} />
                                </div>
                                <div>
                                    <Text size="lg" fw={600} mb={4} className={classes.itemTitle}>Adres</Text>
                                    <Text c="dimmed">
                                        Mimar Sinan Mah. Bosna Cad No: 23<br />
                                        Çekmeköy, İstanbul
                                    </Text>
                                </div>
                            </div>

                            <div className={classes.item}>
                                <div className={classes.iconBox}>
                                    <IconPhone size={24} stroke={1.5} />
                                </div>
                                <div>
                                    <Text size="lg" fw={600} mb={4} className={classes.itemTitle}>Telefon</Text>
                                    <Text c="dimmed">+90 (555) 123 45 67</Text>
                                </div>
                            </div>

                            <div className={classes.item}>
                                <div className={classes.iconBox}>
                                    <IconAt size={24} stroke={1.5} />
                                </div>
                                <div>
                                    <Text size="lg" fw={600} mb={4} className={classes.itemTitle}>E-mail</Text>
                                    <Text component="a" href="mailto:info@karatasyapi.com" c="dimmed" style={{ textDecoration: 'none' }}>info@karatasyapi.com</Text>
                                </div>
                            </div>

                            <div className={classes.item}>
                                <div className={classes.iconBox}>
                                    <IconBrandInstagram size={24} stroke={1.5} />
                                </div>
                                <div>
                                    <Text size="lg" fw={600} mb={4} className={classes.itemTitle}>Instagram</Text>
                                    <Text component="a" href="https://www.instagram.com/karatas_insaat_ltd" target="_blank" c="dimmed" style={{ textDecoration: 'none' }}>@karatas_insaat_ltd</Text>
                                </div>
                            </div>
                        </div>


                    </div>
                </SimpleGrid>
            </Container>
        </section>
    );
}
