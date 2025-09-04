import { Experience } from '@/features/about-me/model';

export const experienceList: Experience[] = [
  {
    id: crypto.randomUUID(),
    name: 'Roolz',
    period: { from: new Date(2024, 6, 1) },
    logoUrl: '/images/roolz-logo.jpeg',
    location: { country: 'by', city: 'minsk' },
    position: 'Senior React Developer',
  },
  {
    id: crypto.randomUUID(),
    name: 'Vention',
    period: { from: new Date(2023, 7, 1), to: new Date(2024, 6, 1) },
    logoUrl: '/images/vention-logo.jpeg',
    location: { country: 'bg', city: 'sofia' },
    position: 'React / React Native Developer',
  },
  {
    id: crypto.randomUUID(),
    name: 'iTechArt',
    period: { from: new Date(2021, 9, 1), to: new Date(2023, 7, 1) },
    logoUrl: '/images/itechart-logo.jpeg',
    location: { country: 'by', city: 'homel' },
    position: 'React Native / React Developer',
  },
  {
    id: crypto.randomUUID(),
    name: 'MBicycle',
    period: { from: new Date(2021, 1, 1), to: new Date(2021, 9, 1) },
    logoUrl: '/images/mbicycle-logo.jpeg',
    location: { country: 'by', city: 'homel' },
    position: 'React Native Developer',
  },
];
