export default defineEventHandler((event) => {
  console.log(event);

  return [
    {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    },
  ];
});
