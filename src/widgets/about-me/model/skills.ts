export const devSkills = {
  // 4 cells because 4 item in outer array
  frameworks: [
    [['React JS']],
    [['React Native']],
    [['Next.js']],
    [['Node.js']],
  ],
  // 1 cell because 1 item in outer array
  languages: [
    [['JavaScript'], ['TypeScript']],
  ],
  libs: [
    [['react-router', 'Webpack / Vite', 'Lerna / nx']],
    [['Navigation', 'Firebase', 'Reanimated']],
    [['Jest', 'Cypress', 'Storybook']],
    [['Express.js', 'MongoDB', 'TypeORM']],
  ],
  // 3 cells, when the first cell is wide for 2 cell
  others: [
    [['Redux', 'Redux-Saga'], ['MobX', 'Zustand']],
    [['Git', 'Databases', 'Docker']],
    [['CSS / SCSS', 'Mui', 'Responsive']],
  ],
};

export const getSoftSkills = (t: (val: string) => string) => [
  [[t('skills.soft.code_quality')]],
  [[t('skills.soft.mentoring')]],
  [[t('skills.soft.refinement')]],
  [[t('skills.soft.communication')]],
];
