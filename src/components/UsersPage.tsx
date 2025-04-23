// import { useUsersQuery } from '@/hooks/useUsersQuery';

// export default function UserList() {
//   const { data, isLoading, isError } = useUsersQuery();

//   if (isLoading) return <div>Loading users...</div>;
//   if (isError) return <div>Error loading users.</div>;

//   return (
//     <ul className="space-y-4">
//       {data?.map((user) => (
//         <li key={user.id} className="border p-4 rounded shadow">
//           <h2 className="text-xl font-semibold">{user.name} ({user.username})</h2>
//           <p>Email: {user.email}</p>
//           <p>Phone: {user.phone}</p>
//           <p>Website: {user.website}</p>
//           <p>Company: {user.company.name}</p>
//         </li>
//       ))}
//     </ul>
//   );
// }
