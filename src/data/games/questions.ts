import {GameQuestionare} from './types';

export const game_one: GameQuestionare[] = [
  {
    question:
      'Which month and year was this video released in our streaming platform?',
    options: ['May 2021', 'January 2022', 'January 2021', 'December 2021'],
    rightAnswer: 2,
  },
  {
    question: 'Who is the actor interpreting HackyMan?',
    options: ['Brad Pitt', 'Tom Hanks', 'Will Smith', 'Tom Cruise'],
    rightAnswer: 1,
  },
  {
    question:
      'Which other movie is available in our platform where the previous actor is present?',
    options: [
      'How to train your dragon',
      'Ready Player One',
      "Handmaid's tale",
      'Breaking Bad',
    ],
    rightAnswer: 3,
  },
];
