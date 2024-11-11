import { Game } from "../types/Game";
import { faker } from "@faker-js/faker";

const getRandomElement = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];


export const games = {
  getGames: (numOfGames: number): Game[] => {
    return Array.from({ length: numOfGames }, () => ({
      id: faker.number.int(),
      sportType: getRandomElement(['Soccer', 'Basketball', 'Baseball', 'Hockey']),
      first_team: faker.location.city(),
      second_team: faker.location.city(),
      odds: {
        first_team: Number(faker.finance.amount({ min: 1.5, max: 5.0 })),
        second_team: Number(faker.finance.amount({ min: 1.5, max: 5.0 })),
      },
      bets: {
        first_team: faker.number.int({ min: 0, max: 1000 }),
        second_team: faker.number.int({ min: 0, max: 1000 }),
      },
    }));
  },
};
