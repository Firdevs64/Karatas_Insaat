import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Container, Title, Text, SimpleGrid, Image, Button, Modal } from '@mantine/core';
import { projectsData } from '../projectsData';
import { IconArrowLeft } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

export function ProjectDetails() {
    const { id } = useParams();
    const { pathname } = useLocation();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const project = projectsData.find((p) => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    if (!project) {
        return (
            <Container size="md" py={120} ta="center">
                <Title>Proje Bulunamadı</Title>
                <Button component={Link} to="/" mt="md" variant="outline" color="dark">
                    Ana Sayfaya Dön
                </Button>
            </Container>
        );
    }

    return (
        <>
            <Container size="xl" py={120}>
                <Button
                    component={Link}
                    to="/#projects"
                    variant="subtle"
                    color="dark"
                    leftSection={<IconArrowLeft size={16} />}
                    mb="xl"
                >
                    Tüm Projelere Dön
                </Button>

                <Title order={1} mb="xs" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {project.title}
                </Title>
                <Text c="dimmed" mb="xl" size="lg" style={{ textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {project.category}
                </Text>

                <Text mb={60} maw={800} size="lg" lh={1.6}>
                    {project.description}
                </Text>

                <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={30}>
                    {project.images.map((media, index) => {
                        const isVideo = media.endsWith('.mp4');
                        return (
                            <div
                                key={index}
                                onClick={() => setSelectedImage(media)}
                                style={{
                                    cursor: 'pointer',
                                    position: 'relative',
                                    transition: 'transform 0.2s ease',
                                    aspectRatio: '4/3',
                                    borderRadius: 'var(--mantine-radius-md)',
                                    overflow: 'hidden',
                                    boxShadow: 'var(--mantine-shadow-md)'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            >
                                {isVideo ? (
                                    <video
                                        src={media}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        muted
                                        loop
                                        onMouseOver={(e) => e.currentTarget.play()}
                                        onMouseOut={(e) => e.currentTarget.pause()}
                                    />
                                ) : (
                                    <Image
                                        src={media}
                                        radius="md"
                                        width="100%"
                                        height="100%"
                                        fit="cover"
                                    />
                                )}
                                {isVideo && (
                                    <div style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        backgroundColor: 'rgba(0,0,0,0.5)',
                                        borderRadius: '50%',
                                        padding: '10px',
                                        pointerEvents: 'none'
                                    }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </SimpleGrid>
            </Container>

            <Modal
                opened={!!selectedImage}
                onClose={() => setSelectedImage(null)}
                size="xl"
                centered
                padding={0}
                withCloseButton={false}
                styles={{ body: { backgroundColor: 'black' } }}
            >
                {selectedImage?.endsWith('.mp4') ? (
                    <video
                        src={selectedImage}
                        controls
                        autoPlay
                        style={{ width: '100%', display: 'block' }}
                    />
                ) : (
                    <Image src={selectedImage} />
                )}
            </Modal>
        </>
    );
}
