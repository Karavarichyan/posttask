// import { useQuery } from '@tanstack/react-query';

// export interface User {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
//   phone: string;
//   website: string;
//   company: {
//     name: string;
//     catchPhrase: string;
//     bs: string;
//   };
//   address: {
//     street: string;
//     suite: string;
//     city: string;
//     zipcode: string;
//     geo: {
//       lat: string;
//       lng: string;
//     };
//   };
// }

// export const useUsersQuery = () => {
//   return useQuery<User[]>({
//     queryKey: ['users'],
//     queryFn: async () => {
//       await new Promise((resolve) => setTimeout(resolve, 3000));
//       const res = await fetch('https://jsonplaceholder.typicode.com/users');
//       if (!res.ok) {
//         throw new Error('Failed to fetch users');
//       }
//       return res.json();
//     },
//   });
// };
