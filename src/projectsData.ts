export interface Project {
    id: string;
    title: string;
    category: string;
    cover: string;
    images: string[];
    description?: string;
}

export const projectsData: Project[] = [
    {
        id: 'itfaiye',
        title: 'Konut Projesi 1',
        category: 'Özel Konut Tasarımı',
        cover: '/images/project-1-itfaiye/07.jpeg',
        images: [
            '/images/project-1-itfaiye/01.png',
            '/images/project-1-itfaiye/02.png',
            '/images/project-1-itfaiye/03.png',
            '/images/project-1-itfaiye/04.png',
            '/images/project-1-itfaiye/05.png',
            '/images/project-1-itfaiye/06.mp4',
            '/images/project-1-itfaiye/07.jpeg',
            '/images/project-1-itfaiye/08.jpeg',
            '/images/project-1-itfaiye/09.jpeg',
            '/images/project-1-itfaiye/10.jpeg',
            '/images/project-1-itfaiye/11.jpeg',
            '/images/project-1-itfaiye/12.jpeg',
            '/images/project-1-itfaiye/13.jpeg',
        ],
    },
    {
        id: 'ozel-konut',
        title: 'Konut Projesi 2',
        category: 'Konut Projesi',
        cover: '/images/project-2/01.jpeg',
        images: [
            '/images/project-2/01.jpeg',
            '/images/project-2/02.jpeg',
        ],
    },
    {
        id: 'villa',
        title: 'Konut Projesi 3',
        category: 'Konut Projesi',
        cover: '/images/project-3/01.jpeg',
        images: [
            '/images/project-3/01.jpeg',
            '/images/project-3/02.jpeg',
        ],
    },
    {
        id: 'konut-sitesi',
        title: 'Konut Projesi 4',
        category: 'Konut Projesi',
        cover: '/images/project-4/01.jpeg',
        images: [
            '/images/project-4/01.jpeg',
        ],
    },
    {
        id: 'ticari',
        title: 'Konut Projesi 5',
        category: 'Konut Projesi',
        cover: '/images/project-5/01.jpeg',
        images: [
            '/images/project-5/01.jpeg',
        ],
    },
    {
        id: 'cizimler',
        title: 'Konut Projesi 6',
        category: 'Konut Projesi',
        cover: '/images/ornekprojecizimleri/01.jpeg',
        images: [
            '/images/ornekprojecizimleri/01.jpeg',
            '/images/ornekprojecizimleri/02.jpeg',
            '/images/ornekprojecizimleri/03.jpeg',
            '/images/ornekprojecizimleri/04.jpeg',
        ],
    },
];
