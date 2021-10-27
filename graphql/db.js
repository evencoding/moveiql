export const people = [
  {
    id: "0",
    name: "Jungwoo",
    age: 27,
    gender: "female",
  },
  {
    id: "1",
    name: "Maki",
    age: 30,
    gender: "male",
  },
  {
    id: "2",
    name: "Donghee",
    age: 30,
    gender: "female",
  },
  {
    id: "3",
    name: "Jisang",
    age: 29,
    gender: "female",
  },
  {
    id: "4",
    name: "Eri",
    age: 24,
    gender: "female",
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === String(id));
  return filteredPeople[0];
};
