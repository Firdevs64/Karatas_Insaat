import { Container, Title, SimpleGrid, Card, Image, Text, AspectRatio } from '@mantine/core';
import { Link } from 'react-router-dom';
import classes from './Projects.module.css';
import { projectsData } from '../../projectsData';

export function Projects() {
    return (
        <Container size="xl" py={120} id="projects">
            <Text className={classes.subtitle} ta="center">PORTFOLIO</Text>
            <Title order={2} className={classes.title} ta="center" mt="sm" mb={60}>
                Projelerimiz
            </Title>

            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing={40}>
                {projectsData.map((project) => (
                    <Card
                        key={project.id}
                        padding={0}
                        radius={0}
                        className={classes.card}
                        component={Link}
                        to={`/project/${project.id}`}
                    >
                        <AspectRatio ratio={3 / 4}>
                            <Image src={project.cover} className={classes.image} />
                        </AspectRatio>
                        <div className={classes.overlay}>
                            <Text className={classes.projectTitle}>{project.title}</Text>
                            <Text className={classes.projectLocation}>{project.category}</Text>
                        </div>
                    </Card>
                ))}
            </SimpleGrid>
        </Container>
    );
}
