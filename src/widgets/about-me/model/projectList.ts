import { Project } from '@/features/about-me/model';

export const projectList: Project[] = [
  {
    id: 'roolz',
    name: 'Roolz',
    logoUrl: '/images/preview/roolz.png',
    position: 'Senior React Developer',
    period: {
      from: new Date(2024, 6, 1),
    },
    link: 'https://roolz.net/en',
    techStack: [
      'React', 'Next.js', 'Lerna', 'Yarn Workspace',
      'Mui', 'CSS Modules', 'MobX', 'TypeScript', 'React Hook Form',
      'Webpack', 'Vite', 'Angular', 'React Final Form',
    ],
    other: {
      teamMembersCount: 25,
    },
  },
  {
    id: 'aibohealth',
    name: 'AiboHealth',
    position: 'React Developer',
    techStack: [
      'React', 'CSS Modules','SCSS', 'Redux-Saga', 'TypeScript',
      'Formik','webpack', 'Webpack Module Federation', ' MS Client API',
      'JWT Authorization', 'WebSocket',
    ],
    period: {
      from: new Date(2021, 10, 1),
      to: new Date(2024, 6, 1),
    },
    logoUrl: '/images/preview/aibohealth.png',
    link: 'https://www.aibohealth.com',
    other: {
      teamMembersCount: 35,
    },
  },
  {
    id: 'getswap',
    position: 'React Native Developer',
    techStack: [
      'React',
      'React Native',
      'Express.js',
      'MongoDB',
      'realm',
      'Expo',
      'expo-camera',
      'REST API',
      'TypeScript',
      'react-hook-form',
      'react-native-cli',
      'React Native Navigation',
      'react-query',
      'Zustand',
    ],
    logoUrl: '/images/preview/getswap.png',
    name: 'Getswap - MVP',
    period: {
      from: new Date(2025, 2, 1),
      to: new Date(2025, 8, 1),
    },
    other: {
      teamMembersCount: 4,
    },
  },
  {
    id: 'ecw',
    logoUrl: '/images/preview/ecw.png',
    position: 'React Native Developer',
    period: {
      from: new Date(2021, 1, 1),
      to: new Date(2021, 9, 1),
    },
    techStack: [
      'React Native', 'React',
      'TypeScript',
      'Apollo Client',
      'react-native-cli',
      'GraphQL',
      'Formik',
      'Firebase Analytics',
      'Crashlytics',
      'React Native Navigation',
      'React Native FileSystem',
    ],
    name: 'Education Cannot Wait - ECW',
    link: 'https://www.educationcannotwait.org',
    linkPreview: 'www.educationcannotwait.org',
    other: {
      teamMembersCount: 8,
    },
  },
];
