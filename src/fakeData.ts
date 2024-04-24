import { faker } from "@faker-js/faker";

export const generateData = () => {
  let data = [];
  for (let i = 0; i < 12; i++) {
    data.push({
      icon: faker.helpers.arrayElement(["messenger", "instagram"]),
      name: faker.helpers.arrayElement([
        "tactics",
        "web",
        "metrics",
        "functionality",
        "data",
        "quality",
        "accounts",
        "optimization",
        "metrics",
        "identity",
        "accountability",
      ]),
      engagedUnique: `${faker.number.int({
        min: 1,
        max: 100,
      })} / ${faker.number.int({ min: 1, max: 50 })}`,
      acquired: faker.number.int({ min: 1, max: 100 }),
      conversion: faker.number.int({ min: 1, max: 15 }),
    });
  }
  return data;
};
