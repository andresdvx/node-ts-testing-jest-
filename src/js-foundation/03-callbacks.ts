export interface User {
  id: number;
  name: string;
}

const users: User[] = [
  {
    id: 1,
    name: "Andrés",
  },
  {
    id: 2,
    name: "Juancho",
  },
];

export const getUserById = (
  id: number,
  callback: (err?: string, user?: User) => void
) => {
  const user = users.find((user) => {
    return user.id == id;
  });

  if (!user) {
    return callback("User not found " + id);
  }

  return callback(undefined, user);
};

// const printUser = (id: number): void => {
//   getUserById(id, (err, user) => {
//     if (err) {
//       console.log(err);
//       return;
//     }

//     console.log(user);
//   });
// };

// printUser(2);