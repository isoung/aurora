import facepaint from 'facepaint';

const BreakPoints = [
  576, 768, 992, 1200
];

export const MediaQueries = facepaint(
  ['@media (max-width: 576px)', ...BreakPoints.map(bp => `@media (min-width: ${bp}px)`)]
);
